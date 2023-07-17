import Image from "next/image"


const About = () => {
  return (
    <>
    <div className="my-[56px]">
        <h3 className="text-[#333] text-[32px] font-bold leading-normal text-center">Browse The Range</h3>
        <p className='text-[#666] text-center text-xl font-normal leading-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <div className="w-full">
          <div className="w-full h-[521px] overflow-hidden relative rounded-md">
           <Image src="/1.png" alt="1 image" fill className="w-full h-full object-cover" />
          </div>
          <span className="mt-5 text-[#333] text-center text-2xl font-semibold leading-normal block">Dining</span>
          </div>
          <div className="w-full">
          <div className="w-full h-[521px] overflow-hidden relative rounded-md">
           <Image src="/2.png" alt="1 image" fill className="w-full h-full object-cover" />
           
           </div>
           <span className="mt-5 text-[#333] text-center text-2xl font-semibold leading-normal block">Living</span>
          </div>
          <div className="w-full">
          <div className="w-full h-[521px] overflow-hidden relative rounded-md">
           <Image src="/3.png" alt="1 image" fill className="w-full h-full object-cover" />
           </div>
           <span className="mt-5 text-[#333] text-center text-2xl font-semibold leading-normal block">Bedroom</span>
          </div>
        </div>
        </>
  )
}

export default About