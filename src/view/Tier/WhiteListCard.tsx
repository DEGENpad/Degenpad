import React, {  useEffect } from "react";
import { clx } from "../../components/custom/clx";
import TierCard from "../../components/shared/TierCard";
// import { launchProvider } from "../../Context/LaunchContext";
import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const WhiteListCard = () => {
  // const { isWallet, setIsWallet } = useContext(launchProvider);
  const {isConnected} = useAccount();
  const navigate = useNavigate();

  // useEffect(() => {
  //   // if (isConnected) {
  //     navigate("/buy");
  //   }
  // }, []);
  const classes = clx("w-[93%] lg:w-[90%] flex flex-col mx-auto pt-8");
  return (
    <section className={classes}>
      <div className="flex flex-col md:flex-row justify-between items-center gap-9 px-1 md:px-10 lg:px-28 xl:px-40">
        <TierCard
          label={isConnected ? "Buy" : "connect wallet"}
          image={false}
          text="TIER - PUBLIC SALE "
          onclick={() => {
            if (!isConnected) {
              <ConnectButton/>
              console.log("Please connect your wallet");
             
            } else {
              navigate("/buy");
              
            }
          }}
          className=""
        />
        <TierCard
          label={isConnected ? "Buy" : "connect wallet"}
  image={false}
  text="TIER - WHITELIST"
  onclick={() => {
      <ConnectButton/ >
    
    if (isConnected) {
      navigate("/buy");
    } else {
     console.log("Please connect wallet");
    }
    
  }}

/>

      </div>
    </section>
  );
};

export default WhiteListCard;
