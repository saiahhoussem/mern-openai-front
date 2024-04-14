import React from 'react'
import Boss from '../assets/boss.jpeg'

const Profile = () => {
  return (
    <div className='flex items-center gap-3 p-4 hover:cursor-pointer'>
      <img src={Boss} alt='boss' width={35} className='rounded-[1.5rem]' />
      <p>Administrator</p>
    </div>
  )
}

export default Profile
