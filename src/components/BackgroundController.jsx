import { Slider } from "@/components/ui/slider"
import React, { useContext, useEffect, useState } from 'react'
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";

function BackgroundController() {
  const storageValue = JSON.parse(localStorage.getItem('value') || '{}');

  const [rounded, setRounded] = useState(storageValue? storageValue?.bgRounded : 0); // maintaining prev changes
  const [padding, setPadding] = useState(storageValue? storageValue?.bgPadding : 0);
  const [color, setColor] = useState(storageValue ? storageValue?.bgColor : '#D1D5DB');


  const {updateStorage, setUpdateStorage} = useContext(UpdateStorageContext);
  useEffect(()=>{
     const updatedValue = {
         ...storageValue,
         bgRounded: rounded,
         bgPadding: padding,
         bgColor: color
     }
     
     setUpdateStorage(updatedValue);
     localStorage.setItem('value', JSON.stringify(updatedValue));

  },[rounded, padding, color]);

  return (
    <div>
      <div className='py-2'>
        <label className='flex justify-between items-center p-2'>Rounded <span>{rounded} px</span></label>
        <Slider defaultValue={[0]} max={512} step={1}
          onValueChange={(value) => setRounded(value[0])} />
      </div>
      <div className='py-2'>
        <label className='flex justify-between items-center p-2'>Padding <span>{padding} px</span></label>
        <Slider defaultValue={[40]} max={100} step={1}
          onValueChange={(value) => setPadding(value[0])} />
      </div>
      <div className='py-2'>
      <label className='flex items-center p-2'>Background Color</label>
        <ColorPickerController hideController={false}
          selectedColor={(color) => setColor(color)} />
      </div>
    </div>
  )
}

export default BackgroundController