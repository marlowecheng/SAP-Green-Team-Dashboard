// Test Page for pulling data 
// Remove Before Production 

import React, { useState, useEffect, setData } from 'react';
import year2023 from '../data/monthlyData2023.json';

// console.log(year2023)

const TestData = () => {
    const [ data, setData ] = useState();
    const year2023 = data;

    // console.log(data)

    useEffect(() => {
        // fetch data
        const dataFetch = async () => {
            const year2023 = await (
                await fetch(
                    "../data/monthlyData2023.json"
                )
            ).json();
                
            // set state when the data received 
            setData(year2023);
        };

        dataFetch();
    },  []);


    return (
        <div>
            <h1 className='text-red-400'>{year2023}</h1>
            {/* <h2 className='text-red-400'>{year2023.garbage}</h2> */}
        </div>
    )
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