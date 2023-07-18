import { Card } from "@tremor/react";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/outline";

import heroBackground from "../assets/SAPVECTORLOGO-COLOR.svg";
import paperBag from "../assets/paper-bag.svg";
import newsPaper from "../assets/newspaper.svg";
import milkCarton from "../assets/milk-carton.svg";
import cardboardBox from "../assets/cardboard-box.svg";
import brokenGlass from "../assets/broken-glass.svg";
import plantScraps from "../assets/plant-scraps.svg";
import lettuce from "../assets/lettuce.svg";
import bones from "../assets/bones.svg";
import bananaPeel from "../assets/banana-peel.svg";
import appleCore from "../assets/apple-core.svg";
import takeoutContainer from "../assets/styrofoam-container.svg";
import spoonFork from "../assets/fork-and-spoon.svg";
import chipBag from "../assets/food-wrappers.svg";
import foodWrapper from "../assets/food-wrappers.svg";
import blueMask from "../assets/face-mask.svg";
import waterBottle from "../assets/plastic-water-bottle.svg";
import redsodaCan from "../assets/red-soda-can.svg";
import tinCan from "../assets/orange-tin-can.svg";
import glassBottle from "../assets/glass-water-bottle.svg";
import greensodaCan from "../assets/tall-green-soda-can.svg";

import data from '../data/monthlyData2023.json';

function Banner({ displayMonth }) {

	const monthData = data.YEAR2023.find((item) => item.month === displayMonth);

	const cascadesRecovery = monthData.rigidsRefundableAndNon + monthData.confidentialPaper;

	console.log(cascadesRecovery);


    return (
        <div className="bg-bgmain py-4 flex justify-around border-b-[60px] border-textmain">
            <div className="flex flex-col">
                <div className="absolute top-4 right-0 left-[-5px] bottom-0">
                    <img
                        src={heroBackground}
                        className="w-[550px] h-[550px] z-0 opacity-10"
                    />
                </div>
            </div>

            <div classname="flex flex-row">
                <div className="flex flex-row my-4 gap-x-6">
                    {/* Hero Card Cascade Recovery */}
                    <Card className="w-[255px] flex flex-col items-center border-cascadeBorder border-[5px] drop-shadow-xl">
                        <h1 className="text-textmain font-bold">
                            Cascade Recovery
                        </h1>
                        <div className="flex justify-center items-center">
                            <img
                                src={paperBag}
                                className="my-3 w-12 h-12"
                                title="Paper Bag"
                            />
                            <img
                                src={newsPaper}
                                className="my-3 w-12 h-12"
                                title="News Paper"
                            />
                            <img
                                src={milkCarton}
                                className="my-3 w-12 h-12"
                                title="Milk Carton"
                            />
                            <img
                                src={cardboardBox}
                                className="my-3 w-12 h-12"
                                title="Cardboard Box"
                            />
                            <img
                                src={brokenGlass}
                                className="my-3 w-12 h-12"
                                title="Broken Glass"
                            />
                        </div>
                        <div className="w-32 h-12 rounded-full bg-pillBgGreen bg-opacity-[40%] text-center flex flex-row items-center justify-center gap-x-2 drop-shadow-2xl">
                            <ArrowUpIcon className="text-green-900 stroke-[3px] w-6 h-6" />
                            <p className="font-bold text-lg text-green-900">
                                45%
                            </p>
                        </div>
                    </Card>

                    {/* Hero Card Eco Action */}
                    <Card className="w-[255px] flex flex-col items-center border-ecoBorder border-[5px] drop-shadow-xl">
                        <h1 className="text-textmain font-bold">Eco Action</h1>
                        <div className="flex justify-center items-center">
                            <img
                                src={plantScraps}
                                className="my-3 w-12 h-12"
                                title="Plant Scraps"
                            />
                            <img
                                src={lettuce}
                                className="my-3 w-12 h-12"
                                title="Lettuce"
                            />
                            <img
                                src={bones}
                                className="my-3 w-12 h-12"
                                title="Bones"
                            />
                            <img
                                src={bananaPeel}
                                className="my-3 w-12 h-12"
                                title="Banana Peel"
                            />
                            <img
                                src={appleCore}
                                className="my-3 w-12 h-12"
                                title="Apple Core"
                            />
                        </div>
                        <div className="w-32 h-12 rounded-full bg-pillBgGreen bg-opacity-[40%] text-center flex flex-row items-center justify-center gap-x-2 drop-shadow-2xl">
                            <ArrowUpIcon className="text-green-900 stroke-[3px] w-6 h-6" />
                            <p className="font-bold text-lg text-green-900">
                                45%
                            </p>
                        </div>
                    </Card>
                </div>

                <div className="flex flex-row my-4 gap-x-6">
                    {/* Hero Card Waste Control Services */}
                    <Card className="w-[255px] flex flex-col items-center border-wasteBorder border-[5px] drop-shadow-xl">
                        <h1 className="text-textmain font-bold">
                            Waste Control Services
                        </h1>
                        <div className="flex justify-center items-center">
                            <img
                                src={takeoutContainer}
                                className="my-3 w-12 h-12"
                                title="Takeout Container"
                            />
                            <img
                                src={spoonFork}
                                className="my-3 w-12 h-12"
                                title="Spoon and Fork"
                            />
                            <img
                                src={chipBag}
                                className="my-3 w-12 h-12"
                                title="Chip Bag"
                            />
                            <img
                                src={foodWrapper}
                                className="my-3 w-12 h-12"
                                title="Food Wrapper"
                            />
                            <img
                                src={blueMask}
                                className="my-3 w-12 h-12"
                                title="Medical Mask"
                            />
                        </div>
                        <div className="w-32 h-12 rounded-full bg-pillBgRed bg-opacity-[40%] text-center flex flex-row items-center justify-center gap-x-2 drop-shadow-2xl">
                            <ArrowDownIcon className="text-red-900 stroke-[3px] w-6 h-6" />
                            <p className="font-bold text-lg text-red-900">
                                45%
                            </p>
                        </div>
                    </Card>

                    {/* Hero Card refundables */}
                    <Card className="w-[255px] flex flex-col items-center border-refundBorder border-[5px] drop-shadow-xl">
                        <h1 className="text-textmain font-bold">Refundables</h1>
                        <div className="flex justify-center items-center">
                            <img
                                src={waterBottle}
                                className="my-3 w-12 h-12"
                                title="Water Bottle"
                            />
                            <img
                                src={redsodaCan}
                                className="my-3 w-12 h-12"
                                title="Red Soda Can"
                            />
                            <img
                                src={tinCan}
                                className="my-3 w-12 h-12"
                                title="Tin Can"
                            />
                            <img
                                src={glassBottle}
                                className="my-3 w-12 h-12"
                                title="Glass Bottle"
                            />
                            <img
                                src={greensodaCan}
                                className="my-3 w-12 h-12"
                                title="Green Soda Can"
                            />
                        </div>
                        <div className="w-32 h-12 rounded-full bg-pillBgGreen bg-opacity-[40%] text-center flex flex-row items-center justify-center gap-x-2 drop-shadow-2xl">
                            <ArrowUpIcon className="text-green-900 stroke-[3px] w-6 h-6" />
                            <p className="font-bold text-lg text-green-900">
                                45%
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Banner;
