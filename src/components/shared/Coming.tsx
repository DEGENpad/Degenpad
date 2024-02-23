import React from "react";
import { GiMegaphone } from "react-icons/gi";
import Text from "../custom/Text";
import CustomButton from "../custom/CustomButton";

const Coming = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex  items-center justify-center">
      <div className="bg-transparent md:bg-white p-3 md:p-8 rounded-lg flex flex-col space-y-3 md:shadow-md text-center">
        <GiMegaphone className="w-20 md:w-40 h-20 md:h-40 mx-auto text-secondary-dark" />
        <Text as="h1" className="text-3xl font-semibold">
          Coming Soon!
        </Text>
        <Text as="p">
          Our awesome feature is under construction. Stay tuned for updates!
        </Text>
        <CustomButton href="/" className="w-full" label="Go to home"/>
      </div>
    </div>
  );
};

export default Coming;
