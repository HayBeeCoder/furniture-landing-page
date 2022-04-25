import React from "react";
import { ReactComponent as Fire } from "../../assets/icons/Fire.svg";
import Perk from "./Perk";

const PerkBanner = () => {
  return (
    <section>
      <article>
        <h2 className="font-nuto text-[50px] text-customGreen">
          <pre className="text-inherit font-nuto">
            <span>Hot</span>
            <span className="text-md inline-block ">
              <Fire />
            </span>
          </pre>
          <pre className="font-nuto">deals for you</pre>
        </h2>
        <p>Online shopping for retail sales direct to consumers</p>
      </article>
      <Perk />
      <Perk />
      <Perk />
    </section>
  );
};

export default PerkBanner;
