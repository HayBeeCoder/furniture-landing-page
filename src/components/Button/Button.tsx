import React from 'react'

interface Props {
    textColor: string;
    bgColor: string;
    children: string;
}

const Button: React.FC<Props> = ({textColor, bgColor,children}) => {
  return (
    <button className='text-base lg:text-[19px] py-2 px-4 lg:py-4 lg:px-8 rounded-full hover:opacity-95' 
        style={{color: `${textColor}` ,  backgroundColor: `${bgColor}`}}
    >

   {children}
</button>
  )
}

export default Button