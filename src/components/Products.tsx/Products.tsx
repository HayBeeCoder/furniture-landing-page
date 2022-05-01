import React, { useState } from 'react'
import ProductCategory from './ProductCategory'
import Product from '../Product.tsx/Product'

const CATEGORIES = [
    'all' , 'bed' , 'sofa' , 'chair' , 'lamp'
]

const PRODUCTS = [
  {
    product: "Head Lamp Light",
    price: "124",
    discount: "45%"
  },
  {
    product: "Head Lamp Light",
    price: "124",
    discount: "45%"
  },
  {
    product: "Head Lamp Light",
    price: "124",
    discount: "45%"
  },
  {
    product: "Head Lamp Light",
    price: "124",
    discount: "45%"
  },
  {
    product: "Head Lamp Light",
    price: "124",
    discount: "45%"
  },
  {
    product: "Head Lamp Light",
    price: "124",
    discount: "45%"
  },

]

 const Products = () => {
   const [activeCategory,setActiveCategory] = useState<number>(0)
 const handleCategoryClick =(selected: number) => setActiveCategory(selected)



  return (
    
    <section className='px-8 lg:px-24 py-[40px] '>
        <h3 className='font-nuto text-customGreen text-[35px] font-bold leading-tight'>Products</h3>
        <div className='flex justify-center gap-[64px] mt-[40px] mb-[120px]'>

        {CATEGORIES.map((category,index) => (<ProductCategory active={index === activeCategory} handleClick={handleCategoryClick} index={index}>{category}</ProductCategory >))}
        </div>
        <div className='flex w-full justify-between flex-wrap gap-1 lg:gap-3 '>

        {PRODUCTS.map(product => (
          <Product/>
          ))}
          </div>

    </section>
  )
}

export default Products