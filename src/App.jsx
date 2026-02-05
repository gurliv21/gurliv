import React from 'react'
import Header from './components/Header'
import InfoCard from './components/InfoCard'
import WorkBench from './WorkBench'
import Footer from './components/Footer'
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div>
      <Analytics />

      <WorkBench/>

      


      
    </div>
  )
}

export default App
