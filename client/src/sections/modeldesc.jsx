/**
 * @author Tyler Marois
 */
import React from "react";
import { ParagraphHeader } from "../components/paragraphheader";
import competitionDesc from "../../img/comp_definition.png";
import equation from "../../img/Equation.jpeg";
import code from "../../img/Code.png";
import thought from "../../img/Critical-Thinking.png";

export const ModelDesc = () => {
    return (
        <>
            <div className="w-full flex justify-center">
                <h1 className="text-5xl text-brown-300 font-montserrat font-semibold text-center m-20 max-md:text-4xl w-full">Model Description</h1>

            </div>
            <div className="flex justify-center items-center flex-col gap-20 w-[70%] mb-20" id="modeldescription">

                <div className="flex justify-between items-center w-full mx-5 max-md:flex-col max-md:justify-center max-md:items-center">
                    <div className="flex justify-between items-start flex-col max-md:justify-center max-md:items-center">
                        <ParagraphHeader text="Lotka-Volterra Competition Model" />
                        <p className="w-[35ch] text-black font-montserrat mt-3 max-md:text-center">
                            This model is a look into how competition affects the abudance of two competing species. <br /><br />
                            The abundance of one species directly affects the abundance of the other.<br /><br />
                            In our case we will be looking at how the tick population affects the moose population.
                        </p>
                    </div>
                    <img className="h-[350px] rounded-md border-2 border-brown-300 max-md:mt-5" src={competitionDesc} alt="Description of Species Competition" />
                </div>

                <div className="flex justify-between items-center w-full mx-5 max-md:flex-col-reverse max-md:justify-center max-md:items-center">
                    <img className="w-[500px] rounded-md border-2 border-brown-300 max-md:mt-5" src={equation} alt="Description of Species Competition" />

                    <div className="flex justify-between items-end flex-col max-md:justify-center max-md:items-center">
                        <ParagraphHeader text="How This Model Works" />
                        <p className="w-[35ch] text-black font-montserrat mt-3 text-right max-md:text-center">
                            When looking at two species we say their population grows exponentially, but each species counts toward the other species total population.<br /><br />
                            Each species affects the others population differently - this value is the species &alpha; <br /><br />
                            We can solve this using the differential equation shown to the left.
                        </p>
                    </div>
                </div>
                
                <div className="flex justify-between items-center w-full mx-5 max-md:flex-col max-md:justify-center max-md:items-center">
                    <div className="flex justify-between items-start flex-col max-md:justify-center max-md:items-center">
                        <ParagraphHeader text="How I Implemented This" />
                        <p className="w-[35ch] text-black font-montserrat mt-3 max-md:text-center">
                            I created a C# script that uses Euler's method to solve the Differential Equations. <br /><br />
                            I added onto these equations to say that if it is a winter month, then the ticks will start to die off and moose will repopulate.<br /><br />
                            Once I had this function in place, I tweaked my paramaters to fit data obtained from 1994-2016 on mooose populations.
                            
                        </p>
                    </div>
                    <img className="w-[500px] rounded-md border-2 border-brown-300 max-md:mt-5" src={code} alt="Description of Species Competition" />
                </div>

                <div className="flex justify-between items-center w-full mx-5 max-md:flex-col-reverse max-md:justify-center max-md:items-center">
                    <img className="w-[350px] rounded-md border-2 border-brown-300 max-md:mt-5" src={thought} alt="Description of Species Competition" />

                    <div className="flex justify-between items-end flex-col max-md:justify-center max-md:items-center">
                        <ParagraphHeader text="Why This Model?" />
                        <p className="w-[35ch] text-black font-montserrat mt-3 text-right max-md:text-center">
                            The competition model can be used for species that compete for a specific resource. <br /><br />
                            But it can also be adapted to understand how species affect eachother spatially. <br /><br />
                            This is our use case for our adaptation of this model.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}