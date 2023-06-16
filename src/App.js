import './style/App.css';

import { Card, Metric, Text, Title, BarChart, Subtitle, AreaChart, DonutChart, Flex, BadgeDelta, Badge, BarList, Bold, Grid, Col} from '@tremor/react';
import { Carousel, Typography, IconButton, Chip, Navbar, MobileNav, Button, } from '@material-tailwind/react';
import { ChevronLeftIcon, ArrowRightIcon, ChevronRightIcon, ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/outline';
import { Icon } from '@tremor/react/dist';

import Header from './layouts/Header';
import Footer from './layouts/Footer';

import Banner from './components/Banner';
import OfficePresence from './components/OfficePresence';
import WasteDiversion from './components/WasteDiversion';
import MonthlyChange from './components/MonthlyChange';
import InfoCards from './components/InfoCards';
import NewsSection from './components/NewsSection';


import employeePresence from './assets/Employees.svg';


  //Creating an array for the data to be inputted into the 'Solid Waste Diversion' Card
  const recycling = [
    {
      name: 'Diversion',
      value: '64'
    },
    {
      name: 'Landfill',
      value: '36',
    } 
  ]

  export default () => (
  <div>

    <Header />
    <Banner />

    <div className='flex flex-row items-center justify-evenly m-10'>
      {/* Office Presence Card */}
      <OfficePresence />
      
      {/* Waste Diversion Section */}
      <WasteDiversion />
    </div>

    {/* Middle Carousel Section */}
    <div>
      <InfoCards/>
    </div>

    {/* MONTHLY CHANGE SECTION */}
    <div>
      <MonthlyChange />
    </div>


    {/* WHATS NEW SECTION */}
    {/* <h1
      className='text-xl'
    >What's new, SAP?</h1> */}
    <div>
      <NewsSection/>
    </div>

    {/* Footer Bar */}
    <Footer />

  </div>
);
