/**
 * @author Tyler Marois
 */
import React from "react";
import hero from "../../img/Hero.png"

export const Hero = () => {
    return (
        <div className="w-full flex justify-around bg-center bg-cover flex-col pb-10" id="hero" >
            <div className="w-full mt-20 max-md:justify-center flex">
                <h1 className="text-7xl max-md:text-4xl text-brown-300 font-semibold font-montserrat bg-neutral-300 m-5 max-md:text-center">Moose Population Simulation</h1>
            </div>

            <div className="w-full flex justify-between items-center mb-10 max-md:flex-col-reverse">
                <div className="w-fit max-md:items-center max-md:justify-center flex">
                    <div className="bg-neutral-300 m-5 gap-2 flex flex-col max-md:justify-center max-md:items-center">
                        <h2 className="text-black font-montserrat font-semibold text-xl mx-2 max-w-[40ch] max-md:text-sm max-md:text-center">This is a Mathematical simulation of moose populations in relation to winter tick populations.</h2>
                        <h2 className="text-black font-montserrat text-lg max-w-[35ch] mx-2 max-md:text-sm max-md:text-center">It was created using a modified version of the Lotka-Volterra competetion model.</h2>
                        <h2 className="text-black font-montserrat text-lg max-w-[35ch] mx-2 max-md:text-sm max-md:text-center">This model represents moose populations in New Hampshire</h2>
                        <h2 className="text-black font-montserrat text-lg max-w-[35ch] mx-2 max-md:text-sm max-md:text-center">A 3D simulation of the model was built in Unity and Can be downloaded here.</h2>
                        
                        <div className="w-fit m-2 max-md:w-full max-md:justify-center flex">
                            <button className="bg-green-200 border-2 border-green-300 text-lg text-white rounded-md px-2 py-1 hover:bg-green-100 z-10 duration-300">Download</button>
                        </div>
                    </div>
                </div>

                <img src={hero} alt="" className="w-[700px] m-5 rounded-md border-2 border-green-300 max-md:w-[400px]" />
            </div>
           
        </div>
    )
}