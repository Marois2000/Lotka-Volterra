/**
 * @author Tyler Marois
 */
import React from "react";

export const Introduction = () => {
    return (
        <>
        <h1 className="text-5xl text-brown-300 font-montserrat font-semibold text-center m-10">Introduction</h1>
        <div className="flex justify-around items-start w-full" title="introduction">

            <div className="flex justify-center items-center flex-col w-[33%]">
                <h2 className="text-xl text-green-300 text-center mb-5 font-montserrat font-semibold">What Does this Answer?</h2>
                <div className="w-[30ch] text-justify gap-2 flex flex-col">
                    <h3 className="text-md text-green-300 font-montserrat">This simulation answers the question of how long can our moose population survive on this current trajectory?</h3>
                    <h3 className="text-md text-green-300 font-montserrat">We will take a look at just how much the winter tick population affects the moose and what needs to change to save the moose.</h3>
                </div>
            </div>

            <div className="flex justify-center items-center flex-col w-[33%]">
                <h2 className="text-xl text-green-300 text-center mb-5 font-montserrat font-semibold">How Will I Do This?</h2>
                <div className="w-[30ch] text-justify gap-2 flex flex-col">
                    <h3 className="text-md text-green-300 font-montserrat">I have created a model that weighs the tick population versus the moose population, i.e. more ticks means less moose.</h3>
                    <h3 className="text-md text-green-300 font-montserrat">The driving factor of the tick population is the winter months, shorter winters means less ticks die off, and vice versa.</h3>
                    <h3 className="text-md text-green-300 font-montserrat">After Data fitting my paramaters I then looked at flipping between long and short winters.</h3>
                    <h3 className="text-md text-green-300 font-montserrat">Keep Scrolling to see these shocking results.</h3>
                </div>
            </div>

            <div className="flex justify-center items-center flex-col w-[33%]">
                <h2 className="text-xl text-green-300 text-center mb-5 font-montserrat font-semibold">Why I Choose This?</h2>
                <div className="w-[30ch] text-justify gap-2 flex flex-col">
                    <h3 className="text-md text-green-300 font-montserrat">I wanted to connect my love of programming with something that's relevant to my home state of New Hampshire.</h3>
                    <h3 className="text-md text-green-300 font-montserrat">The moose population is decreasing and it was interesting to create a model that represents this decrease based off of a major factor</h3>
                </div>
            </div>
            </div>
        </>
        
    )
}