import React from 'react';
import Text from '../custom/Text';
import { DataProps } from '../../type';

type InvestorCardProps = {
  label: string;
  board?:DataProps[]
};

const InvestorCard = ({ label,board }: InvestorCardProps) => {
  return (
    <section className='w-full border-4 shadow-[0px 0px 5px 0px #00000040] rounded-md py-10'>
      <div className='bg-gradient-to-b from-normal-100 to-[#000954] h-10 w-full rounded-t-xl text-white text-center flex justify-center items-center'>
        <Text as='span' className='text-white-100 font-bold'>
          {label}
        </Text>
      </div>
      <div className='p-5'>

        {
            board?.map((investor,index)=>(
                <InvestorDetails key={index} investor={investor}/>
            ))
        }
      </div>

      <div className="flex justify-center items-center relative text-center w-full h-0">
        <div className="h-0 w-0 border-t-[15px] border-r-[15px] border-b-0 border-l-[15px] border-t-normal-100 border-r-blue-50 border-b-red-300"></div>
      </div>
    </section>
  );
};

export default InvestorCard;

  
  const InvestorDetails= ({ investor }:{investor:DataProps}) => {
    // console.log(investor.details?.slice(0,8))
    // console.log(investor.details?.substring(0,8))
    // console.log(investor.details?.split('',2))
    // console.log(investor.details?.repeat(2))
    const address =
    investor.details?.startsWith('0x') && investor.details.length > 8
      ? `${investor.details.substring(0, 6)}...${investor.details.slice(-4)}`
      : investor.details;
    return (
      <section className='flex justify-between items-center py-2  '>
        <div className='flex gap-2 items-center'>
          <div className='h-10 w-10 bg-slate-300 rounded-full'></div>
          <Text as='span' className='text-blue-500'>
            {address}
          </Text>
        </div>
        <div>${investor.amt}</div>
      </section>
    );
  };
  
