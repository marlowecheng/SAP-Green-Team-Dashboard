import { useState } from "react";
import data from "../data/monthlyData2023.json";

import TestComponent from "./testComponent";

export function Test() {
  const [monthlyData, setMonthlyData] = useState(data);

  const currMonth = "january";

  return (
    <div className="lg m-10 p-10 flex-col gap-2 justify-center items-center text-black border-2 leading-10">
      <div className="text-red-600 text-4xl font-black ">
        Testing Box Please Remove Before Production
      </div>
      <div>
        January rigids non refundable number:{" "}
        <span className="text-blue-500">{monthlyData["Monthly Tracking"]}</span>
      </div>
      <TestComponent thisMonth={currMonth} />
    </div>
  );
}

export default Test;
