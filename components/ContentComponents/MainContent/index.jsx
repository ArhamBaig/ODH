import React from 'react'

const MainContent = ({children}) => {
  return (
    <div className='grid grid-cols-3 content'>
        <div className='col-span-3 lg:col-span-3'>
            {children}
        </div>
        {/* <div className='lg:col-span-1 bg-black hidden lg:block'>

        </div> */}
    </div>
  )
}

export default MainContent