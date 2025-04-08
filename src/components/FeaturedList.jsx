import { useState, useEffect } from "react";
import Button from "./ui/button";


const FeaturedCard = ({ handleAdd, data }) => {

    console.log(data)

    function handlePlus(id) {
        console.log(document.getElementById(id))
        let toAdd = document.getElementById(id)
        let toAddVal = Number(toAdd.textContent)
        toAddVal += 1
        toAdd.textContent = toAddVal
        console.log(typeof (toAddVal))

        console.log(typeof (toAdd))
        console.log("plus")
        console.log(id)
    }

    function handleMinus(id) {
        let toAdd = document.getElementById(id)
        let toAddVal = Number(toAdd.textContent)

        toAddVal == 0 ? toAddVal = 0 : toAddVal -= 1

        toAdd.textContent = toAddVal
        console.log(typeof (toAddVal))

        console.log(typeof (toAdd))
        console.log("plus")
        console.log(id)

        console.log("minus")
        console.log(id)
    }

    return (
        <>

            {Array.isArray(data) && data.map((data) => (
                <div key={data.id} id={data.id} className="border flex flex-col h-full">
                    <div id="img" className="h-[140px] w-full my-4">
                        <img src={data.image} alt="product image" className="h-[140px] w-[240px] object-scale-down" />
                    </div>
                    <div className="flex flex-col mx-3">
                        <p className="font-bold h-fit text-nowrap w-full truncate overflow-hidden">{data.title}</p>
                        <p className="w-full text-left">rating: {data.rating.rate}</p>
                        <p className="w-full text-left text-blue-800 font-bold">price: {data.price} <span className="text-black/30 font-light">/each</span></p>
                        <div className="flex bg-blue-700">
                            <div className="mx-1">
                                <span className=" text-white flex gap-3 py-1 px-2">
                                    <span onClick={() => handleMinus((`buyId-${data.id}`))}>-</span>
                                    <span id={`buyId-${data.id}`} className="">0</span>
                                    <span onClick={() => handlePlus((`buyId-${data.id}`))}>+</span>
                                </span>
                            </div>
                            <Button color="Blue" text="Add to cart" handleAdd={() => handleAdd(data.id)} handleMinus={() => handleMinus((`buyId-${data.id}`))} toBuy="0" handlePlus={() => handlePlus((`buyId-${data.id}`))} />
                        </div>
                        <p className="w-full text-left text-[15px]">in stock: {data.rating.count}</p>
                    </div>
                </div>

            ))}

        </>
    );
}

export default FeaturedCard;