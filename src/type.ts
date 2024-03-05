import React, { ReactNode } from "react";
import {ethers} from "ethers";

export interface VoidProps {
    handleToggle:()=>void
}
export interface InputProps{
    type:string,
    disabled?:boolean,
  defaultValue?:string,
  errorMessage?:string,
  value?:string,
  onchange:(value:string)=>void,
  onfocus?:()=>void,
  onblur?:()=>void,
  label?:string,
  placeholder?:string,
  inputClass?:string,
  name?:string,
  background?:string,
  borderColor?:string,
  iconLeft?:React.ReactNode,
  iconRight?:React.ReactNode,
  classname?:string,
  children?:React.ReactNode,
}
export interface DataProps {
    id:number,
    label?:string,
    details?:string,
    image?:string,
    amt?:number

}

export interface FooterData {
    id:number,
    title:string,
    content:string[]
}

export interface User  {
    firstName: string
    lastName: string
    age: number
    visits: number
    progress: number
    status: string
  }

//   export interface ABIDATA {
//     abi: any[]; // Replace 'any' with the actual type of the ABI array if known
//     // [key: string]: any; // This line allows any string to be used as a key
//   }

// Define the structure for an ABI input
interface ABInput {
    internalType: string;
    name: string;
    type: string;
   }
   
   // Define the structure for an ABI output
   interface ABOutput {
    internalType: string;
    name: string;
    type: string;
   }
   
   // Define the structure for an ABI item
   interface ABIItem {
    inputs?: ABInput[];
    outputs?: ABOutput[];
    name?: string;
    type?: string;
    stateMutability?: string;
    anonymous?: boolean;
    // Add other properties as needed
   }
   
   // Define the structure for the ABIDATA interface
   export interface ABIDATA {
    abi: any;
   }
   

 export interface IContract {
    buyTokens: (options: { value: ethers.BigNumber }) => Promise<ethers.ContractTransaction>;
    // Add other methods of your contract here if needed
  }

  export interface Signer {
    signer: Promise<ethers.providers.JsonRpcSigner | undefined>
    
  }

  export interface Provider {
    provider: Promise<ethers.providers.FallbackProvider> | Promise<ethers.providers.JsonRpcProvider | undefined>
  }
