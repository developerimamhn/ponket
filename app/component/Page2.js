import React from 'react';
import AutoSlider from './AutoSlider';
import Image from 'next/image'
import image6 from '../image/image6.png';
import image7 from '../image/image7.png';
import image8 from '../image/image8.png';

const Page2 = () => {
    return (
        <div className='bg-[#FFF5D9]' id='About'>
            <AutoSlider/>
            <div className='container mx-auto px-[24px] sm:px-0'>
            <div className='py-[50px] md:py-[70px] lg:py-[100px] xl:py-[140px] 2xl:py-[180px] flex justify-center items-center gap-[30px] md:gap-[40px] lg:gap-[60px] xl:gap-[80px] 2xl:gap-[100px] flex-col sm:flex-row'>
                    <div className='flex-1'>
                        <h1 className='mb-[8px] ponket-heaading text-[40px] md:text-[50px] lg:text-[60px] xl:text-[80px] 2xl:text-[99px] !leading-[104px] !shadow-[#8F8A78]'>ABOUT $PONKEI</h1>
                        <p className='ponket-pragraph text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]'>
                        $PONKEI blends modern finance with blockchain technology to deliver secure and efficient digital transactions. By leveraging the latest advancements, it offers innovative solutions that enhance financial security and streamline processes.<br/><br/>
                        With a focus on transparency and reliability, $PONKEI is redefining how digital finance operates. It’s the future of secure and seamless transactions.
                        </p>
                        <div className='flex justify-start items-center sm:flex-row flex-col gap-[14px] md:gap-[16px] lg:gap-[18px] xl:gap-[20px] 2xl:gap-[24px] mt-[27px] md:mt-[37px] xl:mt-[48px]'> 
                            <button className="p-[14px] md:p-[16px] lg:p-[18px] xl:p-[20px] 2xl:p-[24px] rounded-[8px] text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[22px] buttongroup flex justify-center items-center gap-[7px] md:gap-[9px] lg:gap-[12px] w-full sm:w-fit"><Image src={image7} alt=''/> DEXTOOL</button>
                            <button className="p-[14px] md:p-[16px] lg:p-[18px] xl:p-[20px] 2xl:p-[24px] rounded-[8px] text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[22px] buttongroup flex justify-center items-center gap-[7px] md:gap-[9px] lg:gap-[12px] !bg-[#FFF6B8] !text-[#060000] w-full sm:w-fit"><Image src={image8} alt=''/> DEXSCREENER</button>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <Image src={image6} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page2;