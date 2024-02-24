import React from "react";
import { clx } from "../../components/custom/clx";
import Text from "../../components/custom/Text";
import CustomButton from "../../components/custom/CustomButton";
import ModalWrapper from "../../components/custom/ModalWrapper";
import BuyToken from "../Buy/BuyToken";

const Board = () => {
  const [isModalOpen, setModalOpen] = React.useState<boolean>(false);
  const classes = clx("w-[93%] lg:w-[90%] flex flex-col mx-auto pt-8");
  return (
    <section className={classes}>
      <div className="flex items-center px-1 md:px-10">
        <div className="bg-light-300 flex-1 flex flex-col justify-center h-[96px] rounded-l-full">
          <Text as="h6" className="font-bold text-normal-300 ps-6">
            YOUR TIER:
          </Text>
        </div>
        <div className="bg-light-100 flex-1 px-2 h-[96px] flex items-center justify-center">
          <Text as="h6" className="text-sm text-black">
            Snapshot Tier Has Ended
          </Text>
        </div>
        <div className="bg-light-300 flex-1 flex flex-col justify-center items-end pe-6 h-[96px] rounded-r-full">
          <Text as="h6" className="text-normal-300 text-sm">
            Stake SPT
          </Text>
          <Text as="h6" className="text-normal-300 text-sm">
            12h before IDO Sale to join
          </Text>
          <CustomButton
            label="stake"
            onClick={()=>setModalOpen(true)}
            className="bg-normal-300 hover:bg-normal-100 rounded-md inline text-white-100 px-7 py-1 mt-2 transition duration-150 ease-in-out"
          />
        </div>
      </div>
      <ModalWrapper 
       isOpen={isModalOpen} handleModalClose={()=>setModalOpen(false)}>
        <BuyToken isModal/>
      </ModalWrapper>
    </section>
  );
};

export default Board;





