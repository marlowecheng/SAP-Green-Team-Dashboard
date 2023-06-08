import { Card } from "@tremor/react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

import employeePresence from "../assets/Employees.svg";

function OfficePresence() {
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
          <h1 className="text-xl text-indigo-600 font-bold mb-4">May</h1>
          <div className="w-40 h-14 rounded-full bg-pillBgGreen text-center flex flex-row items-center justify-evenly">
            <ArrowUpIcon className="text-white stroke-[4px] w-6 h-6" />
            <p className="text-white font-bold text-2xl">50.1%</p>
          </div>
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
