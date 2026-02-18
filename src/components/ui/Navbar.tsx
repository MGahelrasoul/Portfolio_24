'use client'

import { useState } from 'react'
import Link from 'next/link'
import { styles } from '@/styles'
import { navLinks } from '@/constants'
import Image from 'next/image'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`header-body ${styles.paddingX} border-b-2 border-tertiary w-full flex items-center fixed top-0 z-20 bg-secondary`}>
      <div
        className={`w-full flex justify-between max-w-7xl mx-auto max-h-[76px] ${
          toggle ? 'items-start max-h-[264px]' : 'items-center'
        } transition-[max-height] ease-in-out duration-300`}
      >
        <Link href="#home" className="text-white hover:text-highlight py-5 flex items-center gap-2">
          <div className="relative w-9 h-9 content-center">
            <Image src={'/assets/logo.svg'} alt="logo" width={36} height={36} priority className="object-contain" />
          </div>
          <p className="text-[1.125rem] font-bold cursor-pointer flex flex-wrap">
            Gahelrasoul&nbsp;
            <span className="">| FrontEnd</span>
          </p>
        </Link>

        <ul className="list-none hidden lg:flex flex-row gap-2">
          {navLinks.map((link) => (
            <li key={link.id} className={`text-txt nav-hover relative hover:text-highlight py-5 text-[1.125rem] font-medium cursor-pointer`}>
              <a className="px-4 py-1 rounded-lg" href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className={`${toggle ? 'py-5' : ''} lg:hidden lg:flex-row lg:items-center flex-col items-end flex`}>
          <div className={`relative w-[2rem] h-[2rem] flex`}>
            <Image
              src={toggle ? 'assets/close.svg' : 'assets/menu.svg'}
              alt="menu"
              width={48}
              height={48}
              loading="lazy"
              className={`m-auto object-contain cursor-pointer`}
              onClick={() => setToggle(!toggle)}
            />
          </div>

          <div className={`${toggle ? 'flex' : 'hidden'} p-6 z-10 rounded-xl`}>
            <ul className={`list-none flex items-center flex-col gap-4`}>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`text-txt font-poppins font-medium cursor-pointer text-[1rem]`}
                  onClick={() => {
                    setToggle(!toggle)
                  }}
                >
                  <a className="px-4 py-1 hover:text-highlight hover:bg-nav-border rounded-lg" href={`#${link.id}`}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
