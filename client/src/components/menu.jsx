/**
 * @author Tyler Marois
 */
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, animateScroll as scroll } from 'react-scroll';


export const Menu = () => {
    const hidden = "w-0 h-0  bg-brown-200 fixed top-0 right-0 z-20 duration-500 justify-center items-center flex";
    const shown = "w-full h-full bg-brown-200 fixed top-0 right-0 z-20 duration-500 justify-center items-center flex";
    
    const linkStlye = "text-2xl text-white font-montserrat font-semibold";

    const showLinks = "w-[90%] h-[90%] bg-brown-100 justify-start items-start flex flex-col rounded-lg";
    const hideLinks = "w-[90%] h-[90%] bg-brown-100 justify-start items-start flex flex-co rounded-lg hidden";

    const [menuStyle, setMenuStyle] = useState(hidden);
    const [linksStyle, setLinksStyle] = useState(hideLinks);

    const toggleMenu = () => {
        if(menuStyle.includes("w-0")) {
            setLinksStyle(showLinks);
            setMenuStyle(shown);
        } else {
            setLinksStyle(hideLinks);
            setMenuStyle(hidden);
        }
    }
    

    return (
        <>
            <button onClick={toggleMenu}>
                <FaBars className="text-white text-2xl" />
            </button>
            <div className={menuStyle}>
                <div className={linksStyle}>
                    <div className="justify-end items-center flex w-full">
                        <button onClick={toggleMenu}>
                            <FaTimes className="text-white text-4xl" />
                        </button>
                    </div>

                    <div className="w-full h-full flex flex-col justify-evenly items-center">
                        <button>
                            <Link 
                                onClick={toggleMenu}
                                className={linkStlye}
                                activeClass="active"
                                to="hero" 
                                spy={true} 
                                smooth={true} 
                                offset={0} 
                                duration={500} 
                                
                            >Home</Link>
                        </button>

                        <button>
                            <Link 
                                onClick={toggleMenu}
                                className={linkStlye}
                                to="introduction" 
                                spy={true} 
                                smooth={true} 
                                offset={-300} 
                                duration={500} 
                            >Introduction</Link>
                        </button>

                        <button>
                            <Link 
                                onClick={toggleMenu}
                                className={linkStlye}
                                to="modeldescription" 
                                spy={true} 
                                smooth={true} 
                                offset={-250} 
                                duration={500} 
                            >Description</Link>
                        </button>

                        <button>
                            <Link 
                                onClick={toggleMenu}
                                className={linkStlye}
                                to="datafit" 
                                spy={true} 
                                smooth={true} 
                                offset={-50} 
                                duration={500} 
                            >Data Fitting</Link>
                        </button>

                        <button>
                            <Link 
                                onClick={toggleMenu}
                                className={linkStlye}
                                to="results" 
                                spy={true} 
                                smooth={true} 
                                offset={0} 
                                duration={500} 
                            >Results</Link>
                        </button>

                        <button>
                            <Link 
                                onClick={toggleMenu}
                                className={linkStlye}
                                to="conclusion" 
                                spy={true} 
                                smooth={true} 
                                offset={-50} 
                                duration={500} 
                            >Conclusion</Link>
                        </button>

                        <button>
                            <Link 
                                onClick={toggleMenu}
                                className={linkStlye}
                                to="simulation" 
                                spy={true} 
                                smooth={true} 
                                offset={-50} 
                                duration={500} 
                            >Download</Link>
                        </button>

                        <button>
                            <Link 
                                onClick={toggleMenu}
                                className={linkStlye}
                                to="references" 
                                spy={true} 
                                smooth={true} 
                                offset={0} 
                                duration={500} 
                            >References</Link>
                        </button>

                        <h1 className="font-montserrat text-2xl text-white">Created by: Tyler Marois</h1>
                    </div>

                    
                </div>
            </div>
        </>
    );
}