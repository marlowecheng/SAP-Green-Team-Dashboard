
import data from "../data/monthlyData2023.json";

const DataTest = ({ displayMonth }) => {
//   const currMonth = displayMonth;

  const filteredData = data.YEAR2023.filter((item) => item.month === displayMonth);

  if (filteredData.length === 0) {
    return <div>No data available for {displayMonth}</div>;
  }

  const monthData = filteredData[0];

  console.log(monthData);

  return (
    <div>
      <p>Rigids Non-Refundable: {monthData.rigidsNonRefundable}</p>
      <p>Mixed Paper Fiber: {monthData.mixedPaperFiber}</p>
    </div>
  );
};

export default DataTest;
