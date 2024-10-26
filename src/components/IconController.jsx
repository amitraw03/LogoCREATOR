import { BicepsFlexed } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Slider } from "@/components/ui/slider"
import ColorPickerController from './ColorPickerController';


function IconController() {
    const [size, setSize] = useState(280);
    const [rotate, setRotate] = useState(0);
    const [color, setColor] = useState('#fff');

    //now while updating size, rotation and color value to apply it in the iconPreview section,
    // we'll store that data in local storage with useEffect
    const storageValue = JSON.parse(localStorage.getItem('value'));
    useEffect(()=>{
       const updatedValue = {
           ...storageValue,
           iconSize: size,
           iconRotate: rotate,
           iconColor: color,
           icon: 'BicepsFlexed'
       }

       localStorage.setItem('value', JSON.stringify(updatedValue));

    },[size, rotate, color]);

    return (
        <div>
            <div>
                <label>Icon</label>
                <div className='p-3 cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-md
             w-[50px] my-2 flex justify-center items-center'>
                    <BicepsFlexed />
                </div>
                <div className='py-2'>
                <label className='flex justify-between items-center p-2'>Size <span>{size} px</span></label>
                <Slider defaultValue={[280]} max={512} step={1}
                 onValueChange={(value) => setSize(value[0])} />
                </div>

                <div className='py-2'>
                <label className='flex justify-between items-center p-2'>Rotate <span>{rotate} °</span></label>
                <Slider defaultValue={[0]} max={360} step={1}
                 onValueChange={(value) => setRotate(value[0])} />
                </div>

                <div className='py-2'>
                <label className='flex  items-center p-2'>Icon color</label>
                <ColorPickerController hideController={true}
                 selectedColor={(color)=> setColor(color)}/>
                </div>

            </div>
        </div>
    )
}

export default IconController