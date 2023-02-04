import React from "react";
import Navbar from "../navbar/Navbar";

import menu from "../../configs/menu.json";

interface Props {
    children: React.ReactNode
}

const AppContainer = ({ children }: Props): JSX.Element => {
    return (
        <div className="min-h-screen w-full flex flex-col items-stretch bg-primary-white">
            <div className="mb-5 px-2 md:px-16">
                <Navbar menu={menu}/>
            </div>
            <div className="border-t-2 w-full border-primary-brown border-solid">
                <div className="py-0 px-16 w-full">
                    <div className="border-pattern"></div>
                </div>
            </div>

            <div className="mt-0 px-2 md:px-16 grow flex flex-col max-w-full max-h-[80%]">
                {children}
            </div>

            <div className="border-t-2 w-full mt-5 border-primary-brown border-solid">
                <div className="py-0 px-16 w-full">
                    <div className="border-pattern"></div>
                </div>
            </div>
        </div>
    );
} 

export default AppContainer;