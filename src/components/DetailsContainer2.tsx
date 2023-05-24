import React from "react";
import ReserveSeatButton from "./ReserveSeatButton";

const DetailsContainer2: React.FC = () => {
  return (
    <div className=" flex flex-col justify-end px-5 flex-1">
      <p className=" text-[20px] leading-[120%] text-text-color-1  text-center">
        Reserve a seat before May 23, 2023 to unlock Bonuses worth &#8377;45,000
      </p>
      <ReserveSeatButton />
    </div>
  );
};

export default DetailsContainer2;
