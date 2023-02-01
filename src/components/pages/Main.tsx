import React from "react";
import BoxScroll from "../boxes/BoxScroll";

export default function Main(){
    return (
        <>
            <div className="mb-10 mt-0">
                <h1 className="drop-shadow-title">National Pokedex</h1>
                <small className="drop-shadow-none">v.0.0.1</small>
            </div>
            <div className="flex flex-row space-x-16 grow pb-16 pr-2 md:pr-0">
                <div className="content block pl-12 min-w-full md:min-w-fit md:basis-1/4 overflow-y-scroll overflow-x-clip">
                    <BoxScroll>
                        smkadkasmdsakdakamds
                    </BoxScroll>
                </div>
                <div className="hidden md:block md:basis-3/4 bg-black">
                    adssa
                </div>
            </div>        
        </>
        
    )
}