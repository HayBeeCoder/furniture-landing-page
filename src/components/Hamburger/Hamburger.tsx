import React from "react";

type Props = {
  handleClick: () => void;
  isOpen: boolean;
  // open: boolean
};

const Hamburger: React.FC<Props> = ({ isOpen, handleClick }) => {
    
    const rotate = (direction: "down" | "up" , isOpen: boolean) => {
        let turn;
        if(direction == "down"){
             turn = !isOpen ? "rotate-45" : "rotate-0"
        }else{
            turn = !isOpen ? "-rotate-45" : "rotate-0"
        }
        // return (direction == "down" ?   " translate-x-full transition-transform" : "translate-x-0")
        return turn
    }

    // const hamburgerClickEffect  = () => 'scale-110'

  return (
    <div
      className="relative z-50 h-8 w-10   p-2 md:hidden "
      onClick={handleClick}
    >
      <div className={"bg-customGreen h-1 w-6 rounded-lg transition-transform ease-in "+ rotate("down" , isOpen) }> </div>

      {/* {!isOpen && ( */}
        <div className={"relative bottom-0 bg-customGreen my-[2px] h-1 w-6 rounded-lg transform transition-all ease-in " + (!isOpen ?   "translate-x-full opacity-0" : "translate-x-0 opacity-100") } > </div>
      {/* )} */}
      <div className={"bg-customGreen h-1 w-6 rounded-lg mt-auto transform transition-transform ease-in " + rotate("up" , isOpen)}> </div>
    
    </div>
  );
};

export default Hamburger;
