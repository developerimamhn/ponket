import React from 'react';
import Image from 'next/image'
import image6 from '../image/image9.png';

const Page4 = () => {
    return (
        <div className='bg-[#FFF5D9]' id='Tokenomics'>
            <div className='container mx-auto px-[24px] sm:px-0'>
            <div className='py-[50px] md:py-[70px] lg:py-[100px] xl:py-[140px] 2xl:py-[180px] flex justify-center items-center gap-[30px] md:gap-[40px] lg:gap-[60px] xl:gap-[80px] 2xl:gap-[100px] flex-col sm:flex-row'>
                    <div className='flex-1'>
                        <h1 className='mb-[8px] ponket-heaading text-[40px] md:text-[50px] lg:text-[60px] xl:text-[80px] 2xl:text-[99px] !leading-[104px] !shadow-[#8F8A78]'>TOKENOMICS</h1>
                        <p className='ponket-pragraph text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]'>
                        I’ve minted a billion tokens, but my greed knows no bounds—I want to keep every last one for myself. Sharing isn’t in my nature, and these tokens are <br/><br/>
                        staying right where they belong. It’s all about maximizing my gains, no matter the cost.
                        </p>
                        <div className='flex items-center mt-[27px] md:mt-[37px] xl:mt-[48px] gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px]'>
                            <div className='flex justify-center items-center flex-col lastgroup px-[16px] sm:px-[20px] md:px-[24px] lg:px-[28px] xl:px-[32px] 2xl:px-[36px] py-[14px] sm:py-[16px] md:py-[18px] lg:py-[20px] xl:py-[22px] 2xl:py-[24px]'>
                                <h3 className='totalsupply text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] xl:text-[38px] 2xl:text-[42px] border-b-[1px] border-dotted border-b-[#060000] pb-[14px] mb-[14px]'>TOTAL SUPPLY</h3>
                                <p className='totalsupply-number text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]'>1000,000,000 $ PONKEI</p>
                            </div>
                            <div className='flex justify-start items-center flex-col gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px]  sm:w-[200px] lg:w-[215px]'> 
                                <button className="p-[14px] md:p-[16px] lg:p-[18px] xl:p-[20px] 2xl:p-[24px] rounded-[8px] text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[22px] buttongroup flex justify-center items-center gap-[7px] md:gap-[9px] lg:gap-[12px] w-full ">bUY $ PONKEI</button>
                                <button className="p-[14px] md:p-[16px] lg:p-[18px] xl:p-[20px] 2xl:p-[24px] rounded-[8px] text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[22px] buttongroup flex justify-center items-center gap-[7px] md:gap-[9px] lg:gap-[12px] !bg-[#FFF6B8] !text-[#060000] w-full">JOIN TELEGRAM</button>
                            </div>
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

export default Page4;