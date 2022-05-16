import React from 'react'

interface Props {
  productDet: {
    product: string;
    discount: string;
    price: string;
    img: string
  }
}

const Product: React.FC<Props> = ({ productDet }) => {
  const { price, discount, product, img } = productDet
  const discountedPrice = (100 - parseFloat(discount)) / 100 * parseFloat(price,)

  return (
    <div className='bg-[#244D4D] bg-opacity-5 py-8 px-3 lg:px-12 mb-[100px] relative'>
      <p className='mb-2'>{product}</p>
      <div className='flex items-center gap-3'>
        <div className='inline'> <pre className='inline-block'>$</pre>{discountedPrice.toFixed(2)}</div>
        <div className='inline-block line-through text-[13px] text-[#A9A7A6]'>
          <pre className='inline'> $</pre>{parseFloat(price).toFixed(2)}
        </div>
      </div>
      <div className='w-[200px] -mb-[100px] mt-[40px] mx-auto relative left-1/2 transform -translate-x-1/2'>

        <img src={img} alt={product}  className='object-fit w-full'/>
      </div>

    </div>
  )
}

export default Product