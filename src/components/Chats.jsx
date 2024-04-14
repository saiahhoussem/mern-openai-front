import React, { useState, useEffect } from 'react';
import ChatBox from './Chats/ChatBox';

const Chats = ({setChatOwner}) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await fetch('http://localhost:7000/api/chat/samar/getChats');
        const data = await response.json();
        setChats(data); // Update state with fetched chats
      } catch (error) {
        console.error('Error fetching chats:', error);
      }
    };

    fetchChats();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div>
      <div className='font-bold text-[12px]'>
        <p className='p-4'>All Chats</p>
        <div className='p-2'>
          {chats.map((chat, index) => (
            <ChatBox key={index} title={`Chat: ${chats[index].chat_owner}`} isSelected={chat.isSelected} setChatOwner={setChatOwner} chatOwner={chats[index].chat_owner} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chats;
