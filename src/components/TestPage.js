// Test Page for pulling data 
// Remove Before Production 

import React, { useState, useEffect } from 'react';
import data from '../data/monthlyData2023.json';

// console.log(data.YEAR2023[1].id);


function TestData() {
    
    const [ monthlyData, setMonthlyData ] = useState(data);
    // console.log(data.YEAR2023[month])
    // const year = year2023.year2023;

    return (    
        <div>
            <div>
                <h1 className='text-red-400'>{monthlyData.month}</h1>
                {/* Access specific properties if needed */}
                <h2 className='text-red-400'></h2>
            </div>
        </div>
    )
}


export default TestData; 
