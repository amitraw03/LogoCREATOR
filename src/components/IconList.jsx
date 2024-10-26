import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { icons, Star } from 'lucide-react'
import { iconList } from '@/constants/icons';


function IconList({ selectedIcon }) {
    const [openDialog, setOpenDialog] = useState(false);
    const storageValue = JSON.parse(localStorage.getItem('value'));
    const [icon, setIcon] = useState(storageValue ? storageValue?.icon : 'Star');
    
    // setting icon at instance time
    const Icon =({name,color,size})=>{
        const LucidIcon = icons[name];
        if(!LucidIcon){
            return null;
        }
        return <LucidIcon size={size} color={color} />
    }

    return (
        <div>
            <div>
                <label>Icon</label>
                <div onClick= {()=>{setOpenDialog(true)}}
                className='p-3 cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-md
             w-[50px] my-2 flex justify-center items-center'>
                <Icon name={icon} color='black' size={20} />
                    
                </div>
            </div>
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>

                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Select Your favourite Icon</DialogTitle>
                        <DialogDescription>
                            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6'>
                                {iconList.map((icon, index) => (
                                    <div key={index} onClick={() => { setOpenDialog(false); selectedIcon(icon); setIcon(icon) }}
                                        className='p-3 cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-sm
                                     w-[50px] my-2 flex justify-center items-center'>
                                        <Icon name={icon} color='black' size={20} />
                                    </div>
                                ))}
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>

            </Dialog>

        </div>
    )
}

export default IconList