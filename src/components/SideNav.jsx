import { ContactRound, Image, PencilRuler, Linkedin, Twitter } from 'lucide-react'
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
            name: 'Contact Us',
            Icon: ContactRound
        },
    ];
    
    const [activeIndex, setActiveIndex] = useState(0);
    const [showContact, setShowContact] = useState(false);

    const handleMenuClick = (index) => {
        setActiveIndex(index);
        if (index === 2) { // Contact Us index
            setShowContact(!showContact);
        } else {
            // passimg index value to parent component app.jsx
            setShowContact(false);
            selectedIndex(index);
        }
    };

    const socialLinks = [
        {
            name: 'LinkedIn',
            Icon: Linkedin,
            url: 'https://www.linkedin.com/in/amit-rawat-477866231/'
        },
        {
            name: 'Twitter',
            Icon: Twitter,
            url: 'https://x.com/rawatAmit30'
        }
    ];

    return (
        <div>
            <div className='border h-screen'>
                {menuList.map((menu, index) => (
                    <div key={index}>
                        <h2 
                            onClick={() => handleMenuClick(index)}
                            className={`p-2 px-5 my-2 cursor-pointer text-lg text-gray-500 flex items-center
                                gap-2 hover:bg-primary hover:text-white 
                                ${activeIndex === index && 'bg-primary text-white'}`}
                        >
                            <menu.Icon />{menu.name}
                        </h2>
                        
                        {/* Contact Links Dropdown */}
                        {showContact && index === 2 && (
                            <div className="ml-5 bg-gray-100 rounded-lg p-3 mx-4 transition-all duration-300 ">
                                {socialLinks.map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 p-2 text-gray-600 hover:text-primary hover:bg-gray-200 rounded-md transition-colors duration-200"
                                    >
                                        <social.Icon size={18} />
                                        <span className="text-sm">{social.name}</span>
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SideNav