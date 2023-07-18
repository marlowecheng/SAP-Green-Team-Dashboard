import { Card } from "@tremor/react";
import { ArrowUpIcon, ArrowDownIcon, MinusIcon } from "@heroicons/react/24/outline";

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
import { calcCascadeData, calcEcoData, calcLandfillData, calcRefundablesData } from '../utilities/calcDifferencePercent';

function Banner({ displayMonth }) {
	const monthData = data.YEAR2023.find((item) => item.month === displayMonth);
	const currMonthIndex = data.YEAR2023.findIndex((item) => item.month === displayMonth);
	const prevMonthIndex = currMonthIndex - 1;

	const compareCascadeData = calcCascadeData(monthData, data.YEAR2023[prevMonthIndex]);
	const compareEcoData = calcEcoData(monthData, data.YEAR2023[prevMonthIndex]);
	const compareLandfillData = calcLandfillData(monthData, data.YEAR2023[prevMonthIndex]);
	const compareRefundablesData = calcRefundablesData(monthData, data.YEAR2023[prevMonthIndex]);

	// // Get the array set for the month that is passed in
	// const monthData = data.YEAR2023.find((item) => item.month === displayMonth);

	// // Get the index of the current month's array set
	// const currMonthIndex = data.YEAR2023.findIndex((item) => item.month === displayMonth);

	// // Get the index of the previous month
	// const prevMonthIndex = currMonthIndex - 1;

	// // ======= Cascade Recovery Data ========
	// // Get current month's Cascade Recovery data
	// const currCascadeData = monthData.rigidsRefundableAndNon + monthData.mixedPaperFiber + monthData.confidentialPaper;

	// // Get previous month's Cascade Recovery data
	// let prevCascadeData = data.YEAR2023[prevMonthIndex].rigidsRefundableAndNon + data.YEAR2023[prevMonthIndex].mixedPaperFiber + data.YEAR2023[prevMonthIndex].confidentialPaper;

	// // Calculate the difference in percentage
	// const compareCascadeData = parseFloat(((currCascadeData - prevCascadeData) / currCascadeData) * 100).toFixed(1);

	// // ======= Eco Action Data ========
	// // Get current month's EcoAction data
	// const currEcoData = monthData.coffeeGrounds + monthData.compost;

	// // Get previous month's EcoAction data
	// let prevEcoData = data.YEAR2023[prevMonthIndex].coffeeGrounds + data.YEAR2023[prevMonthIndex].compost;

	// // Calculate the difference in percentage
	// const compareEcoData = parseFloat(((currEcoData - prevEcoData) / currEcoData) * 100).toFixed(1);

	// // ======= Waste Control Services Data ========
	// const currLandfillData = monthData.garbage;

	// let prevLandfillData = data.YEAR2023[prevMonthIndex].garbage;

	// const compareLandfillData = parseFloat(((currLandfillData - prevLandfillData) / currLandfillData) * 100).toFixed(1);

	// // ======= Refundables Data ========
	// const currRefundablesData = monthData.rigidsRefundableAndNon;

	// let prevRefundablesData = data.YEAR2023[prevMonthIndex].rigidsRefundableAndNon;

	// const compareRefundablesData = parseFloat(((currRefundablesData - prevRefundablesData) / currRefundablesData) * 100).toFixed(1);

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
						{compareCascadeData > 0 && (
							<div className="w-32 h-12 rounded-full bg-pillBgGreen bg-opacity-[40%] text-center flex flex-row items-center justify-center gap-x-2 drop-shadow-2xl">
                            <ArrowUpIcon className="text-green-900 stroke-[3px] w-6 h-6" />
                            <p className="font-bold text-lg text-green-900">
								{Math.abs(compareCascadeData)}%
                            </p>
                        </div>
						)}
						{compareCascadeData < 0 && (
							<div className="w-32 h-12 rounded-full bg-pillBgRed bg-opacity-[40%] text-center flex flex-row items-center justify-center gap-x-2 drop-shadow-2xl">
                            <ArrowDownIcon className="text-red-900 stroke-[3px] w-6 h-6" />
                            <p className="font-bold text-lg text-red-900">
                                {Math.abs(compareCascadeData)}%
                            </p>
                        </div>
						)}
						{compareCascadeData == 0 && (
							<div className="w-32 h-12 rounded-full bg-pillBgGrey bg-opacity-[40%] text-center flex flex-row items-center justify-center gap-x-2 drop-shadow-2xl">
                            <MinusIcon className="pillTextGrey stroke-[3px] w-6 h-6" />
                            <p className="font-bold text-lg pillTextGrey">
                                {Math.abs(compareCascadeData)}%
                            </p>
                        </div>
						)}
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
						{compareEcoData > 0 && (
							<div className="w-32 h-12 rounded-full bg-pillBgGreen bg-opacity-[40%] text-center flex flex-row items-center justify-center gap-x-2 drop-shadow-2xl">
                            <ArrowUpIcon className="text-green-900 stroke-[3px] w-6 h-6" />
                            <p className="font-bold text-lg text-green-900">
								{Math.abs(compareEcoData)}%
                            </p>
                        </div>
						)}
						{compareEcoData < 0 && (
							<div className="w-32 h-12 rounded-full bg-pillBgRed bg-opacity-[40%] text-center flex flex-row items-center justify-center gap-x-2 drop-shadow-2xl">
                            <ArrowDownIcon className="text-red-900 stroke-[3px] w-6 h-6" />
                            <p className="font-bold text-lg text-red-900">
                                {Math.abs(compareEcoData)}%
                            </p>
                        </div>
						)}
						{compareEcoData == 0 && (
							<div className="w-32 h-12 rounded-full bg-pillBgGrey bg-opacity-[40%] text-center flex flex-row items-center justify-center gap-x-2 drop-shadow-2xl">
                            <MinusIcon className="pillTextGrey stroke-[3px] w-6 h-6" />
                            <p className="font-bold text-lg pillTextGrey">
                                {Math.abs(compareEcoData)}%
                            </p>
                        </div>
						)}
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
                        {compareLandfillData > 0 && (
							<div className="w-32 h-12 rounded-full bg-pillBgGreen bg-opacity-[40%] text-center flex flex-row items-center justify-center gap-x-2 drop-shadow-2xl">
                            <ArrowUpIcon className="text-green-900 stroke-[3px] w-6 h-6" />
                            <p className="font-bold text-lg text-green-900">
								{Math.abs(compareLandfillData)}%
                            </p>
                        </div>
						)}
						{compareLandfillData < 0 && (
							<div className="w-32 h-12 rounded-full bg-pillBgRed bg-opacity-[40%] text-center flex flex-row items-center justify-center gap-x-2 drop-shadow-2xl">
                            <ArrowDownIcon className="text-red-900 stroke-[3px] w-6 h-6" />
                            <p className="font-bold text-lg text-red-900">
                                {Math.abs(compareLandfillData)}%
                            </p>
                        </div>
						)}
						{compareLandfillData == 0 && (
							<div className="w-32 h-12 rounded-full bg-pillBgGrey bg-opacity-[40%] text-center flex flex-row items-center justify-center gap-x-2 drop-shadow-2xl">
                            <MinusIcon className="pillTextGrey stroke-[3px] w-6 h-6" />
                            <p className="font-bold text-lg pillTextGrey">
                                {Math.abs(compareLandfillData)}%
                            </p>
                        </div>
						)}
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
                        {compareRefundablesData > 0 && (
							<div className="w-32 h-12 rounded-full bg-pillBgGreen bg-opacity-[40%] text-center flex flex-row items-center justify-center gap-x-2 drop-shadow-2xl">
                            <ArrowUpIcon className="text-green-900 stroke-[3px] w-6 h-6" />
                            <p className="font-bold text-lg text-green-900">
								{Math.abs(compareRefundablesData)}%
                            </p>
                        </div>
						)}
						{compareRefundablesData < 0 && (
							<div className="w-32 h-12 rounded-full bg-pillBgRed bg-opacity-[40%] text-center flex flex-row items-center justify-center gap-x-2 drop-shadow-2xl">
                            <ArrowDownIcon className="text-red-900 stroke-[3px] w-6 h-6" />
                            <p className="font-bold text-lg text-red-900">
                                {Math.abs(compareRefundablesData)}%
                            </p>
                        </div>
						)}
						{compareRefundablesData == 0 && (
							<div className="w-32 h-12 rounded-full bg-pillBgGrey bg-opacity-[40%] text-center flex flex-row items-center justify-center gap-x-2 drop-shadow-2xl">
                            <MinusIcon className="pillTextGrey stroke-[3px] w-6 h-6" />
                            <p className="font-bold text-lg pillTextGrey">
                                {Math.abs(compareRefundablesData)}%
                            </p>
                        </div>
						)}
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Banner;
