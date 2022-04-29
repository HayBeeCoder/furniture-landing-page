import React from "react";
import { ReactComponent as Fire } from "../../assets/icons/Fire.svg";
import Perk from "./Perk";
import { PERKS } from "./Perk.constant";



const PerkBanner = () => {
  return (
    <section className="px-8 py-12 lg:px-24 flex flex-col  lg:flex-row lg:items-end gap-10 lg:gap-5 text-center md:text-left">
      <div className="lg:w-[30%]">
        <h2 className="font-nuto text-customGreen text-[35px] font-bold leading-tight">
          <pre className="font-nuto text-inherit">
            <span>Hot</span>
            <span className="text-md -mb-2 inline-block">
              <Fire />
            </span>
          </pre>
          <pre className="font-nuto">deals for you</pre>
        </h2>
        <p className="text-sm leading-5">Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className="flex flex-col gap-10 md:flex-row  lg:gap-4 ">
        
        {
            PERKS.map(perk =>  <Perk title={perk.title} desc={perk.paragraph} Icon={perk.icon} />)
        }
      </div>
    </section>
  );
};

export default PerkBanner;
