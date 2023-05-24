import React from "react";

type DetailsType = {
  src: string;
  text: string;
};

const DetailBox: React.FC<{ details: DetailsType }> = ({ details }) => {
  return (
    <div className="flex justify-start items-center rounded-xl text-[15px] font-bold text-text-color-1 font-Poppins bg-[#02131b] p-[6px] ">
      <img src={details.src} alt="respective image" className="w-7 h-7 m-3" />
      <p>{details.text}</p>
    </div>
  );
};

const DetailsContainer1: React.FC = () => {
  const detailsList = [
    {
      src: "https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/60d4e6508e4e0d3d23669fba_Vector-2.svg",
      text: "5 Days",
    },
    {
      src: "https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/60d4e6511fcd6385aa72ac2c_Vector.svg",
      text: "Pre-recorded videos + Zoom QnA",
    },
    {
      src: "https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/60d4e65262351a5934d23184_Vector-3.svg",
      text: "May 28th, 2023",
    },
    {
      src: "https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/60d4e6518fb1a604cf725212_Vector-1.svg",
      text: "7 PM IST ( 3 Hour Stream)",
    },
  ];

  return (
    <div className="flex-1  grid grid-cols-[1fr_1fr] grid-rows-[repeat(4,minmax(0,auto))] gap-3 p-3  rounded-2xl bg-[url(https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/60d4e9b2d794cf44cc814a2b_IMG_9567-removebg-preview%201.png)] bg-[#12242c]  bg-[length:200px_230px] bg-[left_20px_top_140px]  bg-no-repeat">
      {detailsList.map((details: DetailsType) => (
        <DetailBox details={details} />
      ))}

      <div className=" col-span-2 text-text-color-1 pt-7 pb-4  flex justify-end">
        <div className="mx-[50px] ">
          <p className="text-[24px] mb-1">Vaibhav Sisinty</p>
          <p className="text-[14px] font-thin  leading-[150%]">
            LinkedIn Growth Expert,
          </p>
          <p className="text-[14px] font-light leading-[150%]">
            Growth Hacker,
          </p>
          <p className="text-[14px] font-light leading-[150%]">
            Ex- Uber & Klook
          </p>
        </div>
      </div>
      <div>
        <img
          src="https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/60d4e95f01e9004a53d63d9e_Frame%201274.svg"
          alt="no of followers"
          className="w-full"
        />
      </div>
      <div>
        <img
          src="https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/60d4e95f01e9004a53d63d9e_Frame%201274.svg"
          alt="no of impressions"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default DetailsContainer1;
