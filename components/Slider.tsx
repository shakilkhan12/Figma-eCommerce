import Image from "next/image"
import SliderSection from "./SliderSection"

const Slider = () => {
  return (
    <div className="bg-[#FCF8F3] ">
        <div className="max-w-[1440px] mx-auto w-full py-[44px]">
         <div className="flex items-center">
            <div className="w-full md:w-4/12">
                <h1 className="text-[#3A3A3A] text-[20px] font-bold leading-[120%]">50+ Beautiful rooms inspiration</h1>
                <p className="text-[#616161] text-base font-medium leading-[150%] w-[368px]">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                <div className="mt-[25px]">
                    <button className="capitalize bg-[#B88E2F] py-3 px-[36px] text-white text-base font-semibold leading-[150%]">explore more</button>
                </div>
            </div>
            <div className="w-full md:w-[404px] h-[582px] relative ml-[42px]">
                <Image src="/slider.png" alt="slider image" fill className="w-full h-full object-cover" />
                <div className="absolute left-[24px] bottom-[24px] bg-white/60 min-w-[217px] max-w-[217px] w-full pt-[32px] pl-[32px] pb-[32px] pr-[17px]">
                    <div className="flex items-center gap-2">
                        <span className="text-[#616161] text-base font-medium leading-[24px]">01</span>
                        <span className="bg-[#616161] w-[27px] h-[2px]"></span>
                        <span className="text-[#616161] text-base font-medium leading-[24px] capitalize">bed room</span>
                    </div>
                    <span className="block mt-2 text-[#3A3A3A] text-[28px] font-semibold leading-[120%]">Inner Peace</span>
                    <span className="absolute flex items-center justify-center -right-[48px] bottom-0 w-[48px] h-[48px] bg-[#B88E2F]">
                        <div className="relative w-[24px] h-6">
                            <Image src='/right.svg' alt="right icon" fill className="w-full h-full object-cover" />
                        </div>
                    </span>
                </div>
                <div className="absolute -right-full w-full h-full">
            <SliderSection />
         
            </div>
            </div>
            
         </div>
        </div>
    </div>
  )
}

export default Slider