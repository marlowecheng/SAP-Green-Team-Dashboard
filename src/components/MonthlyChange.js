import React, { useState } from 'react';
import { Card, DonutChart } from '@tremor/react';  
import WasteDiversion from './WasteDiversion';

import coffeeGrounds from '../assets/coffee-grounds.png';

import monthlyData from '../data/monthlyData2023.json';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import PieCharts from './PieCharts';
import Slider from './SwitchMonths';

   
function MonthlyChange() {

    const [count, setCount] = useState(0);
    
    // 1. Make left and Right Arrows clickable 
    // 2. After one is clicked, it should update the data dependnent on the month 
    // 3. Display the data that correlated to the month which in this case would be may and july 
    // 4. Be able to switch back and forth between months 

    function prevMonth () {
        setCount(count - 1);
        
    }

    function nextMonth() {
        setCount(count + 1);
    }

    return (
        <div>
        </div>
    );
}

export default MonthlyChange;