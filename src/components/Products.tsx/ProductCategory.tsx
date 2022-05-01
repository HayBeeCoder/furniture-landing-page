import React from 'react'

interface Props {
    children: string,
    active: boolean,
    index: number;
    handleClick: (index: number) => void
}

const ProductCategory:React.FC<Props> = ({children, active,handleClick,index}) => {
    const className = active ? " text-[#3D3D3F] font-bold " : " text-[#A9A7A6]"

  return (
      <button className={"bg-none text-sm " + className} onClick={e => handleClick(index)}>
          {children}
      </button>
  )
}

export default ProductCategory