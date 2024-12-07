"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import iamge4 from '../image/image 4.png';



const Page1 = () => {
    const [text, setText] = useState("COPY");

    const handleChangeText = () => {
        setText("Copied!");

        // Set a timeout to revert the text back to "COPY" after 10 seconds
        setTimeout(() => {
            setText("COPY");
        }, 2000);
    };
    return (
        <div>
            <div className='container mx-auto relative px-[24px] sm:px-0'>
                <Image className='absolute top-0 right-0 w-1/3 z-[-1] opacity-[7%]' src={iamge4} alt=''/>
                <div className='mt-[30px] md:mt-[40px] lg:mt-[50px] xl:mt-[80px] 2xl:mt-[100px] flex justify-center items-center gap-[30px] md:gap-[40px] lg:gap-[60px] xl:gap-[80px] 2xl:gap-[100px] flex-col sm:flex-row'>
                    <div className='flex-1'>
                        <Image src={iamge4} alt=''/>
                    </div>
                    <div className='flex-1'>
                        <h1 className='mb-[8px] ponket-heaading text-[50px] sm:text-[60px] md:text-[70px] lg:text-[100px] xl:text-[130px] 2xl:text-[160px]'>$PONKEI</h1>
                        <p className='ponket-pragraph text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]'>
                            I’m a degenerate gambler from China with anger issues.<br/> I  don’t get along with people besides my friends.
                        </p>
                        <label htmlFor='copy' className='TOKEN-ADDRESS block mt-[23px] lg:mt-[32px] mb-[14px]'>TOKEN ADDRESS:</label>
                        <div className='flex justify-start items-center sm:flex-row flex-col gap-[14px] md:gap-[16px] lg:gap-[18px] xl:gap-[20px] 2xl:gap-[24px]'>
                            
                            <div id='copy' className='flex justify-between items-center w-full sm:w-[66%]  py-[8px] sm:py-[12px] pr-[12px] pl-[16px] rounded-[8px] text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[22px] relative z-50'><input type="text" className='w-full bg-transparent border-none placeholder:text-[#060000] relative z-50' placeholder='56sDqbD*********Px1pump' /><button title={text} className='copy-styling-items py-[8px] sm:py-[10px] xl:py-[12px] 2xl:py-[14px] px-[14px] sm:px-[16px] xl:px-[22px] 2xl:px-[24px] rounded-[6px] ml-[32px] duration-300  text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[22px] xl:leading-[22px] 2xl:leading-[28.6px] relative z-50' onClick={handleChangeText}>{text}</button></div> 
                            <button className="p-[14px] md:p-[16px] lg:p-[21px] xl:p-[20px] 2xl:p-[27px] rounded-[8px] text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[22px] buttongroup w-full sm:w-fit">bUY $PONKEI</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page1;