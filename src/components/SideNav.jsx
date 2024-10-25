import { Image, PencilRuler, Shield } from 'lucide-react'
import React, { useState } from 'react'

function SideNav({selectedIndex}) {
    const menuList = [
        {
            id: 1,
            name: 'Icon',
            Icon: PencilRuler
        },
        {
            id: 2,
            name: 'Background',
            Icon: Image
        },
        {
            id: 3,
            name: 'Upgrade',
            Icon: Shield
        },
    ]
    
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div>
            <div className='border h-screen'>
                {menuList.map((menu, index) => (
                    <h2 onClick={() =>{ setActiveIndex(index);
                        selectedIndex(index); // passing the index val to appjsx for dynamic body content
                    }}
                    className={`p-2 px-5 my-2 cursor-pointer text-lg text-gray-500 flex items-center
                     gap-2 hover:bg-primary hover:text-white ${activeIndex===index && 'bg-primary text-white'}`}
                        key={index}>
                        <menu.Icon />{menu.name}
                    </h2>
                ))}
            </div>
        </div>
    )
}

export default SideNav