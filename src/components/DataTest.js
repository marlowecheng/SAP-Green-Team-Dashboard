import React, { useState } from 'react';
import data from '../data/monthlyData2023.json';

const DataTest = ({ displayMonth }) => {
  const [currentMonth, setCurrentMonth] = useState(displayMonth);

  const handlePreviousMonth = () => {
    const months = data.YEAR2023.map(item => item.month);
    const currentIndex = months.indexOf(currentMonth);
    if (currentIndex > 0) {
      setCurrentMonth(months[currentIndex - 1]);
    }
  };

  const handleNextMonth = () => {
    const months = data.YEAR2023.map(item => item.month);
    const currentIndex = months.indexOf(currentMonth);
    if (currentIndex < months.length - 1) {
      setCurrentMonth(months[currentIndex + 1]);
    }
  };

  const filteredData = data.YEAR2023.find(item => item.month === currentMonth);

  return (
    <div>
      <button onClick={handlePreviousMonth}>Previous Month</button>
      <span>{currentMonth}</span>
      <button onClick={handleNextMonth}>Next Month</button>

      <div>
        <p>Rigids Non-Refundable: {filteredData.rigidsNonRefundable}</p>
        <p>Mixed Paper Fiber: {filteredData.mixedPaperFiber}</p>
      </div>
    </div>
  );
};

export default DataTest;
