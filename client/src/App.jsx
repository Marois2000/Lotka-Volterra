import { useState } from 'react'
import { Hero } from './sections/hero'
import { Introduction } from './sections/introduction'

function App() {

  return (
    <div className='w-full flex justify-center bg-neutral-300 flex-col'>
      <Hero />
      <Introduction />
    </div>
  )
}

export default App
