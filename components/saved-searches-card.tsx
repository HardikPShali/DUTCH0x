import type { NextPage } from "next";
import { TextField } from "@mui/material";

type SavedSearchesCardType = {
  savedSearchesText?: string;
  accountText?: string;
  arrowIconUrl?: string;
  christmasTreeText?: string;
};

const SavedSearchesCard: NextPage<SavedSearchesCardType> = ({
  savedSearchesText,
  accountText,
  arrowIconUrl,
  christmasTreeText,
}) => {
  return (
    <div className="self-stretch rounded-lg bg-primary-white1001 shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_rgba(0,_0,_0,_0.06)] flex flex-col items-start justify-start text-left text-lg text-primary-black100 font-p-xsmall1 border-[1px] border-solid border-primary-black101">
      <div className="self-stretch flex flex-row py-3 pr-4 pl-6 items-center justify-start">
        <div className="flex-1 relative leading-[150%] font-medium">
          {savedSearchesText}
        </div>
      </div>
      <div className="self-stretch flex flex-row py-3 pr-4 pl-6 items-center justify-start gap-[16px] text-base text-primary-black60">
        <div className="flex-1 relative leading-[150%]">{accountText}</div>
        <div className="flex flex-row items-start justify-start text-primary-black100">
          <div className="relative leading-[150%] hidden">187</div>
        </div>
        <img
          className="relative w-4 h-4 shrink-0 overflow-hidden"
          alt=""
          src={arrowIconUrl}
        />
      </div>
      <TextField
        className="[border:none] bg-[transparent] self-stretch"
        color="primary"
        variant="outlined"
        label="Christmas tree"
        placeholder={christmasTreeText}
      />
    </div>
  );
};

export default SavedSearchesCard;
