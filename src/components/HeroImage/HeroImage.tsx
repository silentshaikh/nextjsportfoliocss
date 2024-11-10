'use client';
import { imgList } from '@/utils/helper'
import Image from 'next/image'
import React from 'react'

function HeroImage() {
  return (
    <div className='img-corner'>
      <Image
      className='heroimg'
      src='/images/avatar.png'
      alt='heroimg'
      width={350}
      height={410}
      />
      <div className="img-icon">
        {imgList.map((e,i) => {
          return <Image
          key={i}
          src={`/images/${e}`}
          alt={'icon'}
          height={65}
          width={65}
          />
        })}
      </div>
    </div>
  )
}

export default HeroImage
