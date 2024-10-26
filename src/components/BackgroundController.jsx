import { Slider } from "@/components/ui/slider"
import React, { useEffect, useState } from 'react'
import ColorPickerController from "./ColorPickerController";

function BackgroundController() {
  const [rounded, setRounded] = useState(0);
  const [padding, setPadding] = useState(0);
  const [color, setColor] = useState('#000');

  const storageValue = JSON.parse(localStorage.getItem('value'));
  useEffect(()=>{
     const updatedValue = {
         ...storageValue,
         bgRounded: rounded,
         bgPadding: padding,
         bgColor: color
     }

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
        <label className='flex  items-center p-2'>Icon color</label>
        <ColorPickerController hideController={false}
          selectedColor={(color) => setColor(color)} />
      </div>
    </div>
  )
}

export default BackgroundController