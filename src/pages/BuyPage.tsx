import React, { useContext, useEffect } from 'react';
import { launchProvider } from '../hook/LaunchContext';
import { useNavigate } from 'react-router-dom';
import BuyToken from '../view/Buy/BuyToken';

const BuyPage = () => {
  const navigate = useNavigate();
  const { isWallet, setIsWallet } = useContext(launchProvider);

  useEffect(() => {
    if (!isWallet) {
      navigate('/');
    }
  }, [isWallet, navigate]);

  return (
      <>
        <BuyToken/>
      </>
  );
}

export default BuyPage;
