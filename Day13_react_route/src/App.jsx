import React from 'react'
import Navbar from './components/Navbar'

import RoutesApp from './components/RoutesApp'

const App = () => {
  return (
    <div className='p-4 bg-slate-700 text-gray-900 h-screen'>
      <Navbar/>
      <RoutesApp/>
    </div>
  )
}

export default App