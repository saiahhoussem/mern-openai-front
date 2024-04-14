import React from 'react'
import { RxPencil2 } from "react-icons/rx";
import Logo from '../../assets/logo.png'

const NewChatComponent= ( )=> {
  return (
    <div className='flex justify-between items-center text-[15px] p-4 pt-4 min-w-[250px] font-bold '>

      <div className='flex items-center gap-2'>
        <img src={Logo} alt="logo" width='25px'/>
        <p className='hover:cursor-pointer'>Samar-GPT</p>
      </div>
      
      <div className='text-[18px] hover:cursor-pointer'>
        <RxPencil2/>
      </div>
      
      
    </div>
  )
}

export default NewChatComponent
