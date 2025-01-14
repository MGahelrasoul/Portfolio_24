import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav
      className={`${styles.paddingX} border-b-2 border-nav-border w-full flex items-center fixed top-0 z-20 bg-nav`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="text-white hover:text-highlight py-5 flex items-center gap-2"
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-[1.125rem] font-bold cursor-pointer flex flex-wrap">
            Gahelrasoul&nbsp;
            <span className="">| Front End</span>
          </p>
        </Link>
        <ul className="list-none hidden lg:flex flex-row gap-2">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-highlight' : 'text-secondary'
              } nav-hover relative hover:text-white py-5 text-[1.125rem] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a className="px-4 py-1 rounded-lg" href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="lg:hidden lg:flex-row lg:items-center flex-col items-end flex flex-1 justify-end">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className={`${
              !toggle ? '' : 'mt-6'
            } w-[1.875rem] h-[1.875rem] object-contain cursor-pointer`}
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 pt-0 top-20 right-0 mx-4 my-2 z-10 rounded-xl`}
          >
            <ul className="list-none flex items-center flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-highlight' : 'text-secondary'
                  } font-poppins font-medium cursor-pointer text-[1rem]`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(link.title)
                  }}
                >
                  <a
                    className="px-4 py-1 hover:text-white hover:bg-btn-hover rounded-lg"
                    href={`#${link.id}`}
                  >
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
