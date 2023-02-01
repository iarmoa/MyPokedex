import React from "react";

interface Props{
    children: React.ReactNode,
    className?: string | ''
}

export default function BoxScroll({ children, className = '' }: Props){
    return (
        <div className={`min-h-full bg-secondary-white drop-shadow-box py-2 pl-0 ${className}`}>
            <div className="border-t-[2px] w-[90%] border-primary-shadow border-solid opacity-25 ml-4 order-first"></div>
                {children}
            <div className="border-t-[2px] w-[90%] border-primary-shadow border-solid opacity-25 ml-4 absolute bottom-2"></div>
        </div>
    )
}