import React from 'react';
import './App.css';
import { Hero, Investor, News, Partner, SupportChain } from './view/Home';
import { clx } from './components/custom/clx';

function App() {
  const classes = clx("w-[93%] lg:w-[90%]  mx-auto pt-8");
  return (
    <div className="">
        <Hero/>
        
    </div>
  );
}

export default App;
