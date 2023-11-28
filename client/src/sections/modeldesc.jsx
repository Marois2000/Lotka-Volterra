/**
 * @author Tyler Marois
 */
import React from "react";
import { ParagraphHeader } from "../components/paragraphheader";
import competitionDesc from "../../img/comp_definition.png";

export const ModelDesc = () => {
    return (
        <>
            <h1 className="text-5xl text-brown-300 font-montserrat font-semibold text-center m-20">Model Description</h1>
            <div className="flex justify-center items-start flex-col">
                <div className="flex justify-evenly items-center w-full mx-5">
                    <div className="flex justify-between items-start flex-col ">
                        <ParagraphHeader text="Lotka-Volterra Competition Model" />
                        <p className="w-[35ch] text-green-300 font-montserrat mt-3">
                            This model is a look into how competition affects the abudance of two competing species. <br />Where the abundance of one species directly affects the abundance of the other.
                        </p>
                    </div>
                    <img className="h-[350px] rounded-md border-2 border-brown-300" src={competitionDesc} alt="Description of Species Competition" />
                </div>
            </div>
        </>
    )
}