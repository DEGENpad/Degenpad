import React, { useContext, useEffect } from 'react';
import * as IMG from '../../images';
import { Link, NavLink } from 'react-router-dom';
import Text from '../custom/Text';
import { clx } from '../custom/clx';
// import { launchProvider } from '../../Context/LaunchContext';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgMenuRight } from "react-icons/cg";
import { MdCancel } from 'react-icons/md';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const NavbarLink = ({ closeMenu }:any) => {
  const tabs = [
    {
      label: 'Claim Portal',
      path: '/claim',
      id: 1,
    },
    {
      label: 'Tier System',
      path: '/tier',
      id: 1,
    },
    {
      label: 'Partners',
      path: '/partner',
      id: 1,
    },
  ];

  return (
    <div className={`flex flex-col md:flex-row` }>
      {tabs.map((tab, index) => (
        <NavLink
          key={index}
          to={tab.path}
          className={({isActive})=>`${isActive?" md:text-dark-100 p-2 hover:text-normal-100 "
          :
          " md:text-normal-100 p-2 hover:text-dark-100"
        } text-white-200 cursor-pointer`}
          onClick={closeMenu}
        >
          {tab.label}
        </NavLink>
      ))}
    </div>
  );
};

const Header = () => {

  const classes = clx('w-[93%] lg:w-[90%] mx-auto pt-8');
  const [toggle, setToggle] = React.useState<boolean>(false);

  const closeMenu = () => {
    setToggle(false);
  };

  return (
    <header className={`flex justify-between items-center ${classes}`}>
      <Link to={'/'}>
        <img src={IMG.Logo} alt='Logo' className='object-cover h-[20px]' />
      </Link>
      <div className='p-2 text-red-500 hidden md:flex '>
        <NavbarLink closeMenu={closeMenu} />
      </div>

      <div className='flex gap-3 md:gap-0'>
        {/* <Text
          as='h1'
          weight='medium'
          className='bg-light-300 p-2 rounded-md hover:bg-light-200'
          onclick={() => {
            setIsWallet(!isWallet);
          }}
        >
          {isWallet ? 'ox2' : 'Connect Wallet'}
        </Text> */}
        <ConnectButton />

        <div className='p-2 text-blue-500 md:hidden relative' onClick={() => setToggle(!toggle)}>
          {
            toggle?
        <MdCancel
         className="text-[30px] text-primary-dark dark:text-white" />:
        <CgMenuRight
         className="text-[30px] text-primary-dark dark:text-white" />

          }
        <Mobile toggle={toggle} closeMenu={closeMenu} />
      </div>
      </div>
      
    </header>
  );
};

const Mobile = ({ toggle, closeMenu }:{toggle:boolean,closeMenu :()=>void}) => {
  return (
    <div className={`fixed inset-0 z-50 w-full bg-black/5 overflow-hidden transition-all delay-100 duration-300 transform ${toggle ? 'translate-x-0' : '-translate-x-full'}`}  onClick={({ target, currentTarget }) =>
    target === currentTarget && closeMenu()
  }>
    <div className='w-[300px] h-[100%] max-h-[100%] bg-light-300 px-[20px] py-[40px] pb-[80px] overflow-auto'>
    <div
          className="w-fit mb-10"
          onClick={({ target, currentTarget }) => closeMenu()}
        >
          <MdCancel className="text-[33px] text-primary-dark" />
        </div>
      <NavbarLink closeMenu={closeMenu} />
    </div>
    </div>
  );
};

export default Header;