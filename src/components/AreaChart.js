import { Card, Title, AreaChart } from "@tremor/react";
import React from "react";
import data from "../data/monthlyData2023.json";

function WasteChart() {

    // Empty array that the forEach will populate later
    const chartData = [];

    // Gets the array of month data and iterates through each array with the 'month' key
    data.YEAR2023.forEach((monthData) => {

        // Retrieves data from the JSON and puts it in its respective variable
        const date = monthData.month;
        const ecoData = monthData.compost + monthData.coffeeGrounds;
        const wasteData = monthData.garbage;
        const cascadeData = monthData.rigidsRefundableAndNon + monthData.mixedPaperFiber + monthData.confidentialPaper;
        const refundablesData = monthData.rigidsRefundableAndNon;


        // Creates an iteration of the array below for each month in chartData
        chartData.push({
            date: date.charAt(0).toUpperCase() + date.slice(1),
            "Eco Action": ecoData,
            "Waste Control Services": wasteData,
            "Cascade Recovery": cascadeData,
            "Refundables": refundablesData,
        });

    });

    return (
        <Card className="flex justify-center flex-col items-center bg-bgmain p-8 my-16">
            <div className="mb-4">
                <h1 className="text-3xl text-textmain font-bold">SAP 2023 Total Waste Overview (KG)</h1>
            </div>
            <div className="bg-white">
                <AreaChart
                    className="h-72 w-[1200px] mt-4 p-3"
                    data={chartData}
                    index="date"
                    categories={["Eco Action", "Waste Control Services", "Cascade Recovery", "Refundables"]}
                    colors={["indigo", "cyan", "amber", "lime"]}
                />
            </div>
        </Card>
    );
}

export default WasteChart;