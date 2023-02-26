import type { NextPage } from "next";
import { TextField } from "@mui/material";

const NFTContainer: NextPage = () => {
  return (
    <div className="relative w-[279.76px] h-[185px] shrink-0 text-center text-base text-primary-black100 font-p-xsmall1">
      <div className="absolute w-[calc(100%_+_0.24px)] top-[0px] right-[-0.24px] left-[0px] rounded-lg [background:linear-gradient(rgba(255,_255,_255,_0.7),_rgba(255,_255,_255,_0.7)),_#2ec62e] h-[151px]" />
      <b className="absolute top-[159px] left-[calc(50%_-_66.88px)] leading-[150%]">
        NFT Management
      </b>
      <img
        className="absolute top-[35px] left-[calc(50%_-_35.88px)] w-[70px] h-[86px]"
        alt=""
        src="../group-118.svg"
      />
      <div className="absolute top-[161px] left-[247px] flex flex-col items-center justify-start gap-[8px] opacity-[0] text-left text-xs text-primary-white1001">
        <img
          className="relative w-5 h-5 shrink-0 overflow-hidden z-[0]"
          alt=""
        />
        <div className="my-0 mx-[!important] absolute top-[-32px] left-[calc(50%_-_157px)] rounded-md bg-primary-black100 shadow-[0px_2px_4px_rgba(30,_41,_59,_0.25)] flex flex-row py-1 px-3 items-center justify-start gap-[10px] opacity-[0] z-[1]">
          <div className="relative leading-[20px] font-medium">
            Store and organize your NFT collections.
          </div>
          <TextField
            className="relative"
            color="primary"
            variant="standard"
            multiline
            label="Learn more"
            placeholder="Textarea placeholder"
            margin="none"
          />
        </div>
      </div>
    </div>
  );
};

export default NFTContainer;
