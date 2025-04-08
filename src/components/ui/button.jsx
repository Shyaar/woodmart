import { useState } from "react";

const Button = ({ color, text, buyId,handleAdd, handleMinus, handlePlus }) => {

    
    return (
        <>
            <button style={{ backgroundColor: color }} onClick={handleAdd} className="flex items-center w-full text-nowrap text-left text-white font-medium px-2">
                {/* <div className="mr-3">
                    <span className="bg-blue-500/25 flex gap-3 py-1 px-2">
                        <span onClick={handleMinus}>-</span>
                        <span className="" id={(`buyId-${toString(buyId)}`)}>0</span>
                        <span onClick={handlePlus}>+</span>
                    </span>
                </div> */}
                {text}
            </button>
        </>
    );
}

export default Button;
