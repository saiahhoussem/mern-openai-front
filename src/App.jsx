import React, {useState} from 'react'
import Leftbar from "./components/Leftbar"
import Core from "./components/Core.jsx"

const App = () => {

  const [chatOwner, setChatOwner] = useState('Houssem');

  return (
    <div className='flex'>
        <div>
          <Leftbar setChatOwner={setChatOwner}/>
        </div>
        <div className='bg-[#212121] w-full text-gray-200 flex justify-center '>
          <Core chatOwner={chatOwner}/>
        </div>
    </div>
  )
}

export default App
