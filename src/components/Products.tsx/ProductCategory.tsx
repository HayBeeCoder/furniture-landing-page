import React from 'react'

interface Props {
    children: string
}

const ProductCategory:React.FC<Props> = ({children}) => {
  return (
      <button className="bg-none text-sm">
          {children}
      </button>
  )
}

export default ProductCategory