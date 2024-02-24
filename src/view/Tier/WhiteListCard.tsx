import React, { useContext } from "react";
import { clx } from "../../components/custom/clx";
import ParticipateCard from "../../components/shared/ParticipateCard";
import { launchProvider } from "../../hook/LaunchContext";
import { useNavigate } from "react-router-dom";

const WhiteListCard = () => {
  const { isWallet, setIsWallet } = useContext(launchProvider);
  const navigate = useNavigate();
  const classes = clx("w-[93%] lg:w-[90%] flex flex-col mx-auto pt-8");
  return (
    <section className={classes}>
      <div className="flex flex-col md:flex-row justify-between items-center gap-9">
        <ParticipateCard
          label={isWallet ? "Buy" : "connect wallet"}
          image={false}
          text="TIER - WHITELIST "
          onclick={() => {
            if (isWallet) {
              navigate("/buy");
            } else {
              setIsWallet(!isWallet);
            }
          }}
        />
        <ParticipateCard
  label={isWallet ? "Buy" : "Connect Wallet"}
  image={false}
  text="TIER - WHITELIST"
  onclick={() => {
    if (isWallet) {
      navigate("/buy");
    } else {
      setIsWallet(!isWallet);
    }
  }}
/>

      </div>
    </section>
  );
};

export default WhiteListCard;
