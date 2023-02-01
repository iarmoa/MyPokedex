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
                        <li className="bg-primary-menu w-full md:w-56 py-3 px-3 uppercase flex flex-row h-12 mb-5 md:mb-0" key={item.id}>
                            <Pokeball width="2" height="2" className="mr-2"/>
                            <span className="font-bold tracking-[.1rem]">{item.displayName}</span>
                        </li> 
                    )}
                </ul>
            </div>
        </Content>
    )
}