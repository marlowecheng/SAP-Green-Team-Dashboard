import "./style/App.css";
import data from "./data/data.json";
import monthlyData from "./data/monthlyData2023.json";

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

import Banner from "./components/Banner";
import OfficePresence from "./components/OfficePresence";
import PieCharts from "./components/PieCharts";
import WasteDiversion from "./components/WasteDiversion";
import MonthlyChange from "./components/MonthlyChange";
import InfoCards from "./components/InfoCards";
import NewsSection from "./components/NewsSection";
import Test from "./test/test";
import TestData from "./components/TestPage";

import Slider from "./components/SwitchMonths";

export default () => (
  <div>
    <Header />
    <Banner />

    <div className="flex flex-row items-center justify-evenly m-10">
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
      <PieCharts />
      {/* <MonthlyChange /> */}
    </div>

    <div>
      {/* @NOTE: REMOVE THIS PLEASE */}
      <Test />
    </div>

    <div>
      {/* @NOTE: REMOVE THIS PLEASE */}
      <TestData />
    </div>

    {/* WHATS NEW SECTION */}
    {/* <h1
      className='text-xl'
    >What's new, SAP?</h1> */}
    <div>
      <NewsSection />
    </div>

    {/* Footer Bar */}
    <Footer />
  </div>
);
