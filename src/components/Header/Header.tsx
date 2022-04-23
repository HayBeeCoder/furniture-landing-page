import React from 'react';
import { useState } from 'react';
import Hamburger from '../Hamburger';
import HamburgerContainer from '../Hamburger/HamburgerContainer';

const Header = () => {
    //has to be here
    const [open , setOpen] = useState<boolean>(false)
    
    const handleClick = ()  => setOpen(!open)

    //needs refactoring , try creating a single function that will perform both navslide & overlay functions
    const NavSlide = (isOpen: boolean) =>  isOpen ? " translate-x-0 delay-150" : " translate-x-full delay-150 "
    const OverlaySlide = (isOpen: boolean) =>  isOpen ? " translate-x-0 " : " translate-x-full  delay-150"
    



    const NavItem = (item: string) => <a href='' className='active:text-customGreen px-4 py-2 md:text-xs cursor-pointer border-solid hover:border-b-[1px] hover:border-gray-300 active:border-customGreen  text-xl'> {item}</a>


    return (
        <header className='font-montserrat px-4 md:px-8 lg:px-12 py-5 flex justify-between items-end'>
            <a href="#">

            <figure >
                <span className='text-customGreen font-nuto font-bold text-xl'>

                furnIture
                </span>
            </figure>
            </a>


            <nav className={'fixed z-50  flex flex-col h-screen md:h-max md:w-max top-0 w-4/5 items-center justify-center  right-0 md:relative transform transition-transform ease-in bg-white md:transform-none  md:gap-2 md:justify-between md:flex-row text-left rounded-tl-md rounded-bl-md' + NavSlide(open)}>
                    {["Home" , "About" ,"Features" , "Contact"].map(item => NavItem(item) )}
        </nav>
            <HamburgerContainer > 
                {<Hamburger isOpen={open} handleClick={handleClick}/>}
                    </HamburgerContainer>
            {/* <Hamburger/> */}
            
             <div className={'fixed bg-black bg-opacity-30 transform transition-transform ease-in  top-0 left-0 z-10 h-screen w-screen md:hidden  ' + OverlaySlide(open)}></div>
        </header>
    );
};

export default Header;