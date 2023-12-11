/**
 * @author Tyler Marois
 */
import React from "react";

export const References = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center bg-neutral-200 pb-10" id="references">
            <h2 className="text-5xl text-brown-300 font-montserrat font-semibold text-center mt-10">References</h2>
            <ol className="w-[100ch] text-left mt-10 list-decimal">
                <li className="text-green-300 font-montserrat mt-3">“CK12-Foundation.” CK12, <a href="flexbooks.ck12.org/cbook/ck-12-biology-flexbook-2.0/r135/section/6.14/primary/lesson/competition-bio/">flexbooks.ck12.org/cbook/ck-12-biology-flexbook-2.0/r135/section/6.14/primary/lesson/competition-bio/</a> . Accessed 1 Dec. 2023. </li>
                <li className="text-green-300 font-montserrat mt-3">Kusnetz, Nicholas. “Climate Change Is Killing New England’s Moose. Can Hunters Save Them?” Inside Climate News, 5 Dec. 2020, insideclimatenews.org/news/29052017/climate-change-ticks-killing-new-england-moose-hunters/. </li>
            </ol>
        </div>
    )
}