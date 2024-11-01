import Image from 'next/image'
import React from 'react'

function Logo() {
  return (
    <div>
      <Image
      
      src='/images/logo.png'
      alt='logo'
      width={60}
      height={60}
      />
    </div>
  )
}

export default Logo
