import React, { useState } from 'react'
import Header from './components/Header'
import SideNav from './components/SideNav'
import IconController from './components/IconController'
import BackgroundController from './components/BackgroundController'
import LogoPreview from './components/LogoPreview'
import { UpdateStorageContext } from './context/UpdateStorageContext'

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [updateStorage, setUpdateStorage] = useState({});  // for setting context data
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
          <div className="col-span-2 overflow-y-auto border-r shadow-sm p-5">
            {selectedIndex === 0 ? <IconController /> : <BackgroundController />}
          </div>

          {/* Icon Preview section */}
          <div className="col-span-3 overflow-y-auto">
            <LogoPreview downloadLogo={downloadLogo} />
          </div>

          {/* Ads Banner section */}
          <div className="col-span-1 overflow-y-auto bg-blue-600">
            ads Banner
          </div>
        </div>
      </div>
    </div>
    </UpdateStorageContext.Provider>
  )
}

export default App