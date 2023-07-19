import { Card, BarList } from "@tremor/react";

import data from '../data/monthlyData2023.json';
          
function WasteDiversion({displayMonth}) {

	// Filters the array based on the month passed in via displayMonth
	const filteredData = data.YEAR2023.find((item) => item.month === displayMonth);

	// Retrieve diverted value and times by 100
	const divertedData = filteredData.diverted * 100;

    // Calculate the percentage of garbage from the total waste
	const landfillData = parseInt(filteredData.total / filteredData.garbage);

	// Make data Tremor-friendly
	const recycling = [
        {
            name: "Diversion",
            value: divertedData,
        },
        {
            name: "Landfill",
            value: landfillData,
        },
    ];
	

    return (
        <div className="w-[500px]">
            <div className="text-center">
                <h1 className="mb-2 text-center font-bold text-textmain text-xl">
                    Solid Waste Diversion
                </h1>
            </div>
            <Card className="w-full bg-bgmain">
                <div className="flex flex-row justify-between">
                    <h1 className="text-xl text-indigo-600 font-bold mb-4">
                        May
                    </h1>
                    <h2 className="text-xl text-indigo-600 font-bold mb-4">
                        Total (%)
                    </h2>
                </div>
                <BarList
                    data={recycling}
                    className="p-3"
                />
            </Card>
        </div>
    );
}

export default WasteDiversion;
