import React from 'react';
import { clx } from '../../components/custom/clx';
import CustomInput from '../../components/custom/Input';
import CustomButton from '../../components/custom/CustomButton';

const BuyToken = ({isModal= false}:{isModal?:boolean}) => {
  const classes = clx('');
  const [input, setInput] = React.useState<string>('');

  return (
    <section className={"flex justify-center items-center " + isModal && 'bg-red-100 px-10 rounded-2xl'}>
      <div className="border border-normal-100 w-full max-w-md p-8 rounded-2xl mt-32 mb-20">
        <CustomInput
          type="number"
          onchange={(event)=>setInput(event)}
          borderColor="normal-100"
          placeholder="Enter Amount"
          label="Amount"
          value={input}
          
        />
        <CustomButton
          label="Buy"
          onClick={()=>{console.log(input)}}
          className="bg-gradient-to-t from-normal-100 to-dark-400 hover:from-dark-400 hover:to-normal-100 px-20 mt-5 rounded-2xl py-2 text-white-100 w-full"
        />
      </div>
    </section>
  );
};

export default BuyToken;
