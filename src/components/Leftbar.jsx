import React from 'react'
import NewChatComponent from "./Leftbar/NewChatComponent"
import Chats from './Chats'
import Profile from './Profile'

const Leftbar = ({setChatOwner}) => {
  return (
    <div className='bg-[#171717] text-gray-200 flex flex-col h-screen shadow-md'> 
      <div className='flex-1'>
        <NewChatComponent/>
        <Chats setChatOwner={setChatOwner}/>
      </div>
      <div className='sticky bottom-0'>
        <Profile/>
      </div>
    </div>
  )
}

export default Leftbar
