// Test Page for pulling data 
// Remove Before Production 

import React, { useState, useEffect } from 'react';
import Data from '../data/monthlyData2023.json';

console.log(Data)

function TestData() {
    return (
        <div>
            <h1 className='text-red-400'>{Data.month}</h1>
            <h2>{Data.garbage}</h2>
        </div>
    );
}

export default TestData; 


// export default function useData = () {
//     const [data, setData] = useState([])
//     // const [loading, setLoading] = useState(true);
//     // const [error, setError] = useState(null);

//     useEffect(() => {
        
//     })
// }

// const Component = () => {
//     const [data, setData] = useState();

//     useEffect(() => {
//         //Fetch Data
//         const dataFetch = async () =>  {
//             const data = await (
//                 await fetch(
//                     './data/monthlyData2023.json'
//                 )
//             ).json();

//             setData(data);  
//         };
//     })
// }


// export default TestData;