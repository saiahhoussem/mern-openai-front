import React from 'react';
import { MdMoreHoriz } from "react-icons/md";
import { RiArchive2Fill } from "react-icons/ri";

const ChatBox = ({ title, isSelected, chatOwner, setChatOwner }) => {
  
  const handleClick = () => {
    setChatOwner(chatOwner);
    console.log('Clicked:', chatOwner);
  };

  return (
    <div 
      className={`flex items-center justify-between ${isSelected ? 'bg-[#212121]' : ''} rounded-[0.75rem] py-3 px-2 cursor-pointer`} 
      onClick={handleClick}
    >
      <div>
        {title}
      </div>
      {isSelected && (
        <div className='flex gap-2 text-[18px]'>
          <div className='cursor-pointer'>
            <MdMoreHoriz />
          </div>
          <div className='cursor-pointer'>
            <RiArchive2Fill />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
