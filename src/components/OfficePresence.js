import { Card } from "@tremor/react";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/outline";

import employeePresence from "../assets/Employees.svg";
import employeePresenceData from "../data/employeePresence.json";
import { useState } from "react";

function OfficePresence({ displayMonth }) {
    
	const currMonthData = employeePresenceData.EMPLOYEE.find((item) => item.month === displayMonth);

	const currMonthCount = currMonthData.count;

	const currMonthIndex = employeePresenceData.EMPLOYEE.findIndex((item) => item.month === displayMonth);

	const prevMonthIndex = currMonthIndex - 1;

	let prevMonthCount = 0;

	if (prevMonthIndex >= 0) {
		prevMonthCount = employeePresenceData.EMPLOYEE[prevMonthIndex].count;
	};

	const presencePercentage = Math.round(((currMonthCount - prevMonthCount) / currMonthCount) * 100);

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
					{presencePercentage > 0 && (
							<div className="w-40 h-14 rounded-full bg-pillBgGreen text-center flex flex-row items-center justify-evenly">	
                        		<ArrowUpIcon className="text-white stroke-[4px] w-6 h-6" />
                        		{/* Insert Percentage Data Here */}
                       			<p className="text-white font-bold text-2xl">{presencePercentage}%</p>
                    		</div>
					)}
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
