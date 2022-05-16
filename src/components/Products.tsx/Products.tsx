import React, { useState } from 'react'
import ProductCategory from './ProductCategory'
import Product from '../Product.tsx/Product'
import Image from "../../assets/images/products/bar_chair.png"

const CATEGORIES = [
    'all' , 'bed' , 'sofa' , 'chair' , 'lamp'
]

const PRODUCTS = [
  {
    product: "Head Lamp Light",
    price: "124",
    discount: "45%",
    img: Image,
  },
  {
    product: "Head Lamp Light",
    price: "124",
    discount: "45%",
    img: Image,
  },
  {
    product: "Head Lamp Light",
    price: "124",
    discount: "45%",
    img: Image,
  },
  {
    product: "Head Lamp Light",
    price: "124",
    discount: "45%",
    img: Image,
  },
  {
    product: "Head Lamp Light",
    price: "124",
    discount: "45%",
    img: Image,

  },
  {
    product: "Head Lamp Light",
    price: "124",
    discount: "45%",
    img: Image,
  },

]

 const Products = () => {
   const [activeCategory,setActiveCategory] = useState<number>(0)
 const handleCategoryClick =(selected: number) => setActiveCategory(selected)



  return (
    
    <section className=' lg:px-24 pb-36 '>
      <div className=''>

        <h3 className='font-nuto text-customGreen text-[35px] font-bold leading-tight'>Products</h3>
        <div className='flex justify-center  gap-[32px] lg:gap-[64px] mb-6 mt-[40px] lg:mb-[120px]'>

        {CATEGORIES.map((category,index) => (<ProductCategory active={index === activeCategory} handleClick={handleCategoryClick} index={index} key={index}>{category}</ProductCategory >))}
        </div>
      </div>
        <div className='grid grid-cols-2 md:grid-cols-3 w-full justify-around flex-wrap gap-1 md:gap-2 lg:gap-5 '>

        {PRODUCTS.map((product,key) => (
          <Product productDet={product} key={key} />
          ))}
          </div>

    </section>
  )
}

export default Products