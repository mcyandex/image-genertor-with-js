import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from './Footer'
import { Nav } from './Nav'

export const Home = () => {
  return (
    <>
    <Nav />
    <header>
        <h1>Text-to-Image</h1>
        <h2>- AI Image Generator -</h2>
        <h3>Easily create realistic Images by just entering a description.</h3>
        <br />
        <button><Link to="/image-generator">TRY NOW!</Link></button>
    </header>
    </>
  )
}
