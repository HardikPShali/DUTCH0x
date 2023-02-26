import type { NextPage } from "next";
import { Button, FormControlLabel, Checkbox } from "@mui/material";

const FruitSaladGameContainer: NextPage = () => {
  return (
    <div className="rounded-lg shadow-[0px_1px_2px_rgba(0,_0,_0,_0.06)] overflow-hidden flex flex-col items-center justify-start relative text-left text-sm text-primary-black100 font-p-xsmall1 border-[1px] border-solid border-primary-black101">
      <img
        className="absolute my-0 mx-[!important] top-[calc(50%_-_131px)] left-[226px] w-[640px] h-[640px] shrink-0 object-cover z-[0]"
        alt=""
        src="../qmuvthl1lhenqcqrdfua1svw5ekyajmssfkperkxy95g2x-11@2x.png"
      />
      <div className="rounded-lg bg-primary-white801 [backdrop-filter:blur(48px)] w-[1092px] flex flex-col p-6 box-border items-start justify-start z-[1]">
        <div className="self-stretch flex flex-row items-start justify-start gap-[32px]">
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="flex flex-col items-start justify-start gap-[12px]">
              <div className="flex flex-row items-start justify-start gap-[8px]">
                <Button variant="contained" color="primary">
                  Airdrop
                </Button>
                <div className="flex flex-row items-center justify-start">
                  <div className="self-stretch rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-primary-black101 [backdrop-filter:blur(16px)] flex flex-row py-1 px-2 items-center justify-start">
                    <img
                      className="relative w-4 h-4 shrink-0 overflow-hidden"
                      alt=""
                      src="../frame.svg"
                    />
                  </div>
                  <div className="rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-primary-black101 [backdrop-filter:blur(16px)] flex flex-row py-[3px] pr-2 pl-0 items-start justify-start">
                    <b className="relative leading-[150%]">It’s Raining</b>
                  </div>
                </div>
                <div className="rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg [backdrop-filter:blur(16px)] flex flex-row py-1 px-2 items-center justify-start gap-[8px] text-gray-200">
                  <img
                    className="relative w-4 h-4 shrink-0 overflow-hidden"
                    alt=""
                    src="../frame1.svg"
                  />
                  <b className="relative leading-[150%]">Started</b>
                  <div className="relative leading-[150%]">
                    2022-09-13 08:57:15
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-base">
                <div className="self-stretch relative leading-[150%]">
                  🍎🍌🍍The Fruit Salad Game🍆🥦🥕
                </div>
                <div className="flex flex-row items-end justify-start gap-[10px] text-2xl">
                  <b className="relative leading-[100%]">Water</b>
                  <div className="flex flex-col items-start justify-start text-sm">
                    <div className="flex flex-row items-center justify-start gap-[4px]">
                      <img
                        className="relative w-4 h-4 shrink-0 overflow-hidden hidden"
                        alt=""
                        src="../frame5.svg"
                      />
                      <div className="relative leading-[150%]">x 100</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden flex-row items-center justify-start gap-[8px]">
                <Button variant="outlined" color="primary">
                  Start
                </Button>
                <Button variant="outlined" color="primary">
                  Duration
                </Button>
                <div className="hidden flex-row items-start justify-start gap-[8px]">
                  <b className="relative leading-[150%]">End</b>
                  <div className="relative leading-[150%]">2022-09-13</div>
                  <div className="relative leading-[150%]">09:02:57</div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[16px]">
                <div className="relative leading-[150%]">
                  Wallet Transactions:
                </div>
                <div className="flex flex-row items-start justify-start gap-[4px]">
                  <b className="relative leading-[150%]">100</b>
                  <div className="relative leading-[150%]">Success</div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[4px]">
                  <b className="relative leading-[150%]">0</b>
                  <div className="relative leading-[150%]">Processing</div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[4px]">
                  <b className="relative leading-[150%]">0</b>
                  <div className="relative leading-[150%]">Failed</div>
                </div>
              </div>
              <div className="relative w-[709px] h-4 shrink-0">
                <div className="absolute top-[0px] left-[0px] rounded-lg bg-primary-black101 w-[709px] h-4" />
                <div className="absolute top-[0px] left-[0px] rounded-lg [background:linear-gradient(270deg,_rgba(0,_0,_0,_0.5),_rgba(255,_255,_255,_0.5)),_#ff4800] w-[709px] h-4" />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-base">
              <Button variant="contained" color="primary">
                More Details
              </Button>
              <div className="rounded-lg hidden flex-row py-2 px-4 items-center justify-start border-[1px] border-solid border-primary-black100">
                <div className="relative leading-[150%]">Cancel</div>
              </div>
              <div className="hidden flex-row py-0 pr-0 pl-2 items-center justify-start gap-[8px]">
                <div className="relative w-3.5 h-3.5 shrink-0">
                  <div className="absolute top-[0px] left-[0px] rounded-sm bg-primary-black100 w-3.5 h-3.5" />
                  <FormControlLabel
                    className="absolute top-[4px] left-[3px]"
                    label=""
                    control={<Checkbox color="primary" defaultChecked />}
                  />
                </div>
                <div className="relative leading-[150%]">
                  Receive report on email
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-col items-center justify-center">
            <img
              className="relative w-[261px] h-[210px] shrink-0 object-cover"
              alt=""
              src="../rectangle-1481@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FruitSaladGameContainer;
