import Image from "next/image"

const Banner = () => {
  return (
    <div className="w-full h-[716px] relative">
     <Image src='/header.png' fill alt="banner" className="w-full h-full object-cover" />
     <div className="w-11/12 sm:w-9/12 md:w-8/12 lg:w-[643px] h-[443px] absolute right-[58px] top-[153px] bg-[#FFF3E3] pl-[41px] pr-[43px] pt-[62px] pb-[40px]">
      <h4 className="text-[#333] text-base font-semibold leading-normal tracking-[3px]">New Arrival</h4>
      <h1 className="w-full lg:max-w-[559px] text-[#B88E2F] text-[40px] md:text-[52px] font-bold leading-[50px] md:leading-[65px] font-sans mt-1">Discover Our New Collection</h1>
      <p className="w-full lg:w-[546px] text-[#333] text-base font-medium leading-[24px] font-sans mt-[17px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
      <div className="mt-[46px]">
        <button className="bg-[#B88E2F] uppercase px-[72px] py-[25px] text-base font-bold text-white">buy now</button>
      </div>
     </div>
    </div>
  )
}

export default Banner