import React, { useState } from "react";
import { Card, DonutChart } from "@tremor/react";

import coffeeGrounds from "../assets/coffee-grounds.png";

import data from "../data/monthlyData2023.json";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

function PieCharts({ displayMonth }) {
    // Change Display Data Based on the Month Selected
    // Initial state is the passed-in month prop - displayMonth
    // Whenever setSelectedMonth is run, it will update the selectedMonth variable
    const [selectedMonth, setSelectedMonth] = useState(displayMonth);

    // Handler for when the left chevron arrow is clicked
    const viewPrevMonth = () => {
        // Goes through the JSON and maps out the months in the order entered
        const monthList = data.YEAR2023.map((item) => item.month);

        // Using the list of months, indexOf returns the first instance of the selected month as an index
        const selectedMonthIndex = monthList.indexOf(selectedMonth);

        // If the current index is greater than the first index (january), then minus 1 (goes back a month)
        if (selectedMonthIndex > 0) {
            setSelectedMonth(monthList[selectedMonthIndex - 1]);
        }
    };

    // Handler for when the right chevron arrow is clicked
    const viewNextMonth = () => {
        const monthList = data.YEAR2023.map((item) => item.month);
        const selectedMonthIndex = monthList.indexOf(selectedMonth);

        // If the current index is lesser than the first index (january), then plus 1 (goes forward a month)
        if (selectedMonthIndex < monthList.length - 1) {
            setSelectedMonth(monthList[selectedMonthIndex + 1]);
        }
    };

    // Data Filtering
    // Gets the array of data based on month selected
    const filteredData = data.YEAR2023.find(
        (item) => item.month === selectedMonth
    );

    // Make the data readable for Tremor components
    const monthlyTotalWaste = [
        {
            name: "Organics",
            waste: filteredData.coffeeGrounds + filteredData.compost,
        },
        {
            name: "Waste Control Services",
            waste: filteredData.garbage,
        },
        {
            name: "Cascade Recovery",
            waste: filteredData.rigidsRefundableAndNon + filteredData.mixedPaperFiber + filteredData.confidentialPaper,
        },
    ];

    const cascadeBreakdown = [
        {
            name: "Mixed Paper",
            waste: filteredData.mixedPaperFiber,
        },
        {
            name: "Confidential Paper",
            waste: filteredData.confidentialPaper,
        },
        {
            name: "Refundables & Non-Refundables",
            waste: filteredData.rigidsRefundableAndNon,
        },
    ];

    const organicsBreakdown = [
        {
            name: "Coffee",
            waste: filteredData.coffeeGrounds,
        },
        {
            name: "Organics",
            waste: filteredData.compost,
        },
    ];


    function DataCheck() {
        if(filteredData.total === 0) {
            return (
                <div className="absolute self-start justify-center top-4 font-medium" >Data does not exist for {selectedMonth.charAt(0).toUpperCase() + selectedMonth.slice(1)} yet.</div>
            )
        }
    }

    return (
        <div>
            <div className="text-center">
                <div className="flex justify-center items-center bg-textmain p-2">
                    <div>
                        <ChevronLeftIcon
                            className="w-10 h-10 text-white"
                            strokeWidth={3}
                            onClick={viewPrevMonth}
                        />
                    </div>
                    <div>
                        <h1 className="text-3xl font-semibold text-white w-64">
                            {selectedMonth.toUpperCase()}{" "}
                            {new Date().getFullYear()}{" "}
                        </h1>
                    </div>
                    <div>
                        <ChevronRightIcon
                            className="w-10 h-10 text-white"
                            strokeWidth={3}
                            onClick={viewNextMonth}
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center bg-bgmain pt-12 relative">
                <DataCheck />
                <Card className="max-w-md m-2">
                    <div>
                        <h1 className="font-bold text-textmain text-center text-xl mb-4">
                            Monthly Total Waste
                        </h1>
                    </div>
                    <DonutChart
                        className="max-w-sm"
                        data={monthlyTotalWaste}
                        category="waste"
                        colors={["green", "stone", "sky"]}
                        variant="pie"
                    />
                    <div className="flex flex-wrap gap-x-2 mt-4 ml-10">
                        <div className="flex m-2 gap-x-2">
                            <p className="bg-blue-300 w-6 h-6 rounded-full"></p>
                            <h2 className="font-semibold">Cascade Recovery</h2>
                        </div>

                        <div className="flex m-2 gap-x-2">
                            <p className="bg-green w-6 h-6 rounded-full"></p>
                            <h2 className="font-semibold">Organics</h2>
                        </div>

                        <div className="flex m-2 gap-x-2">
                            <p className="bg-stone w-6 h-6 rounded-full"></p>
                            <h2 className="font-semibold">
                                Waste Control Services
                            </h2>
                        </div>
                    </div>
                </Card>

                {/* Cascade Recovery Breakdown Card */}
                <Card className="max-w-md m-2">
                    <div>
                        <h1 className="font-bold text-center text-textmain text-xl mb-4">
                            Cascade Recovery Breakdown
                        </h1>
                    </div>
                    <DonutChart
                        className="max-w-sm"
                        data={cascadeBreakdown}
                        category="waste"
                        colors={["yellow", "blue", "orange"]}
                        variant="pie"
                        // valueFormatter={valueFormatter}
                    />
                    <div className="flex flex-wrap gap-x-2 mt-4 ml-10">
                        <div className="flex m-2 gap-x-2">
                            <p className="bg-yellow w-6 h-6 rounded-full"></p>
                            <h2 className="font-semibold">Mixed Paper</h2>
                        </div>

                        <div className="flex m-2 gap-x-2">
                            <p className="bg-blue-600 w-6 h-6 rounded-full"></p>
                            <h2 className="font-semibold">Confidential Paper</h2>
                        </div>

                        <div className="flex m-2 gap-x-2">
                            <p className="bg-orange w-6 h-6 rounded-full"></p>
                            <h2 className="font-semibold">
                                Refundables & Non-Refundables
                            </h2>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Organics Vs Coffee Grounds Card */}
            <div className="bg-bgmain p-2 flex items-center justify-center pb-12">
                <div className="">
                    <Card className="flex gap-x-10 justify-center items-center">
                        <div>
                            <div className="flex flex-col">
                                <div>
                                    <h1 className="font-bold text-center text-xl mb-4 text-textmain">
                                        Organics Vs Coffee Grounds
                                    </h1>
                                </div>
                                <DonutChart
                                    className=""
                                    data={organicsBreakdown}
                                    category="waste"
                                    colors={["stone", "green"]}
                                    variant="pie"
                                />
                                <div className="flex mt-10">
                                    <div className="flex m-2 gap-x-2">
                                        <p className="bg-green w-6 h-6 rounded-full"></p>
                                        <h2 className="font-semibold">
                                            Organic Waste
                                        </h2>
                                    </div>

                                    <div className="flex m-2 gap-x-2">
                                        <p className="bg-stone w-6 h-6 rounded-full"></p>
                                        <h2 className="font-semibold">
                                            Coffee Grounds
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col w-[400px]">
                            <div className="flex items-center justify-center">
                                <img
                                    className="w-64"
                                    src={coffeeGrounds}
                                    alt="Coffee Grounds"
                                />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-3xl text-textmain font-bold text-center">
                                    Did You Know?
                                </h1>
                                <p className="text-center text-textmain">
                                    Coffee grounds can do wonders in your
                                    garden! Sprinkle them around your plants as
                                    a natural and nourishing fertilizer giving
                                    your garden a sustainable boost and keeping
                                    your plants happy and healthy.
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default PieCharts;
