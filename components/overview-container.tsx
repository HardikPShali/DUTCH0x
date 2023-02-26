import type { NextPage } from "next";
import { TextField } from "@mui/material";
import SavedSearchesCard from "../components/saved-searches-card";

const OverviewContainer: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-left text-lg text-primary-black100 font-p-xsmall1">
      <TextField
        className="[border:none] bg-[transparent] self-stretch"
        color="primary"
        variant="outlined"
        defaultValue="0.489 ETH"
        type="text"
        label="Wallet balance"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
      <form
        className="self-stretch rounded-lg bg-primary-white1001 shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_rgba(0,_0,_0,_0.06)] flex flex-col items-start justify-start border-[1px] border-solid border-primary-black101"
        id="nft"
      >
        <div className="self-stretch flex flex-row py-3 pr-4 pl-6 items-center justify-start">
          <div className="flex-1 relative text-lg leading-[150%] font-medium font-p-xsmall1 text-primary-black100 text-left">
            NFTs
          </div>
        </div>
        <SavedSearchesCard />
        <div className="self-stretch flex flex-row py-3 pr-4 pl-6 items-center justify-start gap-[16px]">
          <div className="flex-1 relative text-base leading-[150%] font-p-xsmall1 text-primary-black60 text-left">
            NFT items
          </div>
          <div className="flex flex-row items-start justify-start">
            <div className="relative text-base leading-[150%] font-p-xsmall1 text-primary-black100 text-left">
              187
            </div>
          </div>
          <img
            className="relative w-4 h-4 shrink-0 overflow-hidden"
            alt=""
            src="../materialsymbolsarrowforwardios.svg"
          />
        </div>
        <div className="self-stretch flex flex-row py-3 pr-4 pl-6 items-center justify-start gap-[16px]">
          <div className="flex-1 relative text-base leading-[150%] font-p-xsmall1 text-primary-black60 text-left">
            Collections
          </div>
          <div className="flex flex-row items-start justify-start">
            <div className="relative text-base leading-[150%] font-p-xsmall1 text-primary-black100 text-left">
              5
            </div>
          </div>
          <img
            className="relative w-4 h-4 shrink-0 overflow-hidden"
            alt=""
            src="../materialsymbolsarrowforwardios.svg"
          />
        </div>
        <TextField
          className="[border:none] bg-[transparent] self-stretch"
          color="primary"
          variant="outlined"
          defaultValue="39"
          type="text"
          label="Minted"
          placeholder="Placeholder"
          size="medium"
          margin="none"
        />
      </form>
      <SavedSearchesCard
        savedSearchesText="Saved Searches"
        accountText="Green apple"
        arrowIconUrl="../materialsymbolsarrowforwardios2.svg"
        christmasTreeText="Christmas tree"
      />
    </div>
  );
};

export default OverviewContainer;
