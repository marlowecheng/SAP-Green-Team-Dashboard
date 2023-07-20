import { Card, Title, AreaChart } from "@tremor/react";
import React from "react";
import data from "../data/monthlyData2023.json";

const chartdata = [
    {
        date: "Jan", 
        "Eco Action": 22,
        "Waste Control Services": 124,
        "Cascade Recovery": 1234,
        "Refundables": 1214
    },
    {
        date: "Feb",
        "Eco Action": 2333,
        "Waste Control Services": 1234,
        "Cascade Recovery": 236,
        "Refundables": 1222
    },
    {
        date: "March",
        "Eco Action": 1000,
        "Waste Control Services": 2500,
        "Cascade Recovery": 4226,
        "Refundables": 22
    },
    {
        date: "April",
        "Eco Action": 3233,
        "Waste Control Services": 211,
        "Cascade Recovery": 2526,
        "Refundables": 2221
    },
    {
        date: "May",
        "Eco Action": 3333,
        "Waste Control Services": 1234,
        "Cascade Recovery": 4356,
        "Refundables": 1234
    },
    {
        date: "June", 
        "Eco Action": 3223,
        "Waste Control Services": 1234,
        "Cascade Recovery": 4356,
        "Refundables": 1234
    },
    {
        date: "July", 
        "Eco Action": 3123,
        "Waste Control Services": 23,
        "Cascade Recovery": 910,
        "Refundables": 2234
    },
    {
        date: "August", 
        "Eco Action": 3223,
        "Waste Control Services": 1234,
        "Cascade Recovery": 2252,
        "Refundables": 1234
    },
    {
        date: "September", 
        "Eco Action": 3223,
        "Waste Control Services": 1234,
        "Cascade Recovery": 2916,
        "Refundables": 123
    },

];

// const dataFormatter = (number: number) => {
//     return "$ " + Intl.NumberFormat("us").format(number).toString();
//   };

function WasteChart() {
    return (
        <Card className="flex justify-center flex-col items-center bg-bgmain p-8">
            <div className="mb-4">
                <h1 className="text-3xl text-textmain font-bold">SAP 2023 Total Waste Overview (KG)</h1>
            </div>
            <div className="bg-white">
                <AreaChart
                    className="h-72 w-[1200px] mt-4 p-3"
                    data={chartdata}
                    index="date"
                    categories={["Eco Action", "Waste Control Services", "Cascade Recovery", "Refundables"]}
                    colors={["indigo", "cyan", "amber", "lime"]}
                />
            </div>
        </Card>
    );
}

export default WasteChart;