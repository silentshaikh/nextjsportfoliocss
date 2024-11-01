'use client';
import { ContextType } from '@/utils/type';
import React, { createContext, ReactNode, useState } from 'react'

export const ProtfolioContext = createContext<ContextType|null>(null);
function Context({children}:{children:ReactNode}) {
    const [nav,showNav] = useState(false);
    const toggleNavList = () => {
        showNav((prev) => !prev)
    }
  return (
    <>
      <ProtfolioContext.Provider value={{nav,toggleNavList}}>{children}</ProtfolioContext.Provider>
    </>
  )
}

export default Context
