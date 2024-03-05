import React, { useEffect, useState } from "react";
import Text from "../custom/Text";
import CustomButton from "../custom/CustomButton";
import ProgressBar from "./Progress";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import { useEthersProvider } from '../../Context/EtherAdapterProvider';
import { useEthersSigner} from '../../Context/EtherAdapterSigner';
import {ABIDATAS, contractAddress} from '../../Context/abis/LaunchpadABI';

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
    // totalRaised: string;
    startTime: number;
    stopTime: number;
    status: string;
    targetBalance: number;

  };
}) => {
  const { isConnected } = useAccount();
  const {
    dateOfCompletion,
    tokenName,
    SLMAmount,
    tokenPrice,
    maximumPurchase,
    startTime,
    stopTime,
    targetBalance,

    // totalRaised,
    status,
  } = singleTier || {};

  const signer = useEthersSigner();
  const provider  = useEthersProvider();

  const [totalUSDRaised, setTotalRaised]= useState<number | string |undefined>("0");

  

  // useEffect(() =>{

  //   const HandleTotalRaised = async () => {
  //     // let contract
  //   try {
  //       const  contract = new ethers.Contract(
  //         contractAddress,
  //         ABIDATAS.abi,
  //         provider({chainId: 11155111})
  //       )
  
  //      const tx =  await contract.totalUSDCReceivedInAllTier();
  //       console.log(tx);
  //       const convertValueEther = await ethers.utils.formatUnits(tx, 18); // Convert to Ether
  //       const formattedTotalStake = parseFloat(convertValueEther).toFixed();
  //          setTotalRaised(formattedTotalStake);
  //       await tx.wait();
  //       console.log("Total Raised: " + tx);
  //       } catch (error) {
  //         console.log("Something wrong " + error);
      
  //   }
  //   }

  //   if(provider({chainId: 11155111})){
  //     HandleTotalRaised(); 
  //   }
  
  // }, [provider])

  // useEffect(() => {
  //   const FetchTotalUSDRaised = async () => {
  //      try {
  //        const provider = useEthersProvider(); // Correctly use the hook
  //       //  const signer = useEthersSigner();
  //        const {isConnected} = useAccount(); // Correctly use the hook
  //        const [totalUSDRaised, setTotalRaised]= useState<string | undefined>();
  //        // Ensure you're using the signer if you need to interact with contracts that require a signer
  //        const contract = new ethers.Contract(
  //          contractAddress,
  //          ABIDATAS.abi,
  //          provider // Use signer if needed
  //        );
   
  //        const tx = await contract.totalUSDCReceivedInAllTier();
  //        console.log(tx);
  //        const convertValueEther = ethers.utils.formatUnits(tx, 18); // Convert to Ether
  //        const formattedTotalStake = parseFloat(convertValueEther).toFixed(2); // Adjust decimal places as needed
  //        setTotalRaised(formattedTotalStake);
  //        console.log("Total Raised: " + formattedTotalStake);
  //      } catch (error) {
  //        console.error("Something went wrong:", error);
  //      }
  //   };
   
  //   if (isConnected) { // Check if the account is connected
  //      FetchTotalUSDRaised();
  //   }
  //  }, [contractAddress, ABIDATAS.abi, isConnected]); // Depend on contractAddress, ABIDATAS.abi, and isConnected
  const contractABI = ABIDATAS.abi
  const getTotalRaise = async () => {
    try {
      // await InitializedContract();
      let contractInstance: any = new ethers.Contract(
        contractAddress, 
        contractABI,
         await signer
         
      );
      console.log(contractInstance);
      console.log("is it working");
      const tx =  await contractInstance.totalUSDCReceivedInAllTier();
        console.log(tx);
        const convertValueEther = await ethers.utils.formatUnits(tx, 18); // Convert to Ether
        const formattedTotalStake = parseFloat(convertValueEther).toFixed(2);
        console.log(formattedTotalStake);
        setTotalRaised(formattedTotalStake)
  
        // Wait for the transaction to be mined
        const result = await tx.wait();
        console.log(result);
        console.log("is it working");
        // Update state or show success message
        console.log('Transaction successful!');
      // }
  
    }catch (error) {
      console.log("Failed to buy");
      
     }
      
    }
      // console.log(contract)
      // const tx =  await contract.totalUSDCReceivedInAllTier();
    // console.log(tx);
    
  useEffect(()=>{
   
      getTotalRaise();
  
  },[signer])

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
        <TextInfo label="Total Raised" value={`${totalUSDRaised!} ETH`} />
        {/* <TextInfo label="Total Raised" value={!} /> */}
        <TextInfo label="SLMAmount" value={SLMAmount!} />
        <TextInfo label="Token Price" value={tokenPrice!} />
        <TextInfo label="Maximum Purchase" value={maximumPurchase!} />
        {/* <TextInfo label="Date" value={dateOfCompletion!} /> */}
         <TextInfo label="Start Time" value={startTime!} />
          <TextInfo label="Stop Time" value={stopTime!} /> 
        
      </div>
      <ProgressBar progress={totalUSDRaised!} max={targetBalance!} />
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
