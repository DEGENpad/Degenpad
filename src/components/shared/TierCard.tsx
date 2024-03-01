import React from "react";
import * as IMG from "./../../images";
import Text from "../custom/Text";

import { Raise, TierData } from "../../constant";
import CustomButton from "../custom/CustomButton";
import ProgressBar from "./Progress";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

const TierCard = ({
  label = "Participate",
  image = true,
  text,
  onclick,
  schedule,
  className
}: {
  label?: string;
  image?: boolean;
  text?: string,
  onclick?: () => void,
  schedule?: string,
  className?: string
}) => {
  const {isConnected} = useAccount();
  return (
    <section className={`w-full border border-3 border-[#D9D9D9] rounded-2xl shadow-[0px 0px 5px 0px #00000040] ${className}`}>
      {image ? (
        <>
          <img
            src={IMG.project}
            alt=""
            className="object-cover w-full h-[200px] rounded-t-xl"
          />
          <div className="text-center h-8 bg-dark-400 w-full text-white-100 py-1">
            {schedule ? schedule : 'Ends in: 1d : 22h : 33m : 5s'}
          </div>
          <div className="p-6">
            <div className="flex items-center gap-5">
              <div className="h-6 w-6 rounded-full bg-[#D9D9D9]"></div>
              <Text as="h6" className="">
                R3V3NGE <span>(Polyland Studio)</span> - Seed
              </Text>
            </div>

            <Text as="p" weight="extrabold text-[#696969]" className="mt-2">
              PolyLand Studios is a Web3 gaming studio focused on crafting
              innovativ...
            </Text>

            <div>
              {
                Raise.map((raise, key) => (
                  <div key={key}>
                    {Object.entries(raise).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2">
                        <div>{key}</div>
                        <div>{value}</div>
                      </div>
                    ))}
                  </div>
                ))
              }
            </div>

          </div>
        </>
      ) : (
        <>
        <div className="text-bold text-center h-[70px] flex items-center justify-center  bg-normal-100 w-full text-white-100 py-1 rounded-t-xl">
          {text}
        </div>
        
        {
                TierData.map((raise, key) => (
                  <div key={key} className="px-3 ">
                    {Object.entries(raise).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2">
                        <div>{key}</div>
                        <div>{value}</div>
                      </div>
                    ))}
                  </div>
                ))
              }
              <ProgressBar progress={10}/>
        </>
      )}
      <div className="px-3 pb-3">
      {
          isConnected ?
          <CustomButton
            label={label}
            onClick={onclick}
            className="rounded-full text-whiteDark-100 w-full mt-8 px-24 py-[10px]  bg-gradient-to-t from-normal-100 to-dark-400 hover:bg--100"
          /> :
        <ConnectButton/>
        }
      </div>

    </section>
  );
};

export default TierCard;
