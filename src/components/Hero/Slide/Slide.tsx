import React from 'react';

type Props = {
    imageSource: string
}

const Slide:React.FC<Props> = ({imageSource}) => {
    return (
        <>
            <img src={imageSource} alt="interior design" className='w-full h-full object-fill' />
        </>
    );
};

export default Slide;