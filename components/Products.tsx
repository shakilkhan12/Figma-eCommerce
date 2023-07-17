'use client'
import { useState } from "react"
import Product from "./Product"

const Products = () => {
    const [products, setProducts] = useState([
        {id: 1, image: '/image 1.png', title: 'Syltherine', subHeading: 'Stylish cafe chair', price: '123.00', discount: '34.00'},
        {id: 2, image: '/image 2.png', title: 'Lolito', subHeading: 'Luxury big sofa', price: '7.000.000', discount: '34.00'},
        {id: 3, image: '/image 3.png', title: 'Respira', subHeading: 'Outdoor bar table and stool', price: '500.000', discount: '34.00'},
        {id: 4, image: '/image 4.png', title: 'Leviosa', subHeading: 'Outdoor bar table and stool', price: '500.000', discount: '34.00'},
        {id: 5, image: '/image 7.png', title: 'Grifo', subHeading: 'Night lamp', price: '500.000', discount: '34.00'},
        {id: 6, image: '/image 8.png', title: 'Muggo', subHeading: 'Small mug', price: '500.000', discount: '34.00'},
        {id: 7, image: '/image 9.png', title: 'Pingky', subHeading: 'Cute bed set', price: '500.000', discount: '34.00'},
        {id: 8, image: '/image 6.png', title: 'Potty', subHeading: 'Minimalist flower pot', price: '500.000', discount: '34.00'},
    ])
  return (
    <div className="mb-[69px]">
        <h2 className="text-[#3A3A3A]  text-center text-[40px] font-bold leading-[120%] mb-[32px] mt-[56px]">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[32px]">
            {products.map(product => (
                <Product product={product} key={product.id} />
            ))}
        </div>
        <div className="mt-[32px] flex justify-center">
            <button className="capitalize w-[245px] h-[48px] bg-white border-[#B88E2F] border text-[#B88E2F] text-base font-semibold leading-[24px]">show more</button>
        </div>
    </div>
  )
}

export default Products