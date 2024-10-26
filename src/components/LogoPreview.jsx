import { UpdateStorageContext } from '@/context/UpdateStorageContext';
import { icons } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react'

function LogoPreview() {

    const [storageValue, setStorageValue] = useState({});
    // use the updated icon/bg controller data from context
    const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

    // whenever storageData modfiies ,fetch the latest data from local storage
    useEffect(() => {
        const storageData = JSON.parse(localStorage.getItem('value') || '{}');
        console.log(storageData);
        setStorageValue(storageData);
    }, [updateStorage]);
    
    // method for applying background style 
    const getBackgroundStyle = () => {
        const color = storageValue?.bgColor;
        
        if (color?.includes('gradient')) {
          return {
            background: color,
            borderRadius: storageValue?.bgRounded
          };
        }
        
        return {
          backgroundColor: color || 'transparent',
          borderRadius: storageValue?.bgRounded
        };
      };
      
     // Fixed Icon rendering component
     const IconComponent = () => {
      const IconFromName = icons[storageValue?.icon];
      
      if (!IconFromName) {
          return null;
      }

      return (
          <div 
              className="flex justify-center items-center h-full w-full"
              style={{
                  transform: `rotate(${storageValue?.iconRotate || 0}deg)`
              }}
          >
              <IconFromName 
                  size={storageValue?.iconSize} 
                  color={storageValue?.iconColor}
              />
          </div>
      );
  };

  return (
      <div className='flex justify-center items-center h-screen'>
          <div className='h-[500px] w-[500px] bg-gray-200 outline-dotted outline-gray-300'
           style={{padding: storageValue?.bgPadding}} >
              <div className='h-full w-full '
                  style={getBackgroundStyle()}>
                  <IconComponent />
              </div>
          </div>
      </div>
  );
}

export default LogoPreview;