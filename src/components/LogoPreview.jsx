import { UpdateStorageContext } from '@/context/UpdateStorageContext';
import html2canvas from 'html2canvas';
import { icons } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react'


// const BASE_URL = 'https://logoexpress.tubeguruji.com';
function LogoPreview({ downloadLogo }) { // download logo request from parent component

    const [storageValue, setStorageValue] = useState({});
    // use the updated icon/bg controller data from context
    const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

    // whenever storageData modfiies ,fetch the latest data from local storage
    useEffect(() => {
        const storageData = JSON.parse(localStorage.getItem('value') || '{}');
        console.log(storageData);
        setStorageValue(storageData);
    }, [updateStorage]);

    // to let work the download button on gettng download request
    useEffect(() => {
        if (downloadLogo) {
            downloadLogoHandler();
        }
    }, [downloadLogo]);

    //method to convert html to png and download logo
    const downloadLogoHandler = () => {
        const downloadLink = document.getElementById('downloadLogoDiv');
        html2canvas(downloadLink, { backgroundColor: null, useCORS: true,  // Add this to handle cross-origin images
            allowTaint: true  }).then((canvas) => {
            const img = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.download = 'raw_logofy.png';
            link.href = img;
            link.click();
        })
    };


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


    // Icon/Image rendering component
    const IconComponent = () => {
        const IconFromName = icons[storageValue?.icon];

        if (!IconFromName && !storageValue?.icon?.includes('.png')) {
            return null;
        }

        return (
            <div
                className="flex justify-center items-center h-full w-full"
                style={{
                    transform: `rotate(${storageValue?.iconRotate || 0}deg)`
                }}
            >
                {storageValue?.icon?.includes('.png') ?
                    ( <img
                        src={`/png/${storageValue?.icon}`} // Proxy path here
                        alt="Icon"
                        style={{ width: storageValue?.iconSize, height: storageValue?.iconSize }}
                        crossOrigin="anonymous"
                        referrerPolicy="no-referrer"
                    />)
                    : (<IconFromName size={storageValue?.iconSize}
                        color={storageValue?.iconColor} />)
                }

            </div>
        );
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div id='downloadLogoDiv' className=' h-[500px] w-[500px] bg-transparent outline-dotted outline-gray-300'
                style={{ padding: storageValue?.bgPadding }} >

                <div className='h-full w-full '
                    style={getBackgroundStyle()}>
                    <IconComponent />
                </div>

            </div>
        </div>
    );
}

export default LogoPreview;