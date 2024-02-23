import React, { useState, lazy, Suspense } from 'react';
import Text from '../../components/custom/Text';
import Tab from '../../components/shared/Tab';
import { clx } from '../../components/custom/clx';

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
        return <All more={true}/>;
      case 2:
        return <Ongoing />;
      case 3:
        return <Upcoming />;
      case 4:
        return <Ended />;
      default:
        return <All />;
    }
  };

  return (
    <section className={'text-center mt-10 container' + classes}>
      <Text className='text-2xl' as='h2' weight='medium'>
        Where Projects Set Sail and Make Waves
      </Text>
      <Text className='text-lg' as='h4' weight='medium'>
        The fast-growing Defi-integrated Launchpad on emerging blockchains
      </Text>
      <div className='grid grid-cols-3 items-center rounded-[12px] bg-light-100 px-5 border border-5 border-white-400 py-2 mt-10 text-normal-100 font-bold '>
      <Tab activeTab={activeTab} setActiveTab={setActiveTab} span={true}/>
      <h1>Search</h1>
      </div>
      <main className='mt-10 h-full'>
        <Suspense fallback={<div>Loading...</div>}>{selectTab()}</Suspense>
      </main>
    </section>
  );
};

export default Hero;
