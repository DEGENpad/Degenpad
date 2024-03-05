import React from "react";
import Text from "../custom/Text";
import CustomButton from "../custom/CustomButton";

interface ParticipateCardProps {
 label?: string;
 image?: boolean;
 onclick?: () => void;
 allPool?: {
    logo: string;
    dateOfCompletion: string;
    tokenName: string;
    SLMAmount: number;
    tokenPrice: number;
    // maximumPurchase: number;
    projectDescription: string;
    targetBalance: string;
    status: string;
 };
}

const ParticipateCard: React.FC<ParticipateCardProps> = ({
 label = "Participate",
 image = true,
 onclick,
 allPool,
}) => {
//  const { logo, dateOfCompletion, tokenName, SLMAmount, tokenPrice, maximumPurchase, projectDescription, targetBalance, status } = allPool || {};
  const { logo, dateOfCompletion, tokenName, SLMAmount, tokenPrice, projectDescription, targetBalance, status } = allPool || {};

 return (
    <section className="w-full border border-3 border-[#D9D9D9] rounded-2xl shadow-[0px 0px 5px 0px #00000040] flex flex-col h-full">
      <div className="flex  justify-center">

      {image && logo && (
        <img
        src={logo}
        alt={`Logo for ${tokenName}`}
        className="w-[400px] h-[150px] md:[200px] object-cover p-0"
        // style={{ width: '150px', height: '150px', objectFit: 'cover' }}
        />
        )}
        </div>
      <div className="text-center h-8 bg-dark-400 w-full text-white-100 py-1">
        Ends in: {dateOfCompletion}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-5">
          <div className="h-6 w-6 rounded-full bg-[#D9D9D9]"></div>
          <Text as="h6">{tokenName}</Text>
        </div>
        <div className="mt-4">
          <Text as="p" className="text-start">
            {projectDescription?.slice(0, 50)}{projectDescription?.length! > 50 ? ' ***' : ''}
          </Text>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
        <Text as="p" weight="extrabold" className="text-start">
            Status:
          </Text>
          <Text as="span" weight="normal">
            {status}
          </Text>
          <Text as="p" weight="extrabold" className="text-start">
            Fundraising Goal:
          </Text>
          <Text as="span" weight="normal">
            {targetBalance}
          </Text>
          <Text as="p" weight="extrabold" className="text-start">
            SLMAmount:
          </Text>
          <Text as="span" weight="normal">
            {SLMAmount}
          </Text>
          <Text as="p" weight="extrabold" className="text-start">
            Token Price:
          </Text>
          <Text as="span" weight="normal">
            {tokenPrice}
          </Text>
          {/* <Text as="p" weight="extrabold" className="text-start">
            Maximum Purchase:
          </Text> */}
          {/* <Text as="span" weight="normal">
            {maximumPurchase}
          </Text> */}
        </div>
      </div>

      <div className="px-3 pb-3 flex justify-center">
        <CustomButton
          label={label}
          onClick={onclick}
          className="rounded-full text-whiteDark-100 w-full px-24 py-[10px] bg-gradient-to-t from-normal-100 to-dark-400 hover:bg--100"
        />
      </div>
    </section>
 );
};

export default ParticipateCard;
