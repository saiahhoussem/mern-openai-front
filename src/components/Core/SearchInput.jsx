import React, { useState } from 'react';
import { BsFillArrowUpSquareFill } from "react-icons/bs";

const SearchInput = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    onSearch(inputValue);
    setInputValue(''); // Clear input value after sending message
  };

  return (
    <div className='flex items-center justify-center p-4 min-w-[800px]'>
      <input
        type="text"
        placeholder="Message Samar-GPT..."
        className="rounded-[1.25rem] px-4 w-full bg-[#212121] border border-gray-600 max-w-[800px] py-3"
        value={inputValue}
        onChange={handleChange}
      />
      <p className='text-[25px] ml-[-2.5rem] hover:cursor-pointer' onClick={handleSearch}><BsFillArrowUpSquareFill/></p>
    </div>
  );
};

export default SearchInput;
