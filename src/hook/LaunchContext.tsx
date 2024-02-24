import React, { createContext, Dispatch, SetStateAction } from 'react';

interface LaunchContextType {
  isWallet: boolean;
  setIsWallet: Dispatch<SetStateAction<boolean>>;
}

const defaultValue: LaunchContextType = {
  isWallet: false,
  setIsWallet: () => {}, 
};

export const launchProvider = createContext<LaunchContextType>(defaultValue);

const LaunchContext = ({ children }: { children: React.ReactNode }) => {
  const [isWallet, setIsWallet] = React.useState<boolean>(defaultValue.isWallet);

  return (
    <launchProvider.Provider value={{ isWallet, setIsWallet }}>
      {children}
    </launchProvider.Provider>
  );
}

export default LaunchContext;
