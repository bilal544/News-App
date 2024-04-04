import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={`bg-white flex lg:flex-row flex-col py-0 lg:px-20 px-6 z-30 ${hasShadow ? 'shadow' : ''} lg:justify-between lg:items-center fixed top-0 left-0 right-0`}>
      {/* logo */}
      <div className="logo flex justify-between items-center">
        <NavLink className='no-underline' to=''>
          <figure>
            <img src="https://logowik.com/content/uploads/images/ndtv9182.logowik.com.webp" alt="logo" className='h-[70px]' style={{ mixBlendMode: "multiply" }} />
          </figure>
        </NavLink>
        {
          open ? (<button type='button' className='font-openSans font-semibold lg:hidden border border-gray-300 px-3 rounded' onClick={() => setOpen(false)}>
            <i className="fa-solid fa-xmark text-2xl text-gray-800"></i>
          </button>) : (
            <button type='button' className='font-openSans font-semibold lg:hidden border border-gray-300 px-3 rounded' onClick={() => setOpen(true)}>
              <i className="fa-solid fa-bars text-2xl text-gray-800"></i>
            </button>
          )
        }
      </div>
      {/* navbody */}
      <ul className='list-none lg:inline-flex hidden space-x-4 lg:mx-auto'>
        <li>
          <NavLink exact={+true} to='' className='font-openSans font-semibold text-gray-900'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact={+true} to='sports' className='font-openSans font-semibold text-gray-900'>
            Sports
          </NavLink>
        </li>
        <li>
          <NavLink exact={+true} to='technology' className='font-openSans font-semibold text-gray-900'>
            Technology
          </NavLink>
        </li>
        <li>
          <NavLink exact={+true} to='entertainment' className='font-openSans font-semibold text-gray-900'>
            Entertainment
          </NavLink>
        </li>
        <li>
          <NavLink exact={+true} to='business' className='font-openSans font-semibold text-gray-900'>
            Business
          </NavLink>
        </li>
        <li>
          <NavLink exact={+true} to='health' className='font-openSans font-semibold text-gray-900'>
            Health
          </NavLink>
        </li>
      </ul>
      {/* github repo link */}
      <ul className='list-none lg:inline-flex hidden space-x-4 lg:mx-0 mx-4'>
        <li>
          <NavLink to='https://github.com/bilal544' target='_blank' referrerPolicy='no-referrer' className='font-openSans font-semibold flex items-center space-x-2 border-b-4 border-red-600 '>
            <div className="icon">
              <i className="fa-brands fa-github text-xl text-black"></i>
            </div>
            <span>
              Github
            </span>
          </NavLink>
        </li>
      </ul>
      {/* sm devices */}
      {open && (<>
        {/* navbody */}
        <ul className={`list-none lg:hidden block ml-3 leading-relaxed ${open ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}>
          <li>
            <NavLink to='' className='font-openSans font-semibold text-gray-900'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='sports' className='font-openSans font-semibold text-gray-900'>
              Sports
            </NavLink>
          </li>
          <li>
            <NavLink to='technology' className='font-openSans font-semibold text-gray-900'>
              Technology
            </NavLink>
          </li>
          <li>
            <NavLink to='entertainment' className='font-openSans font-semibold text-gray-900'>
              Entertainment
            </NavLink>
          </li>
          <li>
            <NavLink to='business' className='font-openSans font-semibold text-gray-900'>
              Business
            </NavLink>
          </li>
          <li>
            <NavLink to='health' className='font-openSans font-semibold text-gray-900'>
              Health
            </NavLink>
          </li>
        </ul>
        {/* github repo link */}
        <ul className={`list-none lg:hidden block my-3 ml-3 ${open ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}>
          <li>
            <NavLink to='https://github.com/bilal544' target='_blank' referrerPolicy='no-referrer' className='font-openSans font-semibold flex items-center space-x-2'>
              <div className="icon">
                <i className="fa-brands fa-github text-xl text-black"></i>
              </div>
              <span>
                Github
              </span>
            </NavLink>
          </li>
        </ul>
      </>)}
    </nav>
  )
}

export default Navbar