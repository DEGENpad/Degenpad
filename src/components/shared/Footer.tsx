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
    <footer className={` bg-[#000954] text-white-100 mt-10`}>
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
    <section className="flex  gap-10">
      {footerData.map((data, index) => (
        <div className="" key={index}>
          <Text as="h5" >
            {data.title}
          </Text>
          <div className="mt-4">
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
    <section>
      <img src={IMG.logodown} alt="" className="w-20 h-20" />
      <Text as="span">Contact us:</Text>
      <Text as="p">For business: hello@seapad.</Text>
      <Text as="p">fund For technology: dev@seapad.fund</Text>
    </section>
  );
};


export const SocialMedia =({children}:{children:React.ReactNode})=>{
  return(
    <section className="flex gap-4 mt-5">
      {children}
    </section>
  )
}


export const media =[
  {
    path:'',
    icon:<AiFillTwitterCircle className="text-normal-300 text-lg  transition-all delay-100 opacity-15 ease-in-out hover:text-light-300 hover:translate-y-2 duration-200 hover:scale-100"/>,
    id:1
  },
  {
    path:'',
    icon:<FaDiscord className="text-normal-300 text-lg  transition-all delay-100 opacity-15 ease-in-out hover:text-light-300 hover:translate-y-2 duration-200 hover:scale-100"/>,
    id:1
  },
  {
    path:'',
    icon:<FaMediumM className="text-normal-300 text-lg  transition-all delay-100 opacity-15 ease-in-out hover:text-light-300 hover:translate-y-2 duration-200 hover:scale-100"/>,
    id:1
  },
  {
    path:'',
    icon:<FaTelegramPlane className="text-normal-300 text-lg  transition-all delay-100 opacity-15 ease-in-out hover:text-light-300 hover:translate-y-2 duration-200 hover:scale-100"/>,
    id:1
  },
  {
    path:'',
    icon:<FaLinkedinIn className="text-normal-300 text-lg  transition-all delay-100 opacity-15 ease-in-out hover:text-light-300 hover:translate-y-2 duration-200 hover:scale-100" />,
    id:1
  },
]
