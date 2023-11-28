/**
 * @author Tyler Marois
 */
import React from "react";
import { ParagraphHeader } from "../components/paragraphheader";
import competitionDesc from "../../img/comp_definition.png";
import equation from "../../img/Equation.jpeg";

export const ModelDesc = () => {
    return (
        <>
            <h1 className="text-5xl text-brown-300 font-montserrat font-semibold text-center m-20">Model Description</h1>
            <div className="flex justify-center items-start flex-col gap-10">

                <div className="flex justify-evenly items-center w-full mx-5">
                    <div className="flex justify-between items-start flex-col ">
                        <ParagraphHeader text="Lotka-Volterra Competition Model" />
                        <p className="w-[35ch] text-green-300 font-montserrat mt-3">
                            This model is a look into how competition affects the abudance of two competing species. <br /><br />
                            The abundance of one species directly affects the abundance of the other.<br /><br />
                            In our case we will be looking at how the tick population affects the moose population.
                        </p>
                    </div>
                    <img className="h-[350px] rounded-md border-2 border-brown-300" src={competitionDesc} alt="Description of Species Competition" />
                </div>

                <div className="flex justify-evenly items-center w-full mx-5">
                    <img className="w-[400px] rounded-md border-2 border-brown-300" src={equation} alt="Description of Species Competition" />

                    <div className="flex justify-between items-end flex-col ">
                        <ParagraphHeader text="How This Model Works" />
                        <p className="w-[35ch] text-green-300 font-montserrat mt-3 text-right">
                            When looking at two species we say their population grows exponentially, but each species counts toward the other species total population.<br /><br />
                            Each species affects the others population differently - this value is the species &alpha; <br /><br />
                            We can solve this using the differential equation shown to the left.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}