import { IoIosSearch } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoShuffleOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import PopularCard from "../components/Popular";
import { useState,useEffect } from "react";
import FeaturedCard from "../components/Featured";

const Home = () => {

    const [data,setData] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('https://fakestoreapi.com/products')

            const data = await response.json()
            console.log(data)
            setData(data)

            return data
        }
       
        getData()
        console.log(data)
    },[])
    
 console.log(data)

    return (
        <>
            <div id="Hero">
                <div id="heroNav" className="flex bg-blue-800 px-20 py-2 text-white justify-between items-center">
                    <div id="left" className="text-[12px]">
                        <ul className="flex gap-3">
                            <li>All Categories</li>
                            <li>Services</li>
                            <li>Promotions</li>
                            <li>Payment And Delivery </li>
                        </ul>
                    </div>
                    <div id="right" className="flex gap-4 justify-between items-center">
                        <div id="search" className="flex py-2 px-4 justify-center items-center bg-white text-black" >
                            <input type="search" name="" id="search" className="bg-transparent" placeholder="search for products" /><IoIosSearch />
                        </div>
                        <div className="p-2 w-8 h-8 flex items-center justify-center border border-white rounded-full">
                            <IoMdHeartEmpty />
                        </div>
                        <div className="p-2 w-8 h-8 flex items-center justify-center border border-white rounded-full">
                            <IoShuffleOutline />
                        </div>
                        <div className="p-2 w-8 h-8 flex items-center justify-center border border-white rounded-full">
                            <IoCartOutline />
                        </div>

                    </div>
                </div>

                <div id="hero-area" className="grid grid-cols-[2.5fr_1.5fr] gap-6 h-screen">
                    <div id="right-HA" className="grid grid-cols-2">
                        <div className="bg-green-300">
                            <div className="h-full flex flex-col justify-center items-center mx-8 text-white">
                                <p className="text-left w-full font-medium">from <span className="text-blue-800">the best </span> designers</p>
                                <p className="text-[54px] text-left font-bold">Check Out Expert Advice</p>
                            </div>
                        </div>
                        <div className="h-full">
                        <img src="https://img.freepik.com/premium-photo/modern-living-room-interior-design_469760-24680.jpg?uid=R98690155&ga=GA1.1.1473969789.1733597413&semt=ais_hybrid&w=740" alt="" className="h-full object-cover"/>
                        </div>
                    </div>
                    <div id="left-HA" className="grid grid-rows-2 gap-4 h-full text-white">
                        <div className="bg-[url('https://img.freepik.com/free-photo/construction-worker-with-hard-hat-sanding-down-wood-piece_23-2148748860.jpg?uid=R98690155&ga=GA1.1.1473969789.1733597413&semt=ais_hybrid&w=740')] bg-cover p-3">
                        <p className="font-bold w-full text-left text-[40px]">
                            Our Services
                        </p>
                        <p className="font-bold w-full text-left">Discover all the ways to get your product.</p>

                        </div>
                        <div className="bg-[url('https://img.freepik.com/premium-vector/autumn-road-transportation-wood-materials-machine-further-processing_200075-4320.jpg?uid=R98690155&ga=GA1.1.1473969789.1733597413&semt=ais_hybrid&w=740')] bg-cover p-3">
                        <p className="font-bold w-full text-left text-[40px]">
                            Our Services
                        </p>
                        <p className="font-bold w-full text-left">Discover all the ways to get your product.</p>    
                        </div>

                    </div>
                </div>
            </div>

            <h3 className="w-full font-bold text-left text-[24px] my-12">Popular Categories</h3>

            <div id="popular" className="grid grid-cols-6 gap-6 "> 
                <PopularCard title="Tiles and porcelain" products="20 products" />
                <PopularCard title="pipes and accessories" products="27 products" />
                <PopularCard title="Bath" products="9 products" />
                <PopularCard title="Mirrors" products="15 products" />
                <PopularCard title="Spotlights" products="25 products" />
                <PopularCard title="Bathroom vanities" products="15 products" />
                <PopularCard title="Bathroom" products="29 products" />
                <PopularCard title="Water heaters" products="12 products" />
                <PopularCard title="Power tools" products="39 products" />
                <PopularCard title="Warm floor" products="8 products" />
                <PopularCard title="Insulation" products="6 products" />
                <PopularCard title="toilet and compacts" products="8 products" />
            </div>

            <h3 className="w-full font-bold text-left text-[24px] my-12">Featured Products</h3>
            

            <div className="grid grid-cols-5">
            <FeaturedCard image={data && data[0].image} />
            {console.log(data)}
            
            {data && console.log(data) && data.map(data =>{
                <div>
                <FeaturedCard title={data.title} rating={data.rating.rate} count={data.rating.count} price={data.price} image={data.image}  />
                </div>
            })}
            </div>

        </>
    );
}

export default Home;