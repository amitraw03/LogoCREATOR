import React from 'react'
// import { Button } from './components/ui/button' 
import Header from './components/Header'
import SideNav from './components/SideNav'

const App = () => {
  return (
    <>
      <Header />
    <div className='w-64 fixed'>
       <SideNav selectedIndex={(value)=>console.log(value)}/>
    </div>
    <div className='ml-64'>
        Body
    </div>
    </>
  )
}

export default App