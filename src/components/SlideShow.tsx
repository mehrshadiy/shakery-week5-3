// @flow
import * as React from 'react';
import {useEffect, useState} from "react";

export const SlideShow = () => {


    let openNavStyle = "absolute top-0 left-0 w-full backdrop-brightness-50 lg:static lg:backdrop-brightness-100"
    let closeNavStyle = "hidden "
    const [navState, setNavState] = useState(closeNavStyle)

    const openNav = () => {
      setNavState(() => openNavStyle)
    }
    const closeNav = () => {
      setNavState(()=> closeNavStyle)
    }

    useEffect(()=>{

        const widthChecker = () => {
            if (window.innerWidth >= 1024){
                openNav()
            }
        }
        widthChecker()

        window.addEventListener("resize",()=>{
            closeNav()
            widthChecker()
        })
    },[])


    return (
        <>
            <header className={"bg-gray-700 text-white px-4 py-3 relative"}>
                <button className={"border-2 border-white p-2 lg:hidden"}
                onClick={openNav}>
                    menu
                </button>
                <nav className={navState}
                onClick={closeNav}>
                    <ul className={"bg-blue-400 p-3 rounded-xl h-screen flex flex-col gap-y-4 text-xl overflow-y-scroll sm:w-10/12 lg:bg-transparent lg:w-full lg:h-fit lg:flex-row lg:justify-center lg:gap-x-3"}
                    onClick={(event)=>event.stopPropagation()}>
                        <li className={"lg:hidden"}>
                            <button className={"ml-5 mb-5 bg-gray-700 border-2 border-white p-2 rounded-xl"}
                            onClick={closeNav}>
                                close
                            </button>
                        </li>
                        <li>
                            home
                        </li>
                        <li>
                            services
                        </li>
                        <li>
                            about us
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};