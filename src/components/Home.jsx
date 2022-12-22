import React from 'react'
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
        <button>TRY NOW!</button>
    </header>
    </>
  )
}
