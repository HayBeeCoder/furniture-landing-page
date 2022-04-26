import React from 'react';
interface Props {
    title: string;
    desc: string;
    index: string
}

const AboutItem:React.FC<Props> = ({title,desc,index}) => {
    return (
        <div className='mb-4'>

            <h3 className='text-3xl text-customGreen font-bold'>
                {index}
            </h3>
            <p className='text-customGreen mt-2 mb-1 font-bold'>{title}</p>
            <p className='text-xs text-[#64717C]'>
                {desc}
            </p>
        </div>
    );
};

export default AboutItem;