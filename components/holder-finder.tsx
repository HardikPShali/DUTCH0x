import type { NextPage } from "next";

const HolderFinder: NextPage = () => {
  return (
    <div className="relative w-[279.76px] h-[183px] shrink-0 text-left text-base text-primary-black100 font-p-xsmall1">
      <b className="absolute top-[159px] left-[91px] leading-[150%] inline-block w-[97.14px]">
        Find Holders
      </b>
      <div className="absolute top-[0px] left-[0px] rounded-lg bg-gold w-[279.76px] h-[151px]" />
      <div className="absolute top-[0px] left-[0px] rounded-lg bg-primary-white801 w-[279.76px] h-[151px]" />
      <div className="absolute top-[calc(50%_-_37.14px)] left-[calc(50%_-_34.09px)] w-[68.04px] h-[40.98px]">
        <div className="absolute top-[calc(50%_-_20.49px)] left-[calc(50%_-_34.02px)] rounded-base bg-gold w-[42px] h-[40.98px]" />
        <div className="absolute top-[calc(50%_-_20.49px)] left-[calc(50%_-_7.98px)] rounded-base bg-gold w-[42px] h-[40.98px]" />
      </div>
    </div>
  );
};

export default HolderFinder;
