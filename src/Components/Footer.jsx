import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='bg-black py-6'>
            <p className='text-gray-100 text-center font-openSans font-semibold'>
                <i className="fa-solid fa-code"></i>  Bilal<span className='text-red-600 font-semibold'>Dev</span>. © {new Date().getFullYear()}, made with 💖. All rights reserved.
            </p> <br />
            <ul className="list-none flex justify-center items-center gap-3">
                <li>
                    <Link target='_blank' className='border border-gray-300 py-2 px-3 rounded-full hover:border-red-600 transition-all'>
                        <i className="fa-brands fa-facebook-f text-white text-xl my-auto"></i>
                    </Link>
                </li>
                <li>
                    <Link to='https://www.instagram.com/m.bilal543/' target='_blank' className='border border-gray-300 px-3 py-2 rounded-full hover:border-red-600 transition-all'>
                        <i className="fa-brands fa-instagram text-white text-xl my-auto"></i>
                    </Link>
                </li>
                <li>
                    <Link to='https://www.linkedin.com/in/bilal-mughal744/' target='_blank' className='border border-gray-300 px-3 py-2 rounded-full hover:border-red-600 transition-all'>
                        <i className="fa-brands fa-linkedin-in text-white text-xl my-auto"></i>
                    </Link>
                </li>
            </ul>
        </footer>
    )
}

export default Footer