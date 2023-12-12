import { useState } from 'react'
import { Hero } from './sections/hero'
import { Introduction } from './sections/introduction'
import { ModelDesc } from './sections/modeldesc'
import { DataFit } from './sections/datafit'
import { Results } from './sections/results'
import { Conclusion } from './sections/conclusion'
import { Simulation } from './sections/simulation'
import { References } from './sections/references'
import { Navbar } from './components/navbar'

function App() {

  return (
    <div className='w-full flex justify-center items-center bg-neutral-300 flex-col overflow-y-auto'>
      <Navbar />
      <Hero />
      <Introduction />
      <ModelDesc />
      <DataFit />
      <Results />
      <Conclusion />
      <Simulation />
      <References />
    </div>
  )
}

export default App
