import "./style/App.css";

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

import Banner from "./components/Banner";
import OfficePresence from "./components/OfficePresence";
import PieCharts from "./components/PieCharts";
import WasteDiversion from "./components/WasteDiversion";
import InfoCards from "./components/InfoCards";
import NewsSection from "./components/NewsSection";
import WasteChart from "./components/AreaChart";

function App() {
    
    // !NOTE: To change the month displayed on first load, replace the "" with desired month in all lowercase letters
    const updatedMonth = "may";

    return (
        <div>
            <Header />
            <Banner displayMonth={updatedMonth} />

            <div className="flex flex-row items-center justify-evenly m-10">
                {/* Office Presence Card */}
                <OfficePresence displayMonth={updatedMonth} />

                {/* Waste Diversion Section */}
                <WasteDiversion displayMonth={updatedMonth} />
            </div>
            
            {/* Area Chart Section */}
            <div>
                <WasteChart />
            </div>

            {/* Middle Carousel Section */}
            <div>
                <InfoCards displayMonth={updatedMonth} />
            </div>

            {/* MONTHLY CHANGE SECTION */}
            <div>
                <PieCharts displayMonth={updatedMonth} />
            </div>

            {/* WHATS NEW SECTION */}
            <div>
                <NewsSection />
            </div>

            {/* Footer Bar */}
            <Footer />
        </div>
    );
}

export default App;
