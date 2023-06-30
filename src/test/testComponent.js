import { useState } from "react";

import data from "../data/monthlyData2023.json";

export function TestComponent({ thisMonth }) {
  var currMonth = { thisMonth };
  var lastMonth = "february";

  const [monthlyData, setMonthlyData] = useState(data);

  const monthData = ({ monthlyData }) => {
    return (
      <div>
        {monthlyData
          .filter((selectedMonth) => selectedMonth.year2023["month"] === {thisMonth})
          .map((selectedMonth) => {
            const {month, rigidsNonRefundable} = selectedMonth;
            return (
              <div>
                <div>{month}</div>
                <ul key={month}>
                  <li>
                    Rigids & Non-Refundables: {rigidsNonRefundable}
                  </li>
                </ul>
              </div>
            );
          })}
      </div>
    );
  };

  return (
    <div className="lg mx-0 my-5 p-10 flex-col gap-2 justify-center items-center text-black border-2 ">
      <div>{monthData}</div>
    </div>
  );
}

export default TestComponent;
