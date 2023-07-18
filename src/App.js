import "./style/App.css";

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

import Banner from "./components/Banner";
import OfficePresence from "./components/OfficePresence";
import PieCharts from "./components/PieCharts";
import WasteDiversion from "./components/WasteDiversion";
import InfoCards from "./components/InfoCards";
import NewsSection from "./components/NewsSection";

function App() {
    
    // !NOTE: To change the month displayed on first load, replace the "" with desired month
    let currMonth = "may";

    return (
        <div>
            <Header />
            <Banner displayMonth={currMonth} />

            <div className="flex flex-row items-center justify-evenly m-10">
                {/* Office Presence Card */}
                <OfficePresence displayMonth={currMonth} />

                {/* Waste Diversion Section */}
                <WasteDiversion displayMonth={currMonth} />
            </div>

            {/* Middle Carousel Section */}
            <div>
                <InfoCards displayMonth={currMonth} />
            </div>

            {/* MONTHLY CHANGE SECTION */}
            <div>
                <PieCharts displayMonth={currMonth} />
                {/* <MonthlyChange /> */}
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
}

export default App;
