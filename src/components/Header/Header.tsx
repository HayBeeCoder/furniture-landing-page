import React from 'react';

const Header = () => {



    const NavItem = (item: string) => <a href='' className='active:text-customGreen px-4 py-2 text-xs cursor-pointer border-solid hover:border-b-[1px] hover:border-gray-300 active:border-customGreen'> {item}</a>


    return (
        <header className='font-montserrat px-24 py-3 flex justify-between'>
            <a href="#">

            <figure >
                <span className='text-customGreen font-nuto font-bold text-xl'>

                furnIture
                </span>
            </figure>
            </a>


            <nav className='flex gap-2 justify-between '>
                    {["Home" , "About" ,"Features" , "Contact"].map(item => NavItem(item) )}
            </nav>
            
        </header>
    );
};

export default Header;