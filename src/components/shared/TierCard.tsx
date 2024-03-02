import React from "react";
import Text from "../custom/Text";
import CustomButton from "../custom/CustomButton";
import ProgressBar from "./Progress";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

interface TextInfoProps {
  label: string;
  value: string | number;
}

const TextInfo: React.FC<TextInfoProps> = ({ label, value }) => (
  <>
    <Text as="p" weight="extrabold" className="text-start">
      {label}:
    </Text>
    <Text as="span" weight="normal">
      {value}
    </Text>
  </>
);

const TierCard = ({
  label = "Participate",
  text,
  onclick,
  className,
  singleTier,
}: {
  label?: string;
  text?: string;
  onclick?: () => void;
  className?: string;
  singleTier?: {
    dateOfCompletion: string;
    tokenName: string;
    SLMAmount: number;
    tokenPrice: number;
    maximumPurchase: number;
    totalRaised: string;
    status: string;
  };
}) => {
  const { isConnected } = useAccount();
  const {
    dateOfCompletion,
    tokenName,
    SLMAmount,
    tokenPrice,
    maximumPurchase,
    totalRaised,
    status,
  } = singleTier || {};

  return (
    <section
      className={`w-full border border-3 border-[#D9D9D9] rounded-2xl shadow-[0px 0px 5px 0px #00000040] ${className}`}
    >
      <div className="text-bold text-center h-[70px] flex items-center justify-center bg-normal-100 w-full text-white-100 py-1 rounded-t-xl">
        {text}
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4 p-3">
        <TextInfo label="Status" value={status!} />
        <TextInfo label="Token Name" value={tokenName!} />
        <TextInfo label="Total Raised" value={totalRaised!} />
        <TextInfo label="SLMAmount" value={SLMAmount!} />
        <TextInfo label="Token Price" value={tokenPrice!} />
        <TextInfo label="Maximum Purchase" value={maximumPurchase!} />
        <TextInfo label="Date" value={dateOfCompletion!} />
        
      </div>
      <ProgressBar progress={10} />
      <div className="px-3 pb-3">
        {isConnected ? (
          <CustomButton
            label={label}
            onClick={onclick}
            className="rounded-full text-whiteDark-100 w-full mt-8 px-24 py-[10px] bg-gradient-to-t from-normal-100 to-dark-400 hover:bg--100"
          />
        ) : (
          <ConnectButton />
        )}
      </div>
    </section>
  );
};

export default TierCard;
