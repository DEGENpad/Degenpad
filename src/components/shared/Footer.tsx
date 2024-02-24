import React from "react";
import { clx } from "../custom/clx";
import * as IMG from "./../../images";
import Text from "../custom/Text";
import { footerData } from "../../constant";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaDiscord ,FaMediumM,FaTelegramPlane,FaLinkedinIn} from "react-icons/fa";

const Footer = () => {
  const classes = clx(
    "w-[93%] lg:w-[90%] flex flex-col md:flex-row justify-between  mx-auto pt-8 py-5"
  );
  return (
    <footer className={` bg-[#000954]  mt-10`}>
      <div className={`${classes}`}>
        <FooterLogo />
        <FooterLaunch />
      </div>
      <SocialMedia>
        {
          media.map((social,index)=>(
            <a key={index} href={social.path}>{social.icon}</a>
          ))
        }
      </SocialMedia>
    </footer>
  );
};

export default Footer;

const FooterLaunch = () => {
  return (
    <section className="flex flex-col sm:flex-row gap-10  text-white-200">
      {footerData.map((data, index) => (
        <div className="pt-10 sm:mt-0" key={index}>
          <Text as="h5" className="font-bold">
            {data.title}
          </Text>
          <div className="mt-4 text-white-300">
            {data.content.map((data, index) => (
              <Text as="h6" key={index}>
                {data}
              </Text>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
const FooterLogo = () => {
  return (
    <section className="text-white-200">
      <img src={IMG.logodown} alt="" className="w-20 h-20" />
      <Text as="span">Contact us:</Text>
      <Text as="p">For business: hello@seapad.</Text>
      <Text as="p">fund For technology: dev@seapad.fund</Text>
    </section>
  );
};


export const SocialMedia =({children}:{children:React.ReactNode})=>{
  return(
    <section className="flex gap-4 mt-5 text-white-300 py-3">
      {children}
    </section>
  )
}


export const media =[
  {
    path:'',
    icon:<AiFillTwitterCircle  className="text-[30px] text-white-500 dark:text-white "/>,
    id:1
  },
  {
    path:'',
    icon:<FaDiscord  className="text-[30px] text-white-500 dark:text-white"/>,
    id:1
  },
  {
    path:'',
    icon:<FaMediumM  className="text-[30px] text-white-500 dark:text-white"/>,
    id:1
  },
  {
    path:'',
    icon:<FaTelegramPlane  className="text-[30px] text-white-500 dark:text-white"/>,
    id:1
  },
  {
    path:'',
    icon:<FaLinkedinIn  className="text-[30px] text-white-500 dark:text-white" />,
    id:1
  },
]
