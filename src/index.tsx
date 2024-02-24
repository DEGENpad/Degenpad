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
import LaunchContext from "./hook/LaunchContext";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<App />} />
      <Route path="claim" element={<Claim />} />
      <Route path="partner" element={<Partners />} />
      <Route path="tier" element={<Tier />} />
      <Route path="allproject" element={<AllProjectPage/>} />
      <Route path="buy" element={<BuyPage/>} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
     <LaunchContext>
       <RouterProvider router={router} />
     </LaunchContext>
    
  </React.StrictMode>
);
