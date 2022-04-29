import React from 'react';
import { useState } from 'react';
import Hamburger from './Hamburger';

interface Props{
    //need to change type of children to appropriate type
 children ?: any;
}

const HamburgerContainer:React.FC<Props> = ({children}) => {
    // const [open , setOpen] = useState<boolean>(false)
    return children
};

export default HamburgerContainer;