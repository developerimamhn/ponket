"use client";


import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { LiaBarsSolid } from "react-icons/lia";
import { VscChromeClose } from "react-icons/vsc";
import logo from '../image/logo.png';
import image1 from '../image/image1.png';
import image2 from '../image/image2.png';
import image3 from '../image/image3.png';




const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null); 
    const menuButtonRef = useRef(null);

    const handleClickOutside = (event) => {
        // Close menu if clicked outside of menu and toggle button
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            (!menuButtonRef.current || !menuButtonRef.current.contains(event.target))
        ) {
            setToggle(false);
        }
    };

    useEffect(() => {
        // Add event listener for clicks outside the component
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div className='bg-[#FFBB02]'>
            <header className=' container mx-auto flex justify-between items-center py-[18px] sm:py-[20px] lg:py-[30px] 2xl:py-[40px] relative px-[24px] sm:px-[0]'>
                <div className='sm:hidden relative top-[-11px]'>    
                    <div 
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-100' : 'opacity-0 -translate-x-2'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <VscChromeClose className='text-white text-[26px] absolute' />
                    </div>
                    <div ref={menuButtonRef}
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-0 translate-x-2' : 'opacity-100'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <LiaBarsSolid className='text-white text-[26px] absolute' />
                    </div>
                </div>
                <h1 className='w-[150px] md:w-[190] xl:w-[249.72px]'><Image src={logo} alt=''/></h1>
                <nav ref={menuRef} className={`navbar-items-main absolute sm:top-0 top-[100%] sm:right-0 sm:relative duration-1000 z-50 sm:opacity-100 flex justify-center items-start sm:items-center flex-col sm:flex-row gap-[20px] md:gap-[25px] lg:gap-[30px] xl:gap-[35px] 2xl:gap-[40px]
                    ${toggle ? 'right-[10]' :'right-[130%]' }
                    ${toggle ? 'opacity-100' : 'opacity-10'} 
                    `} >
                    <Link className={`Link-manu-bar text-[14px] md:text-[16px] xl:text-[18px]`} href="/">About</Link>
                    <Link className='Link-manu-bar text-[14px] md:text-[16px] xl:text-[18px]' href="/">How to buy</Link>
                    <Link className='Link-manu-bar text-[14px] md:text-[16px] xl:text-[18px]' href="/">Tokenomics</Link>
                    <Link className='Link-manu-bar text-[14px] md:text-[16px] xl:text-[18px]' href="/">English</Link>
                </nav>

                
                <ul className=' manu-sosul-area flex justify-center items-center gap-[12px] md:gap-[14px] xl:gap-[16px]'>
                    <li className='main-icon-li w-[34px] lg:w-[48px] h-[34px] lg:h-[48px] flex justify-center items-center'>
                        <Link className='iconbg' href="/"><Image src={image1} className=' w-[10px] lg:w-[18px]' alt="Loading..." /></Link>
                    </li>
                    <li className='main-icon-li w-[34px] lg:w-[48px] h-[34px] lg:h-[48px] flex justify-center items-center'>
                        <Link className='iconbg' href="/"><Image src={image2} className=' w-[10px] lg:w-[18px]' alt="Loading..." /></Link>
                    </li>
                    <li className='main-icon-li w-[34px] lg:w-[48px] h-[34px] lg:h-[48px] flex justify-center items-center'>
                        <Link className='iconbg' href="/"><Image src={image3} className=' w-[10px] lg:w-[18px]' alt="Loading..." /></Link>
                    </li>
                </ul>
                
                
            </header>
        </div>
    );
};

export default Navbar;