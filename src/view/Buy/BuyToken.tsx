import React, {useContext, useEffect, useState} from 'react';
import { clx } from '../../components/custom/clx';
import CustomInput from '../../components/custom/Input';
import CustomButton from '../../components/custom/CustomButton';
// import { launchProvider } from '../../Context/LaunchContext';
import {ethers} from "ethers";
import { useEthersProvider } from '../../Context/EtherAdapterProvider';
import { useEthersSigner} from '../../Context/EtherAdapterSigner';
// import {ethers} from 'ethers';

//   import {
//     useAccount,
//  // Changed from usePrepareContractWrite
//     useChainId,
//   } from "wagmi";

//   import { http } from '@wagmi/core'
// import { sepolia } from '@wagmi/core/chains'
// import { writeContract } from 'viem/actions';
// import { createClient, getAddress, parseEther } from 'viem'
// import { getAccount } from '@wagmi/core'




interface ABIDATA {
  abi: any[]; // Replace 'any' with the actual type of the ABI array if known
  [key: string]: any; // This line allows any string to be used as a key
}
interface IContract {
  buyTokens: (options: { value: ethers.BigNumber }) => Promise<ethers.ContractTransaction>;
  // Add other methods of your contract here if needed
}
const BuyToken = ({isModal= false}:{isModal?:boolean}) => {
  const classes = clx('');
// const {contract,  InitializedContract, NumberToEther, inputAmount, setInputAmount} = useContext(launchProvider);
// const chain  = useChainId();
// const account = useAccount();
const [inputAmount, setInputAmount] = useState('');
// const [contract, setContract] = useState<IContract>();
const provider = useEthersProvider();
const signer: Promise<ethers.providers.JsonRpcSigner | undefined> = useEthersSigner();

// // Define an interface for your contract



const ABIDATA: ABIDATA= {
  abi: [
      {
          "inputs": [
              {
                  "internalType": "address[]",
                  "name": "_users",
                  "type": "address[]"
              }
          ],
          "name": "addManyUsersToWhiteList",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "_token",
                  "type": "address"
              },
              {
                  "internalType": "address",
                  "name": "_projOwner",
                  "type": "address"
              },
              {
                  "internalType": "uint256",
                  "name": "_stopTime",
                  "type": "uint256"
              },
              {
                  "internalType": "uint256",
                  "name": "_maxBuy",
                  "type": "uint256"
              },
              {
                  "internalType": "uint256",
                  "name": "_minBuy",
                  "type": "uint256"
              },
              {
                  "internalType": "uint256",
                  "name": "_softcap",
                  "type": "uint256"
              },
              {
                  "internalType": "uint256",
                  "name": "_hardcap",
                  "type": "uint256"
              }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "target",
                  "type": "address"
              }
          ],
          "name": "AddressEmptyCode",
          "type": "error"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
              }
          ],
          "name": "AddressInsufficientBalance",
          "type": "error"
      },
      {
          "inputs": [
              {
                  "internalType": "uint256",
                  "name": "_amount",
                  "type": "uint256"
              }
          ],
          "name": "buyTokens",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "claimInit",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "claimStageOne",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "FailedInnerCall",
          "type": "error"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
              }
          ],
          "name": "SafeERC20FailedOperation",
          "type": "error"
      },
      {
          "inputs": [
              {
                  "internalType": "uint256",
                  "name": "newMaxBUy",
                  "type": "uint256"
              }
          ],
          "name": "setMaximumBuy",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "uint256",
                  "name": "newMinimuBUy",
                  "type": "uint256"
              }
          ],
          "name": "setMiniumBuy",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "_newAddress",
                  "type": "address"
              }
          ],
          "name": "setNewProjectOwner",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "bool",
                  "name": "_saleStatus",
                  "type": "bool"
              }
          ],
          "name": "setSaleStatus",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "uint256",
                  "name": "_newTime",
                  "type": "uint256"
              }
          ],
          "name": "setStartTime",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "uint256",
                  "name": "_newStopTime",
                  "type": "uint256"
              }
          ],
          "name": "setStopTime",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "newAddress",
                  "type": "address"
              }
          ],
          "name": "setTokenUsedTobuySale",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "anonymous": false,
          "inputs": [
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
              },
              {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
              }
          ],
          "name": "TokensClaimed",
          "type": "event"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
              }
          ],
          "name": "balances",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "currentWhitelistUsers",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "hardcap",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "isPublicSale",
          "outputs": [
              {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
              }
          ],
          "name": "isWhitelisted",
          "outputs": [
              {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "maxBuyAmount",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "minBuyAmount",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
              }
          ],
          "name": "nextClaimableAmount",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
              }
          ],
          "name": "nextClaimTime",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "owner",
          "outputs": [
              {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "projectOwner",
          "outputs": [
              {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "RELEASE_PERCENTAGE",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "softcap",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "startTime",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "stopTime",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "token",
          "outputs": [
              {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "totalUSDCReceivedInAllTier",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
              }
          ],
          "name": "Users",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "VESTING_DURATION",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "WAIT_PERIOD",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      }
    ],
    

};

const NumberToEther = (number: string) => {
  // Use ethers.utils.parseUnits for conversion
  return ethers.utils.parseEther(number.toString());

};



const contractAddress = "0xFdF0B0335a94aa1F735293eaa1925d864C824Fd6";
const contractABI = ABIDATA.abi;


// // const contractProvider =  new ethers.Contract(
// //   contractAddress, 
// //   contractABI,
// //   provider
   
// // )
// const InitializedContract = async() => {
//   const contractInstance: any = new ethers.Contract(
//     contractAddress, 
//     contractABI,
//      await signer
     
//   );
//   // setContract(contractInstance)
//   // return contractInstance;
// }
// useEffect( () => {
  
//   InitializedContract();

// }, [])



const buyToken = async () => {
  try {
    // await InitializedContract();
    const contractInstance: any = new ethers.Contract(
      contractAddress, 
      contractABI,
       await signer
       
    );
    console.log(contractInstance);
    // if (contract) {
      const tx = await contractInstance.buyTokens(NumberToEther(inputAmount));
      console.log(tx);
      const receipt = await tx.wait();
      console.log("Transaction Successful:", receipt);
    // }

  }catch (error) {
    console.log("Failed to buy");
    
   }
    
  }




  return (
    <section className={`flex justify-center items-center ${ isModal && 'bg-red-100 px-10 rounded-2xl'}`}>
      <div className="border border-normal-100 w-full max-w-md p-8 rounded-2xl mt-32 mb-20">
        <CustomInput
          type="number"
          onchange={(event)=>setInputAmount(event)}
          borderColor="normal-100"
          placeholder="Enter Amount"
          label="Amount"
          value={inputAmount}
          
        />
       
        <CustomButton
          label="Buy"
          onClick={buyToken}
          className="bg-gradient-to-t from-normal-100 to-dark-400 hover:from-dark-400 hover:to-normal-100 px-20 mt-5 rounded-2xl py-2 text-white-100 w-full"
        />

      </div>
    </section>
  );

};

export default BuyToken;
