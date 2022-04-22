import React from 'react';
import Slide from "../Slide"

type Props = {
    slideArray: string[]

}

const SlideReel:React.FC<Props> = ({slideArray}) => {
    return (
        <>
            {
                slideArray.map(image => <Slide imageSource={image}/>)
            }
        </>
    );
};

export default SlideReel;