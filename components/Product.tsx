import Image from "next/image";

type PropType = {
    product: {
        id: number;
        image: string;
        price: string;
        discount: string;
        title: string;
        subHeading: string;
    }
}
const Product = ({product}: PropType) => {
  return (
    <div className="w-full bg-[#F4F5F7] relative group/items">
        <div className="w-full relative overflow-hidden h-[301px]">
            <Image src={product.image} alt="product image" fill className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
            <h2 className="text-[#3A3A3A] text-2xl font-semibold leading-[120%]">{product.title}</h2>
            <h4 className="text-[#898989] text-base font-medium leading-[24px]">{product.subHeading}</h4>
            <div className="flex items-center justify-between space-x-[9px] mt-[8px]">
                <span className="text-[#3A3A3A] text-xl font-semibold leading-[30px]">${product.price}</span>
                <span className="text-[#B0B0B0] text-base font-normal leading-[24px] line-through">${product.discount}</span>
            </div>
        </div>
        <span className="absolute w-[48px] h-[48px] top-[24px] right-[24px] rounded-full bg-[#E97171] text-white text-sm font-medium leading-[24px] flex items-center justify-center">-30%</span>
        <div className="absolute top-0 right-0 scale-0  w-full h-full bg-black/70 p-4 text-white group-hover/items:scale-100 transition-all duration-300 origin-top-right">
            <div className="flex items-center justify-center h-full">
                <button className="w-[202px] py-[12px] bg-white px-6 text-[#B88E2F] text-base font-semibold leading-[24px]">Add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default Product