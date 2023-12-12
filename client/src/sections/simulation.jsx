import React from "react";
import { ParagraphHeader } from "../components/paragraphheader";
import video from "../../img/MooseSimDemo.mp4";

export const Simulation = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center pb-10 " id="simulation">
            <h2 className="text-5xl text-brown-300 font-montserrat font-semibold text-center my-10">Simulation</h2>

            <div className="flex justify-center items-center w-full gap-20 max-md:hidden">
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
                        <li className="text-black font-montserrat">Navigate to your downloads location and double click the download to unzip it</li>
                        <li className="text-black font-montserrat">Open up Terminal and type in <br /> <span className="bg-neutral-100 p-1">chmod -R a+xr "Path/To/Your/MacBuild.app"</span> <br />The path should be Downloads/MacBuild.</li>
                        <li className="text-black font-montserrat">Double Click on MacBuild now, it shouldn't run for security reasons.</li>
                        <li className="text-black font-montserrat">Go to settings and then Privacy and Security</li>
                        <li className="text-black font-montserrat">Scroll down to secuirty it should say "MacBuild" was blocked</li>
                        <li className="text-black font-montserrat">Press "open anyway"</li>
                    </ol>
                </div>

                <div className="flex justify-center items-center gap-5 flex-col">

                    <video width="400" controls autoPlay className="border-2 border-brown-200 rounded-md">
                        <source src={video} type="video/mp4"  />
                        Your browser does not support the video tag.
                    </video>

                    <div className="flex justify-center items-center gap-5">
                        <button className="bg-green-200 border-2 border-green-300 text-lg text-white rounded-md px-2 py-1 hover:bg-green-100 z-10 duration-300"> 
                            <a href="https://drive.google.com/uc?export=download&id=1cJg-uYGeSUdTB68qm0PkQP0wGxKB9Qov" download="Simulation.zip">Windows Download</a>
                        </button>

                        <button className="bg-green-200 border-2 border-green-300 text-lg text-white rounded-md px-2 py-1 hover:bg-green-100 z-10 duration-300"> 
                            <a href="https://drive.google.com/uc?export=download&id=1t9Ld2HLdqwxtgU5X0fzR7S3nS9B9uGM1" download="MacBuild.app.zip">MacOS Download</a>
                        </button>
                    </div>
                    
                </div>
            </div>

            <div className="flex justify-center items-center md:hidden flex-col">
                <p className="w-full text-black font-montserrat m-3 text-center">
                    To try out the simulation head over to your nearest computer and download it there!
                </p>
                <video width="400" controls autoPlay className="border-2 border-brown-200 rounded-md">
                    <source src={video} type="video/mp4"  />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}