import { useState } from 'react'
import { Hero } from './sections/hero'
import { Introduction } from './sections/introduction'
import { ModelDesc } from './sections/modeldesc'
import { DataFit } from './sections/datafit'
import { Results } from './sections/results'
import { Conclusion } from './sections/conclusion'

function App() {

  return (
    <div className='w-full flex justify-center items-center bg-neutral-300 flex-col overflow-hidden'>
      <Hero />
      <Introduction />
      <ModelDesc />
      <DataFit />
      <Results />
      <Conclusion />
    </div>
  )
}

export default App
