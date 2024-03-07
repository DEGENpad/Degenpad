import React from "react";
import { clx } from "../../components/custom/clx";
import Text from "../../components/custom/Text";
import { SocialMedia } from "../../components/shared/Footer";
import { AiFillTwitterCircle } from "react-icons/ai";
import {
  FaDiscord,
  FaLinkedinIn,
  FaMediumM,
  FaTelegramPlane,
} from "react-icons/fa";
import CustomButton from "../../components/custom/CustomButton";
import * as IMG from "./../../images";

const Dashboard = ({
  singleTier,
}: {
  singleTier?: {
    dateOfCompletion: string;
    tokenName: string;
    SLMAmount: number;
    tokenPrice: number;
    maximumPurchase: number;
    totalRaised: string;
    startTime: number;
    stopTime: number;
    status: string;
    targetBalance: number;
    tokenSymbol:string
  };
}) => {
  const classes = clx("w-[93%] lg:w-[90%] flex flex-col mx-auto pt-8");
  const {
    dateOfCompletion,
    tokenName,
    SLMAmount,
    tokenPrice,
    maximumPurchase,
    startTime,
    stopTime,
    targetBalance,
    tokenSymbol,

    totalRaised,
    status,
  } = singleTier || {};
  return (
    <section className={classes}>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div>
          <Text as="h3" weight="semibold" className="text-2xl">
           {tokenName}
          </Text>
          <Text as="h5" weight="bold" className="text-lg">
            {tokenSymbol}
          </Text>
          <SocialMedia>
            {media.map((social, index) => (
              <a key={index} href={social.path}>
                {social.icon}
              </a>
            ))}
          </SocialMedia>
        </div>
        <div className="text-center sm:text-right space-y-2">
          <Text as="h6" weight="normal" className="text-xl">
          Total Raised
          </Text>
          <Text as="h5" weight="semibold" className="text-2xl">
            ${totalRaised}
          </Text>
          <CustomButton
            label="Public"
            className="rounded-full bg-light-300 px-8 py-1 text-blue-500 font-medium"
          />
          <Network
            Network="Token Network"
            networkImage={IMG.eth}
            tokenNetwork="ETH"
          />
          <Network
            Network="Join Network"
            networkImage={IMG.bnb}
            tokenNetwork="BNB"
          />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

export const Network = ({
  tokenNetwork,
  Network,
  networkImage,
}: {
  tokenNetwork?: string;
  Network?: string;
  networkImage?: string;
}) => {
  return (
    <section className="flex justify-between items-center my-2 gap-4">
      <Text as="h6" className="font-bold">
         {Network}
      </Text>
      <img src={networkImage} alt="network" className="h-5 w-5 object-cover" />
      <Text as="h6" className="font-bold">
      {tokenNetwork}
      </Text>
    </section>
  );
};

export const media = [
  {
    path: "",
    icon: (
      <AiFillTwitterCircle className="text-[30px] text-blue-700 hover:text-blue-300 dark:text-white " />
    ),
    id: 1,
  },
  {
    path: "",
    icon: (
      <FaDiscord className="text-[30px] text-blue-700 hover:text-blue-300 dark:text-white" />
    ),
    id: 1,
  },
  {
    path: "",
    icon: (
      <FaMediumM className="text-[30px] text-blue-700 hover:text-blue-300 dark:text-white" />
    ),
    id: 1,
  },
  {
    path: "",
    icon: (
      <FaTelegramPlane className="text-[30px] text-blue-700 hover:text-blue-300 dark:text-white" />
    ),
    id: 1,
  },
  {
    path: "",
    icon: (
      <FaLinkedinIn className="text-[30px] text-blue-700 hover:text-blue-300 dark:text-white" />
    ),
    id: 1,
  },
];
