import React from 'react'

const Product = () => {
  return (
    <div className='bg-[#244D4D]  bg-opacity-10 py-4 px-6 '>
        <p className='mb-[20px]'> Hand Base Lamp</p>
        <div className='flex items-center gap-3'> 
        <p className='inline'> <pre className='inline-block'>$</pre>52.31</p>
        <p className='inline-block line-through text-[13px] text-[#A9A7A6]'> 
        <pre className='inline'> $</pre>66.07
        </p>

        </div>
    </div>
  )
}

export default Product