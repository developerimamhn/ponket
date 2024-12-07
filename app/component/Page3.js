import React from 'react';
import Image from 'next/image';
import image10 from '../image/Imagearea/Clip path group.png'; 
import image11 from '../image/Imagearea/Group 1171275312.png'; 
import image12 from '../image/Imagearea/Group 1171275651.png'; 
import image13 from '../image/Imagearea/Group 1171275662.png'; 
import image14 from '../image/Imagearea/Group 1171275663.png'; 
import image15 from '../image/Imagearea/Group.png'; 
import image16 from '../image/Imagearea/Vector.png'; 
import image17 from '../image/Imagearea/Vector1.png'; 

const Page3 = () => {
    return (
        <div>
            <div className='container mx-auto py-[50px] md:py-[70px] lg:py-[100px] xl:py-[140px] 2xl:py-[180px] pb-[50px] sm:pb-[10px] xl:pb-[20px] sm:px-[0] px-[24px]'>
            <h1 className='mb-[8px] ponket-heaading text-[40px] md:text-[50px] lg:text-[60px] xl:text-[80px] 2xl:text-[99px] !leading-[104px] !shadow-[#8F8A78] flex justify-center items-center '>HOW TO BUY</h1>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-[30px] sm:gap-[10px] md:gap-[20px] xl:gap-[30px] mt-[25px] md:mt-[40px] xl:mt-[60px]'>
                <div className="buy-card p-[54px]">
                    <h2 className='createpageheader text-[20px] sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[38px] 2xl:text-[42px]'>
                    Create a Wallet
                    </h2>
                    <p className='createpagepragraph text-[13px] sm:text-[15px] md:text-[17px] lg:text-[19px] xl:text-[21px] 2xl:text-[23px] mt-[16px] sm:leading-auto leading-[25px]'>Get Metamask free on mobile <br/> from app stores. For desktop, <br/> download the Chrome extension at metamask.io. </p>
                </div>
                <div className="buy-card p-[54px]">
                    <h2 className='createpageheader text-[20px] sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[38px] 2xl:text-[42px]'>
                    Get Some ETH
                    </h2>
                    <p className='createpagepragraph text-[13px] sm:text-[15px] md:text-[17px] lg:text-[19px] xl:text-[21px] 2xl:text-[23px] mt-[16px] sm:leading-auto leading-[25px]'>Ensure ETH in your wallet for <br/> $PONKEI swap. Purchase on <br/> Metamask, or buy on an exchange and send.</p>
                </div><div className="buy-card p-[54px]">
                    <h2 className='createpageheader text-[20px] sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[38px] 2xl:text-[42px]'>
                    ETH to $Ponkei
                    </h2>
                    <p className='createpagepragraph text-[13px] sm:text-[15px] md:text-[17px] lg:text-[19px] xl:text-[21px] 2xl:text-[23px] mt-[16px] sm:leading-auto leading-[25px]'>Swap ETH for $PONKEI hassle-<br/>free. No taxes, adjust slippage <br/> during high volatility. Enjoy seamless transactions.</p>
                </div>
            </div>
            </div>
            <div className='container mx-auto sm:px-[0] px-[24px] pb-[50px] md:pb-[70px] lg:pb-[100px] xl:pb-[140px] 2xl:pb-[180px]'>
            <h1 className='mb-[30px] lg:mb-[40px] xl:mb-[50px] 2xl:mb-[60px] ponket-heaading text-[40px] md:text-[50px] lg:text-[60px] xl:text-[80px] 2xl:text-[99px] !leading-[104px] !shadow-[#8F8A78] flex justify-center items-center '>AVAILABLE ON</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[20px] sm:gap-[22px] md:gap-[24px] lg:gap-[26px] xl:gap-[28px] 2xl:gap-[30px]">
                    <button className='logoiamgestyling flex justify-center items-center h-[169px] w-[100%]'><Image className='w-[110px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] 2xl:w-[218px]' src={image10} alt=''/></button>
                    <button className='logoiamgestyling flex justify-center items-center h-[169px] w-[100%]'><Image className='w-[110px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] 2xl:w-[218px]' src={image11} alt=''/></button>
                    <button className='logoiamgestyling flex justify-center items-center h-[169px] w-[100%]'><Image className='w-[110px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] 2xl:w-[218px]' src={image12} alt=''/></button>
                    <button className='logoiamgestyling flex justify-center items-center h-[169px] w-[100%]'><Image className='w-[110px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] 2xl:w-[218px]' src={image13} alt=''/></button>

                    <button className='logoiamgestyling flex justify-center items-center h-[169px] w-[100%]'><Image className='w-[110px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] 2xl:w-[218px]' src={image14} alt=''/></button>
                    <button className='logoiamgestyling flex justify-center items-center h-[169px] w-[100%]'><Image className='w-[110px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] 2xl:w-[218px]' src={image15} alt=''/></button>
                    <button className='logoiamgestyling flex justify-center items-center h-[169px] w-[100%]'><Image className='w-[110px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] 2xl:w-[218px]' src={image16} alt=''/></button>
                    <button className='logoiamgestyling flex justify-center items-center h-[169px] w-[100%]'><Image className='w-[110px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] 2xl:w-[218px]' src={image17} alt=''/></button>
                </div>
            </div>
        </div>
    );
};

export default Page3;