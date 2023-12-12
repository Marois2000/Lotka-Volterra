/**
 * @author Tyler Marois
 */
import React from "react";
import { ParagraphHeader } from "../components/paragraphheader";
import realData from "../../img/realdata.png";
import mydata from "../../img/1994-2016.png";

export const DataFit = () => {
    return(
        <div className="w-full flex flex-col justify-center items-center bg-neutral-200 pb-20" id="datafit">
            <h2 className="text-5xl text-brown-300 font-montserrat font-semibold text-center m-20">Data Fitting</h2>
            <div className="w-[90%] flex justify-center items-start gap-20 max-md:gap-5">
                <div className="flex flex-col justify-center">
                    <ParagraphHeader text="Real World Data"/>
                    <img className="w-[400px] aspect-square rounded-md border-2 border-brown-300" src={realData} alt="Real world data showing moose population decline" />
                </div>
                <div className="flex flex-col justify-between items-stretch">
                    <ParagraphHeader text="My Model"/>
                    <img className="w-[400px] aspect-square rounded-md border-2 border-brown-300" src={mydata} alt="Real world data showing moose population decline" />
                </div>
            </div>
            <p className="w-[60ch] text-black font-montserrat mt-10 text-justify text-lg max-md:w-full max-md:px-10 max-md:text-center">
                As we can see in the real world data, the moose population went from approximately 7500 to about 3500. Now, the real world data
                doesn't have such an exact regression as my data, this is do to many other factors that my model is not looking at. I fit my data
                based off of the starting moose population and the ending population. I started with paramters that made sense to me, then I modified
                them until my data fit the real data. (An explanation of my parameters can be seen below).
            </p>

            <div className="w-[90%] flex justify-center items-start gap-20 mt-20 max-md:flex-col">
                <div className="flex flex-col justify-center gap-5 w-full items-center">
                    <ParagraphHeader text="Parameter Explanation"/>
                    <p className="w-[50ch] text-black font-montserrat text-left max-md:text-center max-md:w-full max-md:px-20">
                        At a close glance these numbers seem completely random, and in a sense they are, but these values accurately recreated the real world data. <br /><br />
                        The ticks have a higher growth rate than the moose becuase ticks reproduce much faster. <br /><br />
                        The alpha values seem very small for moose, but this is explained by the vast disproportion between the moose and tick populations. <br /><br />
                        The carrying capacity for moose is based off real world data, and for ticks I took a high estimate of the amount of ticks per square mile and expanded that number to the area of NH.
                    </p>
                </div>

                <div className="flex flex-col justify-center gap-5 items-center w-full ">
                    <ParagraphHeader text="Parameter Values"/>
                    <table class="w-full text-sm text-left rtl:text-right text-neutral-300 font-montserrat rounded-md overflow-hidden max-md:w-[50%]">
                        <thead class="text-xs text-white uppercase bg-green-300">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Moose
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Ticks
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b bg-brown-100">
                                <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap">
                                    Intrinsic Growth (R)
                                </th>
                                <td class="px-6 py-4 font-medium text-white whitespace-nowrap">
                                    0.001
                                </td>
                                <td class="px-6 py-4 font-medium text-white whitespace-nowrap">
                                    0.5
                                </td>
                            </tr>

                            <tr class="border-b bg-brown-100">
                                <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap">
                                    Alpha (&alpha;)
                                </th>
                                <td class="px-6 py-4 font-medium text-white whitespace-nowrap">
                                    0.000027
                                </td>
                                <td class="px-6 py-4 font-medium text-white whitespace-nowrap">
                                    15
                                </td>
                            </tr>

                            <tr class=" bg-brown-100">
                                <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap">
                                    Carrying Capacity (K)
                                </th>
                                <td class="px-6 py-4 font-medium text-white whitespace-nowrap">
                                    10,000
                                </td>
                                <td class="px-6 py-4 font-medium text-white whitespace-nowrap">
                                    9,349,440,000
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>
    )
}