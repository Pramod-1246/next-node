import React, { useState } from "react";
import Link from 'next/link';
import NavClasses from './Nav.module.css';

const NavBar = () => {

    const [ viewNav, setViewNav ] = useState(false)

    return (
        <>
            <nav className={NavClasses.navBar}>
                <Link href="/">
                    <span className={NavClasses.homeLink}>HOME</span>
                </Link>
                <button className={NavClasses.menuIcon} onClick={() => setViewNav(prev => !prev)}>
                    <svg
                        className='bi bi-list'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                        width='30'
                        height='30'
                    >
                        <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                </button>
                <div className={`${NavClasses.hiddenDiv} ${viewNav ? '' : NavClasses.hide}`}>
                    <div className={NavClasses.rightNav}>
                        <Link href='/'>
                            <a className={NavClasses.navLinks}>
                                Home
                            </a>
                        </Link>
                        <Link href='/'>
                            <a className={NavClasses.navLinks}>
                                Services
                            </a>
                        </Link>
                        <Link href='/'>
                            <a className={NavClasses.navLinks}>
                                About us
                            </a>
                        </Link>
                        <Link href='/'>
                            <a className={NavClasses.navLinks}>
                                Contact us
                            </a>
                        </Link>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default NavBar;