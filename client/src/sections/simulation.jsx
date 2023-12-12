import React from "react";
import { ParagraphHeader } from "../components/paragraphheader";

export const Simulation = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center pb-10" id="simulation">
            <h2 className="text-5xl text-brown-300 font-montserrat font-semibold text-center my-10">Simulation</h2>

            <div className="flex justify-center items-center w-full gap-20">
                    <div className="flex justify-between items-start flex-col ">
                        <ParagraphHeader text="Live Simulation" />
                        <p className="w-[35ch] text-black font-montserrat m-3">
                            If you would like to try out the simulation for yourself on your own computer simply download the correct version and follow the instructions below.
                        </p>
                        <ParagraphHeader text="Windows:"/>
                        <ol className="w-[50ch] text-left list-decimal mb-3">
                            <li className="text-black font-montserrat">Navigate to your downloads location</li>
                            <li className="text-black font-montserrat">Unzip the simulation file</li>
                            <li className="text-black font-montserrat">Double click and run the file</li>
                        </ol>

                        <ParagraphHeader text="Mac:"/>
                        <ol className="w-[50ch] text-left list-decimal">
                            <li className="text-black font-montserrat">Navigate to your downloads location</li>
                        </ol>
                    </div>

                    <div className="flex justify-center items-center gap-5">
                        <button className="bg-green-200 border-2 border-green-300 text-lg text-white rounded-md px-2 py-1 hover:bg-green-100 z-10 duration-300"> 
                            <a href="../../builds/WindowsSimulation.zip" download="WindowsSimulation.zip">Windows Download</a>
                        </button>

                        <button className="bg-green-200 border-2 border-green-300 text-lg text-white rounded-md px-2 py-1 hover:bg-green-100 z-10 duration-300"> 
                            <a href="../../builds/MacSimulation.zip" download="MacSimulation.zip">MacOS Download</a>
                        </button>
                    </div>
                    
                </div>
        </div>
    )
}