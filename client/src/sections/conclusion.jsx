/**
 * @author Tyler Marois
 */
import React from "react";

export const Conclusion = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center bg-neutral-200 pb-10" id="conclusion">
            <h2 className="text-5xl text-brown-300 font-montserrat font-semibold text-center mt-10">Conclusion</h2>
            <p className="w-[60ch] text-black font-montserrat mt-10 text-justify text-lg">
                From our findings we see that the moose population will die off in 30 years given our current trajectory. It is important 
                to understand that this model is <strong><u>only</u></strong> focusing on moose population in competetion with the winter tick population. There may be 
                many more factors that boost the moose populations that may lessen the affect the ticks have on the moose population. <br /><br />
                
                What this model does show us is how much of an affect ticks can have on the moose population when they are the only factor we are looking at.
                Researchers believe this is a key factor driving moose populations down in New Hampshire. So, this gives us a valuable insight into where the 
                moose population might be headed. <br /><br />

                Knowing what we do about climate change making winters shorter and shorter, this tells us that if we don't do something about that soon we may lose our moose for good.
                If we can bring New Hampshires winters back to their normal length we can keep the tick populations at bay and give our moose a fighting chance!
            </p>
        </div>
    )
}