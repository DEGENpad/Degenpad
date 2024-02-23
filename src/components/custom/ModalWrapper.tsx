import React from "react";
import ReactDOM from "react-dom";
import { MdCancel } from "react-icons/md";
import { clx } from "./clx";

interface ModalWrapperProps {
  isOpen: boolean;
  flexibleModal?:boolean,
  handleModalClose: () => void;
  classname?: string;
  children: React.ReactNode;
}

export default function ModalWrapper({
  isOpen,
  flexibleModal,
  handleModalClose,
  classname,
  children,
}: ModalWrapperProps) {
  const classes = clx(
    isOpen ? "fixed" : "hidden",
    "top-0 left-0 right-0 z-[200] h-screen max-h-[screen] bg-black/30 flex  justify-center items-center",
    classname
  );
  if (flexibleModal) {
    return ReactDOM.createPortal(
      <div className={classes} onClick={handleModalClose}>
        {children}
      </div>,
      document.getElementById("modal")!
    );
  }




  return ReactDOM.createPortal(
    <div className={classes}>
      <div className='w-[90%] lg:min-w-[400px] h-[500px] lg:max-w-fit rounded-[20px] bg-white py-10 px-6 lg:px-12 relative flex flex-col'>
        {/* Cancel button */}
        <MdCancel className='text-[24px] absolute right-[30px] text-normal-300 top-[20px] cursor-pointer' onClick={handleModalClose}/>
        {children}
      </div>
    </div>,
    document.getElementById("modal")!
  );
}
