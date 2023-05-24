import React from "react";



const FeaturedPlaces : React.FC = () => {

    const featuredList = [
        "https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/60d887680097ebddb4cc242f_Group%202.png",
        "https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/60d887730097eb2a9ecc246f_Group%2010-p-500.png",
        "https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/60d887721f92e52fd37bc54c_Group%209-p-500.png",
        "https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/60d8876a566f83ba733d299a_Group%204-p-500.png",
        "https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/60d887716b838083d83d072c_Group%208-p-500.png",
        "https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/60d88771cf553d062ec56a14_Group%207-p-500.png",
        "https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/60d887714ecbfd55ae35688a_Group%206-p-500.png",
        "https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/60d8876e2956d181b3b98230_Group%205.png",
        "https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/60d8876bb4377b3a3561f5ef_Group%203-p-500.png",
        "https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/60d88769b3b5b844725f5fda_Group%201-p-500.png"
    ]

    return (
        <div className="absolute">
            <div className="text-[12px] font-medium bg-linear-gradient-featured p-2 rounded-t-xl w-[100px] text-center mx-auto text-text-color-1">Featured In</div>
            <div className="grid grid-rows-2 grid-cols-5 bg-[#12242c] rounded-3xl p-7">
                {featuredList.map((url : string) => <img src={url} alt="fetured place image" />)}
            </div>
        </div>
    )
}


export default FeaturedPlaces;