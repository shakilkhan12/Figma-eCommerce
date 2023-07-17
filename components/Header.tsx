'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { CiMenuBurger } from "react-icons/ci"

const Header = () => {
    const [state, setState] = useState('-right-full')
    const [toggleValue, setToggleValue] = useState(false);
    const toggle = () => {
      if(toggleValue) {
        setState('-right-full');
        setToggleValue(false);
      } else {
        setState('right-0')
        setToggleValue(true)
      }
    }
  return (
    <div className="bg-white h-[100px] w-full flex justify-center relative">
        <div className="max-w-screen-xl px-3 lg:px-0 w-full flex items-center justify-between space-x-3">
            <Link href='/' className="w-[140px] lg:w-[185px] h-[30px] lg:h-[41px] relative hover:text-black focus:text-black">
                <Image src='/logo.png' className="w-full h-full object-cover" fill alt="logo" />
            </Link>
            <ul className="text-black hidden lg:flex items-center gap-[75px] ">
              <li>
                <Link href='/' className="text-base capitalize hover:text-black focus:text-black font-medium font-serif">home</Link>
              </li>
              <li>
                <Link href='/' className="text-base capitalize hover:text-black focus:text-black font-medium font-serif">shop</Link>
              </li>
              <li>
                <Link href='/' className="text-base capitalize hover:text-black focus:text-black font-medium font-serif">about</Link>
              </li>
              <li>
                <Link href='/' className="text-base capitalize hover:text-black focus:text-black font-medium font-serif">contact</Link>
              </li>
            </ul>
            <div className="hidden lg:flex items-center gap-[45px]">
                <span className="relative w-[28px] h-[28px]">
                    <Image src='/account_alert.svg' className="w-full h-full object-cover" fill alt="account" />
                </span>
                <span className="relative w-[28px] h-[28px]">
                    <Image src='/search.svg' className="w-full h-full object-cover" fill alt="account" />
                </span>
                <span className="relative w-[28px] h-[28px]">
                    <Image src='/heart.svg' className="w-full h-full object-cover" fill alt="account" />
                </span>
                <span className="relative w-[28px] h-[28px]">
                    <Image src='/shopping.svg' className="w-full h-full object-cover" fill alt="account" />
                </span>
            </div>
            <CiMenuBurger className="block lg:hidden text-[28px] cursor-pointer" onClick={toggle}  />
        </div>
        <div className={`absolute ${state} transition-all duration-300 top-full w-full bg-white h-auto text-white z-10 px-3 pb-4`}>
        <div className="flex items-center justify-between gap-[50px]">
                <span className="relative w-[28px] h-[28px]">
                    <Image src='/account_alert.svg' className="w-full h-full object-cover" fill alt="account" />
                </span>
                <span className="relative w-[28px] h-[28px]">
                    <Image src='/search.svg' className="w-full h-full object-cover" fill alt="account" />
                </span>
                <span className="relative w-[28px] h-[28px]">
                    <Image src='/heart.svg' className="w-full h-full object-cover" fill alt="account" />
                </span>
                <span className="relative w-[28px] h-[28px]">
                    <Image src='/shopping.svg' className="w-full h-full object-cover" fill alt="account" />
                </span>
            </div>
            <ul className="text-black flex flex-col mt-10">
              <li className="w-full block">
                <Link href='/' className="hover:bg-gray-100 py-5 hover:pl-5 transition-all duration-300 block text-base capitalize hover:text-black focus:text-black font-medium font-serif">home</Link>
              </li>
              <li className="w-full block">
                <Link href='/' className="hover:bg-gray-100 block py-5 hover:pl-5 transition-all duration-300 text-base capitalize hover:text-black focus:text-black font-medium font-serif">shop</Link>
              </li>
              <li className="w-full block">
                <Link href='/' className="hover:bg-gray-100 block py-5 hover:pl-5 transition-all duration-300 text-base capitalize hover:text-black focus:text-black font-medium font-serif">about</Link>
              </li>
              <li className="w-full block">
                <Link href='/' className="hover:bg-gray-100 block py-5 hover:pl-5 transition-all duration-300text-base capitalize hover:text-black focus:text-black font-medium font-serif">contact</Link>
              </li>
            </ul>
        </div>
    </div>
  )
}

export default Header