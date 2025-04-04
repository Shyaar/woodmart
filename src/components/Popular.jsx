import { useEffect, useState } from "react";


const PopularCard = ({title,products}) => {



    return (
        <>
            <div className="flex flex-col justify-center items-center gap-3">
                <div id="img" className="w-28 h-28 rounded-full overflow-hidden">
                    <img src="https://img.freepik.com/free-psd/stack-warm-cozy-knit-sweaters-wooden-hanger-autumn-winter-fashion-apparel_632498-31002.jpg?uid=R98690155&ga=GA1.1.1473969789.1733597413&semt=ais_hybrid&w=740" alt="" />
                </div>
                <div className="">
                    <p className="font-semibold">{title}</p>
                    <p>{products}</p>
                </div>
            </div>
        </>
    );
}

export default PopularCard