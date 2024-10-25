import React from 'react'
import { Button } from './ui/button'
import { Download } from 'lucide-react'

function Header() {
  return (
    <div className='p-4 shadow-sm border flex justify-between items-center'>
        <div className='flex items-center gap-2'>
            <img className='w-10 inline-block' src="/logo.png" alt="logo"/>
            <span className="font-extrabold text-black font-serif text-2xl">LogoJod</span>
        </div>
        <Button><Download/> Download</Button>
    </div>
  )
}

export default Header