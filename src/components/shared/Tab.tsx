import React, { useState } from 'react';

const Tab = ({ setActiveTab, activeTab ,span=false}: { setActiveTab: (tab: number) => void; activeTab: number ,span?:boolean}) => {

  return (
    <section className={`flex  flex-col sm:flex-row justify-between ${span && 'col-span-2'}`}>
      {['All', 'Ongoing', 'Upcoming','Ended'].map((tab, index) => (
        <div key={index} onClick={() => setActiveTab(index + 1)} className={`${activeTab === index + 1 ? 'text-white-100 rounded-full bg-normal-100' : 'text-normal-100'} font-bold  cursor-pointer px-5 md:px-8 py-2   text-center`}>
          {tab}
        </div>
      ))}
    </section>
  );
};

export default Tab;
