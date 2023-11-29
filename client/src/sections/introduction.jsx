/**
 * @author Tyler Marois
 */
import React from "react";
import { ParagraphHeader } from "../components/paragraphheader";

export const Introduction = () => {
    return (
        <div className="w-full bg-neutral-200">
            <h1 className="text-5xl text-brown-300 font-montserrat font-semibold text-center mt-20 mb-10">Introduction</h1>
                <div className="flex justify-around items-start w-full mb-10" title="introduction">

                    <div className="flex justify-center items-center flex-col w-[33%] ">
                        <ParagraphHeader text="What Does this Answer?"/>
                        <div className="w-[30ch] text-justify gap-2 flex flex-col mt-5">
                            <h3 className="text-md text-green-300 font-montserrat">This simulation answers the question of how long can our moose population survive on this current trajectory?</h3>
                            <h3 className="text-md text-green-300 font-montserrat">We will take a look at just how much the winter tick population affects the moose and what needs to change to save the moose.</h3>
                        </div>
                    </div>

                    <div className="flex justify-center items-center flex-col w-[33%]">
                        <ParagraphHeader text="How Will I Do This?" />
                        <div className="w-[30ch] text-justify gap-2 flex flex-col mt-5">
                            <h3 className="text-md text-green-300 font-montserrat">I have created a model that weighs the tick population versus the moose population, i.e. more ticks means less moose.</h3>
                            <h3 className="text-md text-green-300 font-montserrat">The driving factor of the tick population is the winter months, shorter winters means less ticks die off, and vice versa.</h3>
                            <h3 className="text-md text-green-300 font-montserrat">After Data fitting my paramaters I then looked at flipping between long and short winters.</h3>
                            <h3 className="text-md text-green-300 font-montserrat">Keep Scrolling to see these shocking results.</h3>
                        </div>
                    </div>

                    <div className="flex justify-center items-center flex-col w-[33%]">
                        <ParagraphHeader text="Why I Chose This?" />
                        <div className="w-[30ch] text-justify gap-2 flex flex-col mt-5">
                            <h3 className="text-md text-green-300 font-montserrat">I wanted to connect my love of programming with something that's relevant to my home state of New Hampshire.</h3>
                            <h3 className="text-md text-green-300 font-montserrat">The moose population is decreasing and it was interesting to create a model that represents this decrease based off of a major factor</h3>
                        </div>
                    </div>
                </div>
        </div>
        
        
        
    )
}