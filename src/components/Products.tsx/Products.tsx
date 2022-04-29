import React from 'react'
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
  return (
    
    <section className='px-8 lg:px-24 py-[40px] '>
        <h3 className='font-nuto text-customGreen text-[35px] font-bold leading-tight'>Products</h3>
        <div className='flex justify-center gap-[4px]'>

        {CATEGORIES.map(category => (<ProductCategory>{category}</ProductCategory >))}
        </div>
        <div className='flex'>

        {PRODUCTS.map(product => (
          <Product/>
          ))}
          </div>

    </section>
  )
}

export default Products