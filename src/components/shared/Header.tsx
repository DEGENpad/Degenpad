import React from 'react'
import * as IMG from '../../images'
import { Link, NavLink } from 'react-router-dom'
import Text from '../custom/Text'
import { clx } from '../custom/clx'

const Header = () => {
  const classes = clx("w-[93%] lg:w-[90%]  mx-auto pt-8");
  const tabs =[
      {
        label:'Claim Portal',
        path:'/claim',
        id:1
      },
      {
        label:'Tier System',
        path:'/tier',
        id:1
      },
      {
        label:'Partners',
        path:'/partner',
        id:1
      },
  ]
  return (
    <header className={`flex justify-between items-center ${classes}`}>
      <Link to={'/'}>
          <img src={IMG.Logo} alt='Logo' className='object-cover h-[20px]'/>
      </Link>
     <div className='p-2 text-red-500'>
     {tabs.map((tab, index) => (
          <NavLink className={({ isActive }) => (isActive ? 'text-dark-100 p-2' : 'text-normal-100 p-2')} key={index} to={tab.path}>
            {tab.label}
          </NavLink>
        ))}
     </div>
     <div>
       <Text as='h1' weight='medium' className='bg-light-300 p-2 rounded-md hover:bg-light-200' onclick={()=>{}}>Connect Wallet</Text>
     </div>
    </header>
  )
}

export default Header