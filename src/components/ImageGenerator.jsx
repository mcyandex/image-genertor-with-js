import React, { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai';

export const ImageGenerator = () => {
    const [prompt, setPrompt] = useState("")
    const [size, setSize] = useState("")
    const [imageURL, setImageURL] = useState("")
    const [loading, setLoading] = useState(false)

    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    
    
    
    const generateImage = async () => {
        setLoading(true)
        try{
            const response = await openai.createImage({
              prompt: prompt,
              n: 2,
              size: "1024x1024",
            });
            setImageURL(response.data.data[0].url)
            setLoading(false)
        }
        catch(err){
            console.log(err)
        }
    }



  return (
    <div>
        <div>
            <input 
            type="text" 
            placeholder='type image detail'
            onChange={(e) => setPrompt(e.target.value)}
            />
            <select name="" id="">
                <option value="256x256">Small</option>
                <option value="512x512">Medium</option>
                <option value="1024x1024">Large</option>
            </select>
            <button type='button' onClick={generateImage}>GENERATE IMAGE</button>
        </div>
        <div>
            <img src={imageURL} alt={prompt} />
        </div>
    </div>
  )
}
