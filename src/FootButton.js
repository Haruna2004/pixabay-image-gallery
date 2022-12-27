import React from 'react'

const FootButton = ({ isFooter,setIsFooter}) => {
  return (
    <div className='min-w-full flex justify-center p-10'>
    <button 
    className='bg-teal-500 opacity-80 h-[30px] rounded px-3 text-white'
    onClick={() => setIsFooter(!isFooter)}>Show Info Site
    </button>
    </div>
  )
}

export default FootButton