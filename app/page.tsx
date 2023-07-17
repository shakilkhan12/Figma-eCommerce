import About from '@/components/About'
import Banner from '@/components/Banner'
import Header from '@/components/Header'
import Products from '@/components/Products'
import Slider from '@/components/Slider'
export default function Home() {
  return (
    <>
    <Header />
    <Banner />
      <div className='max-w-[1440px] mx-auto w-full px-3 lg:px-0'>
        <About />
        <Products />
      </div>
      <Slider />
    </>
  )
}
