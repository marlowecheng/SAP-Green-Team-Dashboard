import { Card, DonutChart } from '@tremor/react';  
import WasteDiversion from './WasteDiversion';

import coffeeGrounds from '../assets/coffee-grounds.png';

import data from '../data/data.json';
   
function MonthlyChange() {

    const monthlyTotalWaste = [
        {
          name: "Cascade Recovery",
          waste: 60
        }, 
        {
          name: "Organics",
          waste: 25
        },
        {
          name: "Waste Control Services",
          waste: 25
        }
      ]
    
    const cascadeBreakdown = [
        {
            name: "Non refundables",
            waste: 45
        },
        {
            name: "Mixed Paper",
            waste: 25
        },  
        {
            name: "Refundables",
            waste: 20
        },
        {
            name: "Confidential Paper",
            waste: 10
        }
    ];
    
    const organicsBreakdown = [ 
        {
            name: "Coffee",
            waste: 50
        },
        {
            name: "Organics",
            waste: 50
        }
    ];

    return (
        <div classname='flex'>
            <div className='flex justify-center items-center mt-10 bg-bgmain'>
                <Card className='max-w-md m-2'>
                    <div>
                        <h1 className='font-bold text-textmain text-center text-xl mb-4'>Monthly Total Waste</h1>
                    </div>
                    <DonutChart
                        className='max-w-sm'
                        data={monthlyTotalWaste}
                        category="waste"
                        colors={["blue", "green", "black"]}
                        variant="pie"
                        // valueFormatter={valueFormatter}  
                    />
                    <div className='flex flex-wrap gap-x-2 mt-4 ml-10'>
                        <div className='flex m-2 gap-x-2'>
                            <p className='bg-blue-300 w-6 h-6 rounded-full'></p>
                            <h2 className='font-semibold'>Cascade Recovery</h2>
                        </div>

                        <div className='flex m-2 gap-x-2'>
                            <p className='bg-green-700 w-6 h-6 rounded-full'></p>
                            <h2 className='font-semibold'>Organics</h2>
                        </div>

                        <div className='flex m-2 gap-x-2'>
                            <p className='bg-gray-800 w-6 h-6 rounded-full'></p>
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
                        colors={["yellow", "blue", "orange", "purple"]}
                        variant="pie"
                    // valueFormatter={valueFormatter}  
                    />
                    <div className='flex flex-wrap gap-x-2 mt-4 ml-10'>
                        <div className='flex m-2 gap-x-2'>
                            <p className='bg-yellow-700 w-6 h-6 rounded-full'></p>
                            <h2 className='font-semibold'>Non Refundables</h2>
                        </div>

                        <div className='flex m-2 gap-x-2'>
                            <p className='bg-orange-700 w-6 h-6 rounded-full'></p>
                            <h2 className='font-semibold'>Mixed Paper</h2>
                        </div>

                        <div className='flex m-2 gap-x-2'>
                            <p className='bg-purple-600 w-6 h-6 rounded-full'></p>
                            <h2 className='font-semibold'>Confidential Paper</h2>
                        </div>

                        <div className='flex m-2 gap-x-2'>
                            <p className='bg-blue-600 w-6 h-6 rounded-full'></p>
                            <h2 className='font-semibold'>Refundables</h2>
                        </div>
                    </div>
                </Card>
            </div>
            
            {/* Organics Vs Coffee Grounds Card */}
            <div className='bg-bgmain p-2 flex items-center justify-center'>
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
                                        colors={['tan','green']}
                                        variant="pie"
                                    // valueFormatter={valueFormatter}  
                                    />
                                    <div className='flex mt-10'>
                                        <div className='flex m-2 gap-x-2'>
                                            <p className='bg-green-700 w-6 h-6 rounded-full'></p>
                                            <h2 className='font-semibold'>Organic Waste</h2>
                                        </div>

                                        <div className='flex m-2 gap-x-2'>
                                            <p className='bg-brown-700 w-6 h-6 rounded-full'></p>
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

export default MonthlyChange;