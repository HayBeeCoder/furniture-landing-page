import React from "react";
import { ReactComponent as Cash } from "../../assets/icons/perkbanner/cash-outline.svg";

interface Props {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  desc: string;
  title: string;
}

const Perk: React.FC<Props> = ({ desc, title, Icon }) => {
  return (
    <div>
      {/* <span className='/w-6 h-6 rounded-md bg-violet-500 block'></span> */}
      <p className="flex justify-center md:justify-start">
        <Icon className="h-6 w-6 text-inherit" />
      </p>
      <p className="text-customGreen mt-3 mb-[2px] text-base font-bold">
        {title}
      </p>
      <p className="text-sm">{desc}</p>
    </div>
  );
};

export default Perk;
