import React from 'react';
import image1 from '../image/image1.png';
import image2 from '../image/image2.png';
import image3 from '../image/image3.png';
import image10 from '../image/image10.png';
import image11 from '../image/image11.png';
import Image from 'next/image';
import Link from 'next/link';



const Page5 =()=>{
    return(
        <div className='py-[50px] md:py-[70px] lg:py-[100px] xl:py-[140px] 2xl:py-[180px] mt-[12px] lg:mt-[20px]'>
            <div className='container mx-auto containerLast p-[44px] md:p-[55px] lg:p-[65px] xl:p-[75px] 2xl:p-[85px] relative'>
                <h1 className='mb-[8px] ponket-heaading text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px] !leading-[104px] !shadow-[#8F8A78]'>JOIN THE COMMUNITY</h1>
                <p className='ponket-pragraph text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]'>
                Join our community to connect, share, and grow together in <br/> the world of digital finance.
                </p>
                <div className='flex items-center w-fit gap-[15px] md:gap-[16px] xl:gap-[18px] mt-[25px] lg:mt-[32px]'>
                <button className="p-[14px] md:p-[16px] lg:p-[18px] xl:p-[20px] 2xl:p-[24px] rounded-[8px] text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[22px] buttongroup flex justify-center items-center gap-[7px] md:gap-[9px] lg:gap-[12px] w-full ">bUY $ PONKEI</button>
                <ul className=' manu-sosul-area flex justify-center items-center gap-[15px] md:gap-[16px] xl:gap-[18px]'>
                    <li className='main-icon-li w-[44px] lg:w-[80px] h-[44px] lg:h-[80px] flex justify-center items-center'>
                        <Link className='iconbg' href="/"><Image src={image1} className='w-[25px] sm:w-[30px] lg:w-[40px]' alt="Loading..." /></Link>
                    </li>
                    <li className='main-icon-li w-[44px] lg:w-[80px] h-[44px] lg:h-[80px] flex justify-center items-center'>
                        <Link className='iconbg' href="/"><Image src={image2} className='w-[25px] sm:w-[30px] lg:w-[40px]' alt="Loading..." /></Link>
                    </li>
                    <li className='main-icon-li w-[44px] lg:w-[80px] h-[44px] lg:h-[80px] flex justify-center items-center'>
                        <Link className='iconbg' href="/"><Image src={image3} className='w-[25px] sm:w-[30px] lg:w-[40px]' alt="Loading..." /></Link>
                    </li>
                    <li className='main-icon-li w-[44px] lg:w-[80px] h-[44px] lg:h-[80px] flex justify-center items-center'>
                        <Link className='iconbg' href="/"><Image src={image10} className='w-[25px] sm:w-[30px] lg:w-[40px]' alt="Loading..." /></Link>
                    </li>
                </ul>
                </div>
                <Image className='md:absolute bottom-0 right-0' src={image11} alt='Loading...'/>
            </div>
        </div>
    )
}

export default Page5 ;