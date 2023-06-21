import { useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import MonthlyChange from "./MonthlyChange";


const Slider = ({ slides }) => {   
    const [current, setCurrent] = useState(0);
    const length = slides.length;


const nextMonth = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
};

const prevMonth = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
};

    return (
            <div>
                <ChevronLeftIcon
                    className=""
                    onClick={prevMonth}
                />
                <ChevronRightIcon 
                    className=""
                    onClick={nextMonth}
                />
                {slides.map((slide, index) => {
                    return (
                        <div key={index}>
                            {index === current &&  <MonthlyChange />}
                        </div>
                    )
                })}
            </div>
        )       
    }

export default Slider;