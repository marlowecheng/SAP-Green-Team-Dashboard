import './style/App.css';

import Header from './layouts/Header';
import Footer from './layouts/Footer';

import Banner from './components/Banner';
import OfficePresence from './components/OfficePresence';
import WasteDiversion from './components/WasteDiversion';
import MonthlyChange from './components/MonthlyChange';
import InfoCards from './components/InfoCards';
import NewsSection from './components/NewsSection';
import Test from './test/test';

import Slider from './components/SwitchMonths';

import data from './data/data.json';

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
      <InfoCards />
    </div>

    {/* MONTHLY CHANGE SECTION */}
    <div>
      <MonthlyChange />

      {/* @NOTE: REMOVE THIS PLEASE */}
      <Test />
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
