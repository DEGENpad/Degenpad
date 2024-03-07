import React, { useState, lazy, Suspense } from 'react';
import Text from '../../components/custom/Text';
import Tab from '../../components/shared/Tab';
import { clx } from '../../components/custom/clx';
import Searcrch from '../../components/shared/Searcrch';

// Import components lazily
const All = lazy(() => import('../project/All'));
const Ongoing = lazy(() => import('../project/Ongoing'));
const Upcoming = lazy(() => import('../project/Upcoming'));
const Ended = lazy(() => import('../project/Ended'));

const Hero = () => {
  const classes = clx("w-[93%] lg:w-[90%] flex flex-col mx-auto pt-8");
  const [activeTab, setActiveTab] = useState<number>(1);

  const selectTab = () => {
    switch (activeTab) {
      case 1:
        return <All more={true} schedule='Ends in: 1d : 22h : 33m : 5s'/>;
      case 2:
        return <Ongoing more={true} schedule='Ongoing in: 1d : 22h : 33m : 5s'/>;
      case 3:
        return <Upcoming more={true} schedule='Upcoming in: 1d : 22h : 33m : 5s'/>;
      case 4:
        return <Ended more={true} schedule='Ended: 1d : 22h : 33m : 5s'/>;
      default:
        return <All more={true}/>;
    }
  };

  return (
    <section className={'text-center mt-10 container' + classes}>
      <Text className='text-4xl font-bold' as='h1' weight='medium'>
        Where Projects Set Sail and Make Waves
      </Text>
      <Text className='text-lg' as='h5' weight='medium'>
        The fast-growing Defi-integrated Launchpad on emerging blockchains
      </Text>
      <div className='grid grid-cols-1 sm:grid-cols-3 items-center rounded-[12px] bg-light-100 px-5 border border-5 border-white-400 py-2 mt-10 text-normal-100 font-bold '>
      <Tab activeTab={activeTab} setActiveTab={setActiveTab} span={true}/>
      <Searcrch/>
      </div>
      <main className='mt-10 h-full'>
        <Suspense fallback={<div>Loading...</div>}>{selectTab()}</Suspense>
      </main>
    </section>
  );
};

export default Hero;
