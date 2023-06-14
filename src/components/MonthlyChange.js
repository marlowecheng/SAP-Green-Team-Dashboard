import { Card, DonutChart, Grid, Col } from '@tremor/react';  
   
   


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
   
function MonthlyChange() {  
    return (
        // <Card>
        //     <Grid numItems={6} numItemsLg={6} className="gap-2">
        //     <Card>
        //         <DonutChart
        //         data={monthlyTotalWaste}
        //         category="waste"
        //         colors={["blue", "green", "black"]}
        //         variant="pie"
        //         // valueFormatter={valueFormatter}  
        //         />
        //     </Card>
        //     <Card>
        //         <DonutChart
        //         data={monthlyTotalWaste}
        //         category="waste"
        //         colors={["blue", "green", "black"]}
        //         variant="pie"
        //         // valueFormatter={valueFormatter}  
        //         />
        //     </Card>
        //     <Col>
        //         <Card>
        //         <DonutChart
        //             data={monthlyTotalWaste}
        //             category="waste"
        //             colors={["blue", "green", "black"]}
        //             variant="pie"
        //             // valueFormatter={valueFormatter}  
        //         />
        //         </Card>
        //     </Col>
        //     </Grid>
        // </Card>
        <div classname='flex'>
            <div className='flex justify-center gap-x-2 mt-10 bg-bgmain'>
                <Card 
                    className='max-w-md mt-10'
                >
                    <DonutChart
                    className='max-w-sm'
                    data={monthlyTotalWaste}
                    category="waste"
                    colors={["blue", "green", "black"]}
                    variant="pie"
                    // valueFormatter={valueFormatter}  
                    />
                </Card>
                <Card 
                    className='max-w-md mt-10'
                >
                    <DonutChart
                    className='max-w-sm'
                    data={monthlyTotalWaste}
                    category="waste"
                    colors={["blue", "green", "black"]}
                    variant="pie"
                    // valueFormatter={valueFormatter}  
                    />
                </Card>
            </div>

            <div className='bg-bgmain p-2'>
                <div className='px-[492px]'>
                    <Card className=''>
                        <DonutChart
                        className=''
                        data={monthlyTotalWaste}
                        category="waste"
                        colors={["blue", "green", "black"]}
                        variant="pie"
                        // valueFormatter={valueFormatter}  
                        />
                    </Card> 
                </div>
            </div>
        </div>
    );
}

export default MonthlyChange;