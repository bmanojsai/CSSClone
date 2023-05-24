import React from "react";
import IntroText from "../components/IntroText";
import DetailsContainer from "../components/DetaisContainer";
import FeaturedPlaces from "../components/FeaturedPlaces";

const HomePage: React.FC = () => {
  return (
    <div className=" bg-[url(https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/60d4e852a05fb1b7f2c27185_Frame%202.png)] bg-[#02131b] bg-no-repeat bg-fixed ">
      <div className="max-w-[940px] mx-auto min-h-[920px]">
        <div className="pt-[110px]  h-full relative">
          <IntroText />
          <DetailsContainer />
          <FeaturedPlaces />
        </div>
      </div>
      <div className="h-[200px]  bg-slate-50"></div>
    </div>
  );
};

export default HomePage;
