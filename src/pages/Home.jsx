import { IoIosSearch } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoShuffleOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import PopularCard from "../components/Popular";
import FeaturedCard from "../components/FeaturedList";
import { RiDeleteBackFill } from "react-icons/ri";
import { useState, useEffect } from "react";


const Home = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        const getData = async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            // const response = await fetch('https://api.escuelajs.co/api/v1/products')

            const data = await response.json()
            // console.log(data)
            setData(data)

            return data
        }

        getData()
        // console.log(data)
    }, [])

    const [cart, setCart] = useState([])


    function handleCloseCart(id) {
        console.log("clicked")

        let cartArea = document.getElementById(id)
        cartArea.style.display = 'none'
    }

    function handleAdd(id) {
        console.log('clicked')
        console.log(id)

        let added = data.find(data => data.id == id)
        console.log(added)
        setCart((prevCart) => {
            let newCart = [...prevCart, added]
            return newCart
        })





        let count = document.getElementById('cartCount')
        count.textContent = cart.length

        console.log(cart)
        console.log(cart.length)

        let numberToBuy = document.getElementById(`buyId-${id}`)
        
        console.log(numberToBuy)



    }

    function handleRemove(data) {
        console.log(data)
        let removed = cart.filter(cart => cart.id !== data.id)
        console.log(removed)
        console.log(cart)


        setCart(removed) 
    }


    let totalItems = cart.map(cart => cart.price)
    console.log(totalItems)

    let totalPrice = 0

    if (totalItems == 0) {
        let totalPrice = 0
    } else {
        totalPrice = totalItems.reduce((acc, val) => {
            return acc + val
        })
    }
    console.log(totalPrice)


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
                        <div id="liked" className="relative p-2 w-8 h-8 flex items-center justify-center border border-white rounded-full">
                            <IoMdHeartEmpty />
                            <p className="absolute rounded-full text-[12px] min-w-4 px-[2px] flex justify-center items-center  bg-white text-blue-900 -top-2 left-5">0</p>
                        </div>
                        <div id="compare" className="relative p-2 w-8 h-8 flex items-center justify-center border border-white rounded-full">
                            <IoShuffleOutline />
                            <p className="absolute rounded-full text-[12px] min-w-4 px-[2px] flex justify-center items-center  bg-white text-blue-900 -top-2 left-5">0</p>
                        </div>
                        <div id="cart" className="relative p-2 w-8 h-8 flex items-center justify-center border border-white rounded-full">
                            <IoCartOutline onClick={() => {
                                document.getElementById('cartArea').style.display = 'Block'
                            }} />
                            <p id="cartCount" className="absolute rounded-full text-[12px] min-w-4 px-[2px] flex justify-center items-center  bg-white text-blue-900 -top-2 left-5">{cart.length}</p>
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
                            <img src="https://img.freepik.com/premium-photo/modern-living-room-interior-design_469760-24680.jpg?uid=R98690155&ga=GA1.1.1473969789.1733597413&semt=ais_hybrid&w=740" alt="" className="h-full object-cover" />
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

                <div id="cartArea" className="bg-white w-[500px] border top-0 right-0 flex flex-col items-center py-11 px-6 h-screen fixed">
                    <div id="heading" className="flex items-center justify-between w-full px-6">
                        <p className="font-bold text-[32px]">Cart</p>
                        <IoIosCloseCircleOutline className="text-[30px]" onClick={() => handleCloseCart('cartArea')} />
                    </div>
                    <div className="overflow-y-auto ">
                        {cart && cart.map((cart) => (
                            <div className="">
                                <div className="flex w-full items-center justify-between my-4 border-b p-1  ">
                                    <div key={cart.id} id="left" className="flex items-center">
                                        <div id="image" className="w-[70px] h-[70px] border flex items-center justify-center">
                                            <img src={cart.image} alt="" className="w-[70px] h-[70px]" />
                                        </div>
                                        <p className="font-bold text-[18px] mx-3">{cart.title}</p>
                                    </div>

                                    <div id="remove" className="w-[70px]  mx-4 flex justify-center items-center">
                                        <RiDeleteBackFill onClick={() => handleRemove(cart)} className="text-red-600" />
                                    </div>
                                </div>
                                <div id="bottom" className="flex w-full justify-between">
                                <p className="font-bold text-[20px] border-b text-right w-full">${cart.price}</p> 
                                    {/* <div id="number">
                                       
                                        </div> */}
                                    {/* <div id="price">
                                        <p className="font-bold text-[20px]">${cart.price}</p>
                                    </div> */}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div id="total" className="flex bg-white justify-between w-full absolute bottom-0 p-6 border-t">
                        <p className="font-bold text-[20px]">Total</p>
                        <p className="font-bold text-[20px]">{totalPrice}</p>
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


            <div className="grid grid-cols-5 gap-6">
                <FeaturedCard handleAdd={handleAdd} data={data} />
            </div>



        </>
    );
}

export default Home;