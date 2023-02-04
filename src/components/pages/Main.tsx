import React from "react";
import BoxScroll from "../boxes/BoxScroll";
import ScrollList from "../scroll/ScrollList";

export default function Main(){
    return (
        <>
            <div className="min-w-full w-full mb-10 mt-0">
                <h1 className="drop-shadow-title">National Pokedex</h1>
                <small className="drop-shadow-none">v.0.0.1</small>
            </div>
            <div className="content min-w-full w-full w-max-full flex flex-row space-x-16 grow pr-2 md:pr-0 ">
                <div className="block pl-12 overflow-x-hidden max-w-full min-w-full md:max-w-lg md:min-w-[28%] drop-shadow-box">
                    <BoxScroll>
                        <ScrollList list={ [ {id: 1, displayName: 'Testeo'} ]} />
                    </BoxScroll>
                </div>
                <div className="hidden md:block w-full bg-black">
                    adssa
                </div>
            </div>        
        </>
        
    )
}