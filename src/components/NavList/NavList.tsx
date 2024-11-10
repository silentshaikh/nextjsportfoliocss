'use client';
import usePortfolioHook from "@/hooks/portfolioHook"
import { navList } from "@/utils/helper"
import Link from "next/link"
function NavList() {
  const {nav} = usePortfolioHook();
  return (
    <ul className={`li-list ${nav ? 'show': 'hide'}`}>
      {navList.map((e) => {
        return <li key={e.id}> <Link href={e.link}>{e.value}</Link> </li>
      })}
    </ul>
  )
}

export default NavList
