import React from 'react'
import bell from '../assets/bell.svg'
import profilepic from '../assets/profile.jpg'

function DashboardHeader() {
  return (
    <>
   <header className='bglight'>
  <div className='mx-auto flex max-w-md items-center justify-between p-4 m-4 '>
    <div className='flex max-w-min items-center justify-between  '>
      <div className="w-12 h-12 bg-cover rounded-full overflow-hidden">
        <img
          src={profilepic}
          className="object-cover w-full h-full"
          alt="Profile"
        />
      </div>
      <h2 className="whitespace-nowrap m-4">Hi, Nneka</h2>
    </div>
    <div>
      <img src={bell} />
    </div>
  </div>
</header>

    </>
  )
}

export default DashboardHeader

