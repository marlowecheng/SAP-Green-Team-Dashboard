import { Card, BarList } from "@tremor/react";

function WasteDiversion() {
  const recycling = [
    {
      name: "Diversion",
      value: "64",
    },
    {
      name: "Landfill",
      value: "36",
    },
  ];

<<<<<<< Updated upstream
  return (
    <div className="w-[500px]">
      <div className="text-center">
        <h1 className="mb-2 text-center font-bold text-textmain text-xl">
          Solid Waste Diversion
        </h1>
      </div>
      <Card className="w-full bg-bgmain">
        <div className="flex flex-row justify-between">
          <h1 className="text-xl text-indigo-600 font-bold mb-4">May</h1>
          <h2 className="text-xl text-indigo-600 font-bold mb-4">Total (%)</h2>
=======
function WasteDiversion({displayMonth}) {

	// Filters the array based on the month passed in via displayMonth
	const filteredData = data.YEAR2023.filter((item) => item.month === displayMonth);

	// Selects the first instance of the array based the month passed in
	const monthData = filteredData[0];

	// Convert diverted data into a number and times by 100
	const divertedData = Number(monthData.diverted) * 100;

	// Calculate garbage percentage and convert into number
	const landfillData = parseInt(Number(monthData.total) / Number(monthData.garbage));

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
>>>>>>> Stashed changes
        </div>
        <BarList
          data={recycling}
          className="p-3"
        />
      </Card>
    </div>
  );
};

export default WasteDiversion;