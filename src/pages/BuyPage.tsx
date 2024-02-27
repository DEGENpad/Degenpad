import React, { useContext, useEffect } from 'react';
// import { launchProvider } from '../Context/LaunchContext';
import { useNavigate } from 'react-router-dom';
import BuyToken from '../view/Buy/BuyToken';
import { useAccount } from 'wagmi';


const BuyPage = () => {
  const navigate = useNavigate();
  const {isConnected } = useAccount()

 

  // useEffect(() => {
   
  //     navigate('/');
    
  // }, [ navigate]);

  return (
      <>
        <BuyToken isModal={false}/>
      </>
  );
}

export default BuyPage;
