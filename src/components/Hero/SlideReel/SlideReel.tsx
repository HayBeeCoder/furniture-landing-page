import React from 'react';
import Slide from "../Slide"

type Props = {
    slideArray: string[]

}

const SlideReel:React.FC<Props> = ({slideArray}) => {
    return (
        <>
            {
                slideArray.map((image,index) => <Slide imageSource={image} key={index}/>)
            }
        </>
    );
};

export default SlideReel;