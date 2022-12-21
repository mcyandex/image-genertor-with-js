import React, { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai';
import { MoonLoader } from 'react-spinners';

export const ImageGenerator = () => {
    // OpenAI configuration
    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_API_KEY,
    });

    const openai = new OpenAIApi(configuration);
    // OpenAI API config end


    // setting state for data management - text to search and image size
    const [data, setData] = useState({
        prompt: "",
        size: "",
    })
    const { prompt, size } = data;
    
    // image url and loading state manager
    const [imageURL, setImageURL] = useState("")
    const [loading, setLoading] = useState(false)




    const handleChange = (e) => {
        const { name, value } = e.target
        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    
    
    // image generator func
    const generateImage = async () => {
        setLoading(true)
        try{
            const response = await openai.createImage({
              prompt: prompt,
              n: 1,
              size: size,
            });
            setImageURL(response.data.data[0].url)
            setLoading(false)
        }
        catch(err){
            console.log(err)
        }
    }

    if(loading){
        return <MoonLoader />
    }


  return (
    <div>
        <div id='controllers'>
            <input 
            type="text" 
            name='prompt'
            placeholder='type image detail'
            value={prompt}
            onChange={handleChange}
            />
            <select name="size" defaultValue="Select Image Size" onChange={handleChange} >
                <option defaultValue="" value="Select Image Size" disabled>Select Size</option>
                <option value="256x256">Small</option>
                <option value="512x512">Medium</option>
                <option value="1024x1024">Large</option>
            </select>
            <button type='button' onClick={generateImage}>GENERATE IMAGE</button>
        </div>
        <div id='image'>
            <img src={imageURL} alt={prompt} />
        </div>
    </div>
  )
}
