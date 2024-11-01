'use client'
import usePortfolioHook from '@/hooks/portfolioHook'
import { RxHamburgerMenu } from 'react-icons/rx'

function HeaderIcon() {
    const {toggleNavList} = usePortfolioHook();
  return (
    <div className='hamburger' onClick={toggleNavList}>
      <RxHamburgerMenu  className='icon'/>
    </div>
  )
}

export default HeaderIcon
