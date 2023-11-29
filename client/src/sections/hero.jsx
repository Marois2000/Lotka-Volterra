/**
 * @author Tyler Marois
 */
import React from "react";
import hero from "../../img/Hero.png"

export const Hero = () => {
    return (
        <div className="w-full h-[100vh] flex justify-around bg-center bg-cover flex-col" title="hero" >
            <div className="w-fit">
                <h1 className="text-7xl text-brown-300 font-semibold font-montserrat bg-neutral-300 m-5">Moose Population Simulation</h1>
            </div>

            <div className="w-full flex justify-between items-center mb-10">
                <div className="w-fit">
                    <div className="bg-neutral-300 m-5 gap-2 flex flex-col">
                        <h2 className="text-green-300 font-montserrat font-semibold text-xl max-w-[40ch] mx-2">This is a Mathematical simulation of moose populations in relation to winter tick populations.</h2>
                        <h2 className="text-green-300 font-montserrat text-lg max-w-[35ch] mx-2">It was created using a modified version of the Lotka-Volterra competetion model.</h2>
                        <h2 className="text-green-300 font-montserrat text-lg max-w-[35ch] mx-2">This model represents moose populations in New Hampshire</h2>
                        <h2 className="text-green-300 font-montserrat text-lg max-w-[35ch] mx-2">A 3D simulation of the model was built in Unity and Can be downloaded here.</h2>
                        
                        <div className="w-fit m-2">
                            <button className="bg-green-200 border-2 border-green-300 text-lg text-neutral-300 rounded-md px-2 py-1 hover:bg-green-100 z-10 duration-300">Download</button>
                        </div>
                    </div>
                </div>

                <img src={hero} alt="" className="w-[700px] m-5 rounded-md border-2 border-green-300" />
            </div>
           
        </div>
    )
}