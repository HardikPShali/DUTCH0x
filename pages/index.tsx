import type { NextPage } from "next";
import Head from "next/head";
import { Button, FormControlLabel, Radio } from "@mui/material";
import OverviewContainer from "../components/overview-container";
import EventsContainer from "../components/events-container";
import FruitSaladGameContainer from "../components/fruit-salad-game-container";
import NFTContainer from "../components/n-f-t-container";
import HolderFinder from "../components/holder-finder";

const CDHome: NextPage = () => {
  return (
    <div className="relative bg-whitesmoke-100 w-full h-[1000px] overflow-hidden text-left text-xl text-gray-100 font-p-xsmall1">
      <div className="absolute top-[5863px] left-[calc(50%_-_562px)] rounded-[20px] bg-gainsboro w-[427px] h-[54px] hidden flex-row py-0 pr-0 pl-6 box-border items-center justify-between text-right text-lg text-whitesmoke-200 font-inter">
        <div className="relative tracking-[-0.04em] leading-[150%] font-light inline-block w-[239px] shrink-0 [text-shadow:0px_20px_40px_rgba(0,_0,_0,_0.1)] opacity-[0.5]">
          Enter email to keep in touch
        </div>
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </div>
      <div className="absolute top-[317px] left-[1140px] w-[348px] flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch relative leading-[150%]">Overview</div>
        <OverviewContainer />
      </div>
      <div className="absolute top-[317px] left-[24px] w-[1092px] flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch relative leading-[150%]">Events</div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <EventsContainer />
          <FruitSaladGameContainer />
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] bg-primary-white1001 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.06)] flex flex-col p-6 items-start justify-start gap-[24px] text-base text-primary-black60 border-b-[1px] border-solid border-primary-black101">
        <div className="w-[1464px] flex flex-row items-center justify-start">
          <div className="flex flex-row py-0 pr-8 pl-0 items-center justify-start gap-[32px]">
            <img
              className="relative w-[145.31px] h-9 shrink-0"
              alt=""
              src="../dutch0x-logo.svg"
            />
            <div className="flex flex-col items-center justify-start relative text-primary-black100">
              <b className="relative leading-[150%] z-[0]">Dashboard</b>
              <FormControlLabel
                className="absolute my-0 mx-[!important] top-[24px] left-[calc(50%_-_2.45px)] z-[1]"
                label=""
                control={<Radio color="primary" checked />}
              />
            </div>
            <div className="relative leading-[150%]">Create</div>
            <div className="relative w-[87px] h-6 shrink-0">
              <div className="absolute top-[-0.5px] left-[0.45px] w-[86.45px] h-[35px]">
                <div className="absolute top-[0px] left-[0.45px] leading-[150%]">
                  Marketplace
                </div>
                <div className="absolute top-[17px] left-[0px] text-xs leading-[150%] font-medium text-primary-orange">
                  Coming soon
                </div>
              </div>
            </div>
            <div className="relative leading-[150%]">Learn</div>
          </div>
          <div className="flex-1 flex flex-row items-center justify-start gap-[32px]">
            <div className="flex-1 rounded-lg flex flex-row py-1.5 pr-1.5 pl-4 items-center justify-start gap-[10px] border-[1px] border-solid border-primary-black20">
              <img
                className="relative w-5 h-5 shrink-0 overflow-hidden"
                alt=""
                src="../materialsymbolssearchrounded.svg"
              />
              <div className="flex-1 relative leading-[150%]">Find Holders</div>
              <div className="self-stretch rounded-sm bg-primary-black20 w-6 shrink-0 flex flex-col py-0 px-2 box-border items-center justify-center text-right">
                <div className="relative leading-[150%]">/</div>
              </div>
            </div>
            <Button variant="contained" color="primary">
              Status
            </Button>
            <img
              className="relative w-6 h-6 shrink-0 overflow-hidden"
              alt=""
              src="../frame6.svg"
            />
            <img
              className="relative w-6 h-6 shrink-0 overflow-hidden"
              alt=""
              src="../frame7.svg"
            />
            <img
              className="relative w-6 h-6 shrink-0 overflow-hidden"
              alt=""
              src="../frame8.svg"
            />
            <div className="relative box-border w-px h-[27px] shrink-0 hidden opacity-[0.2] border-r-[1px] border-solid border-primary-black100" />
            <img
              className="relative w-6 h-6 shrink-0 overflow-hidden hidden"
              alt=""
              src="../frame9.svg"
            />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[16px] text-primary-black100">
          <NFTContainer />
          <HolderFinder />
          <div className="relative w-[279.76px] h-[183px] shrink-0">
            <b className="absolute top-[159px] left-[110.51px] leading-[150%] inline-block w-[58.33px]">
              Airdrop
            </b>
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-darkturquoise w-[279.76px] h-[151px]" />
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-primary-white801 w-[279.76px] h-[151px]" />
            <div className="absolute top-[calc(50%_-_49.6px)] left-[calc(50%_+_0.41px)] rounded bg-darkturquoise w-[47.09px] h-[47.09px] [transform:_rotate(44.4deg)] [transform-origin:0_0]" />
          </div>
          <div className="relative w-[279.76px] h-[183px] shrink-0">
            <b className="absolute top-[159px] left-[107.36px] leading-[150%] inline-block w-[64.42px]">
              Trade-in
            </b>
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-mediumorchid w-[279.76px] h-[151px]" />
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-primary-white801 w-[279.76px] h-[151px]" />
            <img
              className="absolute top-[calc(50%_-_49.34px)] left-[calc(50%_-_37.13px)] w-[74.69px] h-[66.3px]"
              alt=""
              src="../group-100.svg"
            />
          </div>
          <div className="relative w-[279.76px] h-[183px] shrink-0">
            <b className="absolute top-[159px] left-[119.81px] leading-[150%] inline-block w-[39.94px]">
              Sales
            </b>
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-hotpink w-[279.76px] h-[151px]" />
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-primary-white801 w-[279.76px] h-[151px]" />
            <img
              className="absolute top-[45.93px] left-[111.78px] rounded w-[61.44px] h-[61px]"
              alt=""
              src="../polygon-1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CDHome;
