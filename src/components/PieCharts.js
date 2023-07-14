import React, { useState } from 'react';
import { Card, DonutChart } from '@tremor/react';  

import coffeeGrounds from '../assets/coffee-grounds.png';

import data from '../data/monthlyData2023.json';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';


function PieCharts() {

    // const [count, setCount] = useState('');
    const [month, setMonth] = useState('')
    
    // 1. Make left and Right Arrows clickable 
    // 2. After one is clicked, it should update the data dependent on the month 
    // 3. Display the data that correlated to the month which in this case would be may and july 
    // 4. Be able to switch back and forth between months 

    function prevMonth() {
        // For loop to iterate over the array 
        const result = [];

        // result.items.forEach(item => {
        //     item.data.forEach(d => results.push)
        // })

        // for (let i = 0; i < data.YEAR2023[0]; i--) {
        //     result.map(<li>{data.YEAR2023.month}</li>)
        // }

        if (month) {
            if (month < 0) {
                setMonth(month - 1) 
            } else {
                setMonth(0)
            }
        }
    }

    function nextMonth() {
        // setCount(count + 1);
        if (month) {
            if (month > 0) {
                setMonth(month + 1) 
            } else {
                setMonth(0)
            }
        }


    }

    const monthlyTotalWaste = [
        {
            name: "Organics",
            waste: data.YEAR2023[4].coffeeGrounds
        },
        {
            name: "Waste Control Services",
            waste: data.YEAR2023[4].garbage
        },
        {
          name: "Cascade Recovery",
          waste: data.YEAR2023[4].rigidsNonRefundable
        }, 
      ]
    
    const cascadeBreakdown = [
        {
            name: "Mixed Paper",
            waste: data.YEAR2023[4].mixedPaperFiber
        },  
        {
            name: "Confidential Paper",
            waste: data.YEAR2023[4].confidentialPaper
        },
        {
            name: "Garbage",
            waste: data.YEAR2023[4].garbage
        },
        {
            name: "Non refundables",
            waste: data.YEAR2023[4].coffeeGrounds
        },
    ];
    
    const organicsBreakdown = [ 
        {
            name: "Coffee",
            waste: data.YEAR2023[4].coffeeGrounds
        },
        {
            name: "Organics",
            waste: data.YEAR2023[4].rigidsNonRefundable
        }
    ];

    return (
        <div>
            <div className='text-center'>
                <div className='flex justify-center items-center bg-textmain p-2'>
                    <div>
                        <ChevronLeftIcon className='w-10 h-10 text-white' strokeWidth={3} onClick={prevMonth}/>
                    </div>
                    <div>
                        <h1 className='text-3xl font-semibold text-white'>MARCH 2023</h1>
                        <span className='text-white'>{month}</span>
                        {/* Delete before production */}
                            {cascadeBreakdown.map((breakdown, index) => {
                                return (
                                    <div key={index}>
                                        <h2 className='text-white'>name: {breakdown.name}</h2>
                                        <h2 className='text-white'>value: {breakdown.waste}</h2>
                                    </div>
                                )
                            })}
                    </div>
                    <div>
                        <ChevronRightIcon className='w-10 h-10 text-white' strokeWidth={3} onClick={nextMonth}/>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center bg-bgmain pt-12'>
                <Card className='max-w-md m-2'>
                    <div>
                        <h1 className='font-bold text-textmain text-center text-xl mb-4'>Monthly Total Waste</h1>
                    </div>
                    <DonutChart
                        className='max-w-sm'
                        data={monthlyTotalWaste}
                        category="waste"
                        colors={["green", "stone", "sky"]}
                        variant="pie"
                    />
                    <div className='flex flex-wrap gap-x-2 mt-4 ml-10'>
                        <div className='flex m-2 gap-x-2'>
                            <p className='bg-blue-300 w-6 h-6 rounded-full'></p>
                            <h2 className='font-semibold'>Cascade Recovery</h2>
                        </div>

                        <div className='flex m-2 gap-x-2'>
                            <p className='bg-green w-6 h-6 rounded-full'></p>
                            <h2 className='font-semibold'>Organics</h2>
                        </div>

                        <div className='flex m-2 gap-x-2'>
                            <p className='bg-stone w-6 h-6 rounded-full'></p>
                            <h2 className='font-semibold'>Waste Control Services</h2>
                        </div>
                    </div>
                </Card>

                {/* Cascade Recovery Breakdown Card */}
                <Card className='max-w-md m-2'>
                    <div>
                        <h1 className='font-bold text-center text-textmain text-xl mb-4'>Cascade Recovery Breakdown</h1>
                    </div>
                    <DonutChart
                        className='max-w-sm'
                        data={cascadeBreakdown}
                        category="waste"
                        colors={["yellow", "blue", "orange", "stone"]}
                        variant="pie"
                    // valueFormatter={valueFormatter}  
                    />
                    <div className='flex flex-wrap gap-x-2 mt-4 ml-10'>
                        <div className='flex m-2 gap-x-2'>
                            <p className='bg-stone w-6 h-6 rounded-full'></p>
                            <h2 className='font-semibold'>Non Refundables</h2>
                        </div>

                        <div className='flex m-2 gap-x-2'>
                            <p className='bg-yellow w-6 h-6 rounded-full'></p>
                            <h2 className='font-semibold'>Mixed Paper</h2>
                        </div>

                        <div className='flex m-2 gap-x-2'>
                            <p className='bg-blue-600 w-6 h-6 rounded-full'></p>
                            <h2 className='font-semibold'>Refundables</h2>
                        </div>

                        <div className='flex m-2 gap-x-2'>
                            <p className='bg-orange w-6 h-6 rounded-full'></p>
                            <h2 className='font-semibold'>Confidential Paper</h2>
                        </div>

                    </div>
                </Card>
            </div>
            
            {/* Organics Vs Coffee Grounds Card */}
            <div className='bg-bgmain p-2 flex items-center justify-center pb-12'>
                <div className=''>
                        <Card className='flex gap-x-10 justify-center items-center'>
                            <div>
                                <div className='flex flex-col'>
                                    <div>
                                        <h1 className='font-bold text-center text-xl mb-4 text-textmain'>Organics Vs Coffee Grounds</h1>
                                    </div>
                                    <DonutChart
                                        className=''
                                        data={organicsBreakdown}
                                        category="waste"
                                        colors={['stone','green']}
                                        variant="pie"

                                    />
                                    <div className='flex mt-10'>
                                        <div className='flex m-2 gap-x-2'>
                                            <p className='bg-green w-6 h-6 rounded-full'></p>
                                            <h2 className='font-semibold'>Organic Waste</h2>
                                        </div>

                                        <div className='flex m-2 gap-x-2'>
                                            <p className='bg-stone w-6 h-6 rounded-full'></p>
                                            <h2 className='font-semibold'>Coffee Grounds</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col w-[400px]'>
                                <div className='flex items-center justify-center'>
                                    <img 
                                        className='w-64'
                                        src={coffeeGrounds} 
                                        alt="Coffee Grounds"
                                    /> 
                                </div>
                                <div className='flex flex-col'>
                                    <h1 className='text-3xl text-textmain font-bold text-center'>Did You Know?</h1>
                                    <p className='text-center text-textmain'>Coffee grounds can do wonders in your garden! Sprinkle them around your plants as a natural and nourishing fertilizer giving your garden a sustainable boost and keeping your plants happy and healthy.</p>
                                </div>
                            </div>
                        </Card>
                </div>
            </div>
        </div>
    );
}

export default PieCharts;