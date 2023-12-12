/**
 * @author Tyler Marois
 */
import React from "react";
import { ParagraphHeader } from "../components/paragraphheader";
import shortWinters from "../../img/Next30_ShortWinters.png";
import longWinters from "../../img/Next30_longWinters.png"

export const Results = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center pb-10" id="results">
            <h2 className="text-5xl text-brown-300 font-montserrat font-semibold text-center mt-20 w-full">Results</h2>
            <p className="w-[60ch] text-black font-montserrat mt-10 text-justify text-lg max-md:w-full max-md:px-10">
                After I finished fitting my model to the real world data, I wanted to start answering the questions I started with.
                First I wanted to see how long the moose would last given this current trajectory. With this current setup I found that 
                the moose population would reach 0 in only 30 years! Knowing this I wondered how having longer winters would affect the moose 
                population. I found that just having longer winters not only saved the moose but their population actually grew over the next 30 years.
            </p>

            <div className="flex justify-between items-center w-[80%] mt-20 max-md:flex-col">
                <div className="flex flex-col justify-center items-start">
                    <ParagraphHeader text="Shorter Winters"/>
                    <p className="w-[45ch] text-black font-montserrat my-3">
                        Shorter winters in my model are winters that last for 3 months, during these months the tick population dies off.
                        This die off allows the moose time to repopulate and give them a chance to increase their population. Although, 
                        as we can see from the graph, 3 months simply isn't enough time for the moose to catch back up. We see the 
                        moose population decline to 0 and the tick population goes up and down but overall is steadily increasing.
                    </p>
                </div>
                <img className="w-[500px] rounded-md border-2 border-brown-300" src={shortWinters} alt="Graph showing moose and tick populations over 30 years" />
            </div>

            <div className="flex justify-between items-center w-[80%] mt-20 max-md:flex-col">
                <div className="flex flex-col justify-center items-start">
                    <ParagraphHeader text="Longer Winters"/>
                    <p className="w-[45ch] text-black font-montserrat my-3">
                        Longer winters on the other hand are winters that last 4 months, meaning ticks die off for a lot longer further decreasing 
                        thier population. This gives the moose the advantage and time they need in order to actually repopulate. As we see in this 
                        graph now the moose population has actually increased, after a brief dip while the tick population was still very high.
                    </p>
                </div>
                <img className="w-[500px] rounded-md border-2 border-brown-300" src={longWinters} alt="Graph showing moose and tick populations over 30 years" />
            </div>
        </div>
    )
}