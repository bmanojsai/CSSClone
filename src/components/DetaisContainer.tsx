import React from "react";
import DetailsContainer1 from "./DetailsContainer1";
import DetailsContainer2 from "./DetailsContainer2";

const DetailsContainer : React.FC = () => {
    return (
        <div className="flex my-10">
            <DetailsContainer1 />
            <DetailsContainer2 />
        </div>
    )
}


export default DetailsContainer;