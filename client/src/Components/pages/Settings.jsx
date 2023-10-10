import React, { useState } from 'react';

export const Settings = () => {
  const [showSettings, setShowSettings] = useState(false);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <div className='pt-4'>
      <div
        className={`mx-auto w-[350px] border-2 p-2 cursor-pointer ${showSettings ? 'border-[#00B2FF]' : ''
          }`}
        onClick={() => toggleSettings()}
      >
        <img className='rounded-full mx-auto' src="images/user.png" alt="Image Alt Tech" />
        <p className="mt-4 text-center font-bold">Krishanu kaundilya</p>

        <div className='flex pt-3'>
          <div>
            <h1 className='text-[#656565]'>you don't have any plan</h1>
          </div>
          <div>
            <h1 className='text-[#656565]'>__ Days Left</h1>
          </div>
        </div>

        {showSettings && (
          <div className='pt-3'>
            <h1 className='pt-1 text-[#656565]'>Settings</h1>
            <div className='pt-3'>
              <h1 className='text-[#656565] pt-3'>Logout</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
