import React, { useRef } from 'react'

export default function Start({setUsername}) {
const inputRef = useRef();

const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value)
}
  return (
    <div className='w-[250px] h-[100px] flex flex-col items-center relative top-0 left-0 right-0 bottom-0 m-auto justify-around'>
        <input ref={inputRef} type="text" className="w-full h-[50px] mb-1 border-none rounded-[5px] text-center text-[18px] text-black focus:outline-none focus:border-[2px] border-white" placeholder='Enter your name' />
        <button onClick={handleClick} className="w-full h-[35px] border-none rounded-[5px] bg-blue-600 cursor-pointer font-medium text-[18px]">Start</button>
    </div>
  )
}
