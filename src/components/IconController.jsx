import { BicepsFlexed, Ghost, Star } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { Slider } from "@/components/ui/slider"
import ColorPickerController from './ColorPickerController';
import { UpdateStorageContext } from '@/context/UpdateStorageContext';
import IconList from './IconList';


function IconController() {
    //now while updating size, rotation and color value to apply it in the iconPreview section,
    // we'll store that data in local storage with useEffect 
    const storageValue = JSON.parse(localStorage.getItem('value'));

    const [size, setSize] = useState(storageValue? storageValue?.iconSize : 280); // condn for persisting prev changes
    const [rotate, setRotate] = useState(storageValue ? storageValue?.iconRotate : 0);
    const [color, setColor] = useState(storageValue ? storageValue?.iconColor : '#fff');
    const [icon, setIcon] = useState(storageValue ? storageValue?.icon : 'Star');

    // context state Variables
    const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);
    useEffect(() => {
        const updatedValue = {
            ...storageValue,
            iconSize: size,
            iconRotate: rotate,
            iconColor: color,
            icon: icon  //name of icon
        }
        setUpdateStorage(updatedValue); // setting updated icon controller data to context
        localStorage.setItem('value', JSON.stringify(updatedValue));

    }, [size, rotate, color, icon]);

    return (
        <div>
            <div>
                <IconList selectedIcon={(icon) => setIcon(icon)}/>
                <div className='py-2'>
                    <label className='flex justify-between items-center p-2'>Size <span>{size} px</span></label>
                    <Slider defaultValue={[size]} max={512} step={1}
                        onValueChange={(value) => setSize(value[0])} />
                </div>

                <div className='py-2'>
                    <label className='flex justify-between items-center p-2'>Rotate <span>{rotate} °</span></label>
                    <Slider defaultValue={[rotate]} max={360} step={1}
                        onValueChange={(value) => setRotate(value[0])} />
                </div>

                <div className='py-2'>
                    <label className='flex  items-center p-2'>Icon color</label>
                    <ColorPickerController hideController={true}
                        selectedColor={(color) => setColor(color)} />
                </div>

            </div>
        </div>
    )
}

export default IconController