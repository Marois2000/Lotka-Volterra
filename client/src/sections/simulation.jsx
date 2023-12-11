import React from "react";
import { ParagraphHeader } from "../components/paragraphheader";

export const Simulation = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center pb-10" id="simulation">
            <h2 className="text-5xl text-brown-300 font-montserrat font-semibold text-center my-10">Simulation</h2>

            <div className="flex justify-center items-center w-full gap-20">
                    <div className="flex justify-between items-start flex-col ">
                        <ParagraphHeader text="Live Simulation" />
                        <p className="w-[35ch] text-black font-montserrat mt-3">
                            If you would like to try out the simulation for yourself on your own PC simply download the program and run the app in the file.
                        </p>
                    </div>
                    <button className="bg-green-200 border-2 border-green-300 text-lg text-white rounded-md px-2 py-1 hover:bg-green-100 z-10 duration-300">Download</button>
                </div>
        </div>
    )
}