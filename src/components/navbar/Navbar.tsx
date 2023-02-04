import React from "react";
import NavbarItem from "./NavbarItem.Interface";
import ItemIterface from "./NavbarItem.Interface";
import Content from "../containers/Content";
import Pokeball from "../../svg/Pokeball";

interface Props{
    menu: Array<NavbarItem>
}

export default function Navbar({ menu } : Props): JSX.Element{
    return (
        <Content className="mt-4">
            <div className="w-full">
                <ul className="list-none md:flex md:flex-wrap md:space-x-16">
                    { menu.map((item: ItemIterface) => 
                        <li>
                            <a href="#" className="bg-primary-menu w-full md:w-56 py-3 px-3 uppercase flex flex-row h-12 mb-5 md:mb-0 items-center hover:bg-primary-brown hover:text-primary-white transition ease-in-out" key={item.id}>
                                <Pokeball width="1" height="1" className="mr-2 h-6" fill='#4F4F4F'/>
                                <span className="font-bold text-base tracking-[.25rem]">{item.displayName}</span>
                            </a>
                        </li> 
                    )}
                </ul>
            </div>
        </Content>
    )
}