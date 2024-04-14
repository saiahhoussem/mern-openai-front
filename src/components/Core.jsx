import React, { useState, useEffect, useRef } from 'react';
import SearchInput from './Core/SearchInput';
import Boss from '../assets/boss.jpeg';
import Samar from '../assets/samar.jpg';

function Core({chatOwner}) {
  const [userMessages, setUserMessages] = useState([]);
  const [assistantMessages, setAssistantMessages] = useState([]);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    fetchChats();
  }, [,chatOwner]); // Empty dependency array ensures useEffect runs only once on mount

  const fetchChats = async () => {
    try {
      const response = await fetch(`http://localhost:7000/api/chat/samar/getChatByUser?user=${chatOwner}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
  
      // Extract and parse chat messages, starting from index 2 to skip the first message
      const chatMessages = data[0].chat_content.slice(2).map(message => {
        const [role, content] = message.split(': ');
        return { role, content };
      });
  
      const userMsgs = chatMessages.filter(msg => msg.role === 'user').map(msg => msg.content);
      const assistantMsgs = chatMessages.filter(msg => msg.role === 'assistant').map(msg => msg.content);
  
      setUserMessages(userMsgs);
      setAssistantMessages(assistantMsgs);
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    } catch (error) {
      console.error('Error fetching previous chats:', error);
    }
  };

  const handleSearch = async (searchQuery) => {
    if (!searchQuery.trim()) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:7000/api/chat/samar?chatOwner=${chatOwner}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            {
              role: 'user',
              content: searchQuery,
            },
          ],
        }),
      });

      if (response.ok) {
        // Fetch updated chat messages from server
        await fetchChats();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const mergedMessages = userMessages.map((message, index) => ({
    role: 'user',
    content: message,
    index,
  })).concat(
    assistantMessages.map((message, index) => ({
      role: 'assistant',
      content: message,
      index,
    }))
  ).sort((a, b) => a.index - b.index);

  return (
    <div className='flex flex-col h-screen max-w-[800px]'>
      <div className='flex-1 mt-[2rem] overflow-y-auto no-scrollbar' ref={chatContainerRef}>
        {mergedMessages.map((message, index) => (
          <div key={index} className='flex items-center'>
            <img src={message.role === 'user' ? Boss : Samar} alt={message.role === 'user' ? 'boss' : 'samar'} width={40} className='rounded-[1.5rem]' />
            <div className='pt-4 ml-4'>
              <p className='font-bold mb-1'>{message.role === 'user' ? `${chatOwner}` : 'Samar'}</p>
              <p className='mb-3'>{message.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='sticky bottom-0'>
        <SearchInput onSearch={handleSearch} />
      </div>
    </div>
  );
}

export default Core;
