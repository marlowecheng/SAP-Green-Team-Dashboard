// Test Page for pulling data 
// Remove Before Production 

import React, { useState, useEffect } from 'react';
import year2023 from '../data/monthlyData2023.json';

// console.log(year2023)

const TestData = () => {
    const [ data, setData ] = useState([]);
    const year2023 = data;

    console.log(year2023)

    useEffect(() => {
        // fetch data
        const dataFetch = async () => {
            try {
                const response = await fetch('../data/monthlyData2023.json');
                const json = await response.json()
                setData(json.data);
            } catch (error) {
                console.log('Error Fetching Data: ', error);
            }
        };

        dataFetch();
    },  []);


    return (    
        <div>
            {year2023.map((item, index) => (
                <div key={index}>
                    <h1 className='text-red-400'>{item}DATA HERE</h1>
                    {/* Access specific properties if needed */}
                    <h2 className='text-red-400'>{item.garbage}DATA HERE</h2>
                </div>
            ))}
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