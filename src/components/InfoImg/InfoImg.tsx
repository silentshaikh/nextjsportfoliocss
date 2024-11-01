import Image from 'next/image'
import React from 'react'

function InfoImg() {
  return (
    <div className='info-img'>
      <Image
      className='about-img'
      src='/images/avatar.png'
      alt='profile-img'
      height={300}
      width={300}
      />
    </div>
  )
}

export default InfoImg
