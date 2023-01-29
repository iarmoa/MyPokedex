import React from "react";

interface Props {
    children: React.ReactNode
}

const AppContainer = ({ children }: Props): JSX.Element => {
    return (
        <div className="background-pattern w-full min-h-screen">
            <div className="mt-4 border-t-2 w-full border-primary-brown border-solid">
                <div className="py-0 px-16 w-full">
                    <div className="border-pattern"></div>
                </div>
            </div>
            {children}
            <div className="mt-4 border-t-2 w-full border-primary-brown border-solid absolute inset-x-0 bottom-0">
                <div className="py-0 px-16 w-full">
                    <div className="border-pattern"></div>
                </div>
            </div>
        </div>
    );
} 

export default AppContainer;