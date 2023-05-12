import React, { useState } from "react";

const Random = () => {

    const [gif , setGif] =useState('');

    const clickHandler =()=>{

    }

    return (
        <div className="w-1/2 h-[450px] bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">

            <h1 className="text-3xl underline uppercase font-bold">a Random GIF</h1>

            <img src={gif} alt="" width="450"/>

            <button onClick={clickHandler} 
                    className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg">
                GENERATE
            </button>
        </div>
    )
}

export default Random;