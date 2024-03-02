import React, { useEffect } from "react";
import { clx } from "../../components/custom/clx";
import TierCard from "../../components/shared/TierCard";
import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const WhiteListCard = ({ singleTier }: { singleTier: any }) => {
  const { isConnected } = useAccount();
  const navigate = useNavigate();
  console.log(singleTier);

  useEffect(() => {
    // Uncomment the code below if you want to navigate when not connected
    // if (!isConnected) {
    //   navigate("/");
    // }
  }, []);

  const classes = clx("w-[93%] lg:w-[90%] flex flex-col mx-auto pt-8");

  return (
    <section className={classes}>
      <div className="flex flex-col md:flex-row justify-between items-center gap-9 px-1 md:px-10 lg:px-28 xl:px-40">
        {singleTier?.map((tier: any, index: number) => (
          <TierCard
            label={"Buy"}
            text="TIER - PUBLIC SALE "
            onclick={() => navigate("/buy")}
            className=""
            singleTier={tier}
            key={index}
          />
        ))}
        {singleTier?.map((tier: any, index: number) => (
          <TierCard
            label={"Buy"}
            text="TIER - WHITELIST"
            onclick={() => navigate("/buy")}
            className=""
            singleTier={tier}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default WhiteListCard;
