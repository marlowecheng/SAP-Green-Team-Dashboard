import { Card } from "@tremor/react";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/outline";

import employeePresence from "../assets/Employees.svg";
import employeePresenceData from "../data/employeePresence.json";

function OfficePresence({ displayMonth }) {
    
	// Find the array set that matches with the month passed in
	const currMonthData = employeePresenceData.EMPLOYEE.find((item) => item.month === displayMonth);

	// Get the value of 'count' key or the employee count
	const currMonthCount = currMonthData.count;

	// Get the index number of the current array set
	const currMonthIndex = employeePresenceData.EMPLOYEE.findIndex((item) => item.month === displayMonth);

	// Set the index of previous month back 1
	const prevMonthIndex = currMonthIndex - 1;

	// Empty variable to pass in previous month's count number
	let prevMonthCount = 0;

	// Get the previous month's count number if the previous month index is equal or greater than 0
	if (prevMonthIndex >= 0) {
		prevMonthCount = employeePresenceData.EMPLOYEE[prevMonthIndex].count;
	};

	// Calculate the difference between the two months and output as a percentage
	const presencePercentage = parseFloat(((currMonthCount - prevMonthCount) / currMonthCount) * 100).toFixed(1);

	return (
        <div>
            <h1 className="text-center mb-2 font-bold text-textmain text-xl">
                Office Presence
            </h1>

            <Card className="bg-bgmain flex items-center gap-x-8 h-[200px]">
                <div>
                    <img
                        width={110}
                        height={80}
                        src={employeePresence}
                    />
                </div>
                <div>
                    {/* Insert Month Data Here */}
                    <h1 className="text-xl text-indigo-600 font-bold mb-4">
						{displayMonth.toUpperCase()}
                    </h1>
					{/* If the presencePercentage is more than 0, display the pill as green with an up arrow */}
					{presencePercentage > 0 && (
							<div className="w-40 h-14 rounded-full bg-pillBgGreen text-center flex flex-row items-center justify-evenly">	
                        		<ArrowUpIcon className="text-white stroke-[4px] w-6 h-6" />
                        		{/* Insert Percentage Data Here */}
                       			<p className="text-white font-bold text-2xl">{presencePercentage}%</p>
                    		</div>
					)}
					{/* If the presencePercentage is less than 0, display the pill as red with a down arrow */}
					{presencePercentage < 0 && (
						<div className="w-40 h-14 rounded-full bg-pillBgRed text-center flex flex-row items-center justify-evenly">	
						<ArrowDownIcon className="text-white stroke-[4px] w-6 h-6" />
						{/* Insert Percentage Data Here */}
						   <p className="text-white font-bold text-2xl">{Math.abs(presencePercentage)}%</p>
					</div>
					)}
                    <div className="mt-4">
                        <p className="text-sm">
                            *Based on the month-over-month <br />
                            analysis of office presence.
                        </p>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default OfficePresence;
