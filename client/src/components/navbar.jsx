/**
 * @author Tyler Marois
 */
import React from "react";
import { Link, animateScroll as scroll } from 'react-scroll';

export const Navbar = () => {
    const linkStlye = "text-xl text-green-300 font-montserrat";

    return (
        <div className="fixed justify-evenly items-center bg-brown-100 w-full top-0 gap-2 flex py-5">
            <button>
                <Link 
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
                    className={linkStlye}
                    to="references" 
                    spy={true} 
                    smooth={true} 
                    offset={0} 
                    duration={500} 
                >References</Link>
            </button>
            
        </div>
    )
}