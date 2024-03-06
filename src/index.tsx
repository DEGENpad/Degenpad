import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/shared/Layout";
import App from "./App";
import Claim from "./pages/ClaimPage";
import Partners from "./pages/PartnersPage";
import Tier from "./pages/TierPage";
import { All } from "./view/project";
import AllProjectPage from "./pages/AllProjectPage";
import BuyPage from "./pages/BuyPage";
// import {LaunchContext} from "./Context/LaunchContext";

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
  sepolia
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import SingleTier from "./pages/SingleTier";
// import LaunchContext from "./Context/LaunchContext";


const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet, sepolia, polygon, optimism, arbitrum, base, zora],
  ssr: true, // If your dApp uses server side rendering (SSR)
});


const queryClient = new QueryClient();
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<App />} />
      <Route path="claim" element={<Claim />} />
      <Route path="partner" element={<Partners />} />
      <Route path="tier">
      <Route index element={<Tier/>} />
      <Route path=":id" element={<SingleTier/>} />
      </Route>
      <Route path="allproject" element={<AllProjectPage/>} />
      <Route path="buy" element={<BuyPage/>} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
       <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
        theme={darkTheme({
      accentColor: '#0119ef',
      accentColorForeground: 'white',
      borderRadius: 'small',
      fontStack: 'system',
      overlayBlur: 'small',
    })}

       
        >
     {/* <LaunchContext> */}
       <RouterProvider router={router} />
     {/* </LaunchContext> */}
     </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
    
  </React.StrictMode>
);
