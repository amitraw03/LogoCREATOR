import React, { useState } from 'react'
import Header from './components/Header'
import SideNav from './components/SideNav'
import IconController from './components/IconController'
import BackgroundController from './components/BackgroundController'
import LogoPreview from './components/LogoPreview'
import { UpdateStorageContext } from './context/UpdateStorageContext'
import AdsBanner from './components/AdsBanner'

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [updateStorage, setUpdateStorage] = useState({});
  const [downloadLogo, setDownloadLogo] = useState();

  return (
    <UpdateStorageContext.Provider value={{updateStorage,setUpdateStorage}}>
      <div className="flex flex-col h-screen">
        <Header DownloadLogo={setDownloadLogo} />
        <div className="flex-1 flex overflow-hidden">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <SideNav selectedIndex={(value) => setSelectedIndex(value)} />
          </div>

          {/* Main content area */}
          <div className="flex-1 grid grid-cols-6 overflow-hidden">
            {/* Controller section */}
            <div className="col-span-2 border-r shadow-sm p-5 overflow-y-auto ">
              {selectedIndex === 0 ? <IconController /> : <BackgroundController />}
            </div>

            {/* Icon Preview section */}
            <div className="col-span-3 overflow-y-auto scrollbar-hide">
              <LogoPreview downloadLogo={downloadLogo} />
            </div>

            {/* Ads Banner section */}
            <div className="col-span-1 overflow-y-auto scrollbar-hide bg-gray-300">
              <AdsBanner />
            </div>
          </div>
        </div>

        <style jsx global>{`
          .scrollbar-hide {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;     /* Firefox */
          }
          
          .scrollbar-hide::-webkit-scrollbar {
            display: none;             /* Chrome, Safari and Opera */
          }
        `}</style>
      </div>
    </UpdateStorageContext.Provider>
  )
}

export default App