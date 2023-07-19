import { Card, Text, Flex } from "@tremor/react";
import { Carousel, IconButton } from "@material-tailwind/react";
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    ArrowUpIcon, ArrowDownIcon, MinusIcon
} from "@heroicons/react/24/outline";

import cascadeImg from "../assets/cascade-recovery.svg";
import ecoServiceCard from "../assets/eco-action.svg";
import wasteServiceCard from "../assets/wastemanagement.svg";
import refundServiceCard from "../assets/refundables.svg";

import data from "../data/monthlyData2023.json";
import {
    calcCascadeData,
    calcEcoData,
    calcLandfillData,
    calcRefundablesData,
} from "../utilities/calcDifferencePercent";

function InfoCards({ displayMonth }) {
    // Get the array set of the month that is passed in via prop
    const monthData = data.YEAR2023.find((item) => item.month === displayMonth);

    // Get the index of the current month's array
    const currMonthIndex = data.YEAR2023.findIndex(
        (item) => item.month === displayMonth
    );

    // Get the index of the previous month's array
    const prevMonthIndex = currMonthIndex - 1;

    // Calling calculation functions from calcDifferencePercent.js with the above consts passed into the functions
    const compareCascadeData = calcCascadeData(
        monthData,
        data.YEAR2023[prevMonthIndex]
    );
    const compareEcoData = calcEcoData(
        monthData,
        data.YEAR2023[prevMonthIndex]
    );
    const compareLandfillData = calcLandfillData(
        monthData,
        data.YEAR2023[prevMonthIndex]
    );
    const compareRefundablesData = calcRefundablesData(
        monthData,
        data.YEAR2023[prevMonthIndex]
    );

    const currMonth = displayMonth.charAt(0).toUpperCase() + displayMonth.slice(1);

    return (
        <div>
            <Carousel
                className=""
                prevArrow={({ handlePrev }) => (
                    <IconButton
                        size="lg"
                        onClick={handlePrev}
                        className="!absolute top-2/4 -translate-y-2/4 left-4 bg-bgsecondary rounded-full"
                    >
                        <ChevronLeftIcon
                            strokeWidth={3}
                            className="w-6 h-6"
                        />
                    </IconButton>
                )}
                nextArrow={({ handleNext }) => (
                    <IconButton
                        size="lg"
                        onClick={handleNext}
                        className="!absolute top-2/4 -translate-y-2/4 !right-4 bg-bgsecondary rounded-full"
                    >
                        <ChevronRightIcon
                            strokeWidth={3}
                            className="w-6 h-6"
                        />
                    </IconButton>
                )}
            >
                {/* Card 1 */}
                <Card className="max-w-3xl mx-auto bg-cascadeBg mt-12 mb-12">
                    <div>
                        <Flex>
                            <div>
                                <h1 className="text-3xl text-white font-bold">
                                    Cascade Recovery
                                </h1>
                                <h2 className="text-xl text-white font-bold">
                                    Non-Refundable Recycling Experts
                                </h2>
                                <div className="w-[500px]">
                                    <p className="text-white mt-4 max-w">
                                        Cascade is responsible for managing and
                                        processing non-refundable materials at
                                        the SAP office, including paper,
                                        cardboard, and glass. From efficient
                                        handling to innovative recycling
                                        solutions, Cascade Recovery ensures
                                        sustainability and a circular economy. 
                                        Find out more about Cascade’s
                                        sustainability efforts here.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <img
                                    className="mb-5"
                                    height={180}
                                    src={cascadeImg}
                                />
                                <Text className="text-lg text-white font-bold">
                                    {currMonth}
                                </Text>
                                {compareCascadeData > 0 && (
                                    <div className="w-44 h-14 rounded-full bg-pillBgGreen text-center flex flex-row items-center justify-evenly drop-shadow-2xl">
                                    <ArrowUpIcon className="text-white stroke-[4px] w-6 h-6" />
                                    <p className="text-white font-bold text-2xl">
                                    {Math.abs(compareCascadeData)}%
                                    </p>
                                    </div>
                                )}
                                {compareCascadeData < 0 && (
                                    <div className="w-44 h-14 rounded-full bg-pillBgRed text-center flex flex-row items-center justify-evenly drop-shadow-2xl">
                                        <ArrowDownIcon className="text-white stroke-[4px] w-6 h-6" />
                                        <p className="text-white font-bold text-2xl">
                                            {Math.abs(compareCascadeData)}%
                                        </p>
                                    </div>
                                )}
                                {compareCascadeData == 0 && (
                                    <div className="w-44 h-14 rounded-full bg-pillBgGrey text-center flex flex-row items-center justify-evenly drop-shadow-2xl">
                                        <MinusIcon className="text-white stroke-[4px] w-6 h-6" />
                                        <p className="font-bold text-2xl text-white">
                                            {Math.abs(compareCascadeData)}%
                                        </p>
                                    </div>
                                )}
                                {/* <div className="w-44 h-14 rounded-full bg-pillBgGreen text-center flex flex-row items-center justify-evenly drop-shadow-2xl">
                                    <ArrowUpIcon className="text-white stroke-[4px] w-6 h-6" />
                                    <p className="text-white font-bold text-2xl">
                                        50.1%
                                    </p>
                                </div> */}
                                <Text className="text-xs text-white mt-2">
                                    *Total Weight: 250 tons
                                </Text>
                            </div>
                        </Flex>
                    </div>
                </Card>

                {/* Card 2 */}
                <Card className="max-w-3xl mx-auto bg-ecoActionBg mt-12 mb-12">
                    <div>
                        <Flex>
                            <div>
                                <h1 className="text-3xl text-white font-bold">
                                    Eco-Action
                                </h1>
                                <h2 className="text-xl text-white font-bold">
                                    Your In-Office Organic Recycling Experts at
                                    SAP
                                </h2>
                                <div className="w-[500px]">
                                    <p className="text-white mt-4 max-w">
                                        Eco Action Recycling is Metro
                                        Vancouver's top choice for in-office,
                                        restaurant, and strata food waste
                                        recycling. They take responsibility for
                                        managing and recycling organics at SAP,
                                        including food scraps, soil paper, and
                                        napkins. With their effective solutions,
                                        Eco Action Recycling ensures a clean and
                                        odor-free environment. Their dedicated
                                        team sanitizes bins, while providing
                                        freshly cleaned totes during every
                                        pickup.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <img
                                    className="mb-5"
                                    height={180}
                                    src={ecoServiceCard}
                                />
                                <Text className="text-lg text-white font-bold">
                                {currMonth}
                                </Text>
                                <div className="w-44 h-14 rounded-full bg-pillBgGreen text-center flex flex-row items-center justify-evenly drop-shadow-2xl">
                                    <ArrowUpIcon className="text-white stroke-[4px] w-6 h-6" />
                                    <p className="text-white font-bold text-2xl">
                                        50.1%
                                    </p>
                                </div>
                                <Text className="text-xs text-white mt-2">
                                    *Total Weight: 250 tons
                                </Text>
                            </div>
                        </Flex>
                    </div>
                </Card>

                {/* Card 3 */}
                <Card className="max-w-3xl mx-auto bg-wasteBg mt-12 mb-12">
                    <div>
                        <Flex>
                            <div>
                                <h1 className="text-3xl text-white font-bold">
                                    Waste Control Services
                                </h1>
                                <h2 className="text-xl text-white font-bold">
                                    The Comprehensive Waste Management Partner
                                </h2>
                                <div className="w-[500px]">
                                    <p className="text-white mt-4 max-w">
                                        Waste Control Services manages SAP's
                                        waste solutions prioritizing landfill
                                        diversion. They expertly handle various
                                        types of waste, including plastic waste,
                                        Styrofoam containers, and food plastic
                                        materials Waste Control Services mission
                                        aligns with the City of Vancouver's 2040
                                        Zero Waste goal [include link].
                                    </p>
                                </div>
                            </div>
                            <div>
                                <img
                                    className="mb-5"
                                    height={180}
                                    src={wasteServiceCard}
                                />
                                <Text className="text-lg text-white font-bold">
                                {currMonth}
                                </Text>
                                <div className="w-44 h-14 rounded-full bg-pillBgGreen text-center flex flex-row items-center justify-evenly drop-shadow-2xl">
                                    <ArrowUpIcon className="text-white stroke-[4px] w-6 h-6" />
                                    <p className="text-white font-bold text-2xl">
                                        50.1%
                                    </p>
                                </div>
                                <Text className="text-xs text-white mt-2">
                                    *Total Weight: 250 tons
                                </Text>
                            </div>
                        </Flex>
                    </div>
                </Card>

                {/* Card 4 */}
                <Card className="max-w-3xl mx-auto bg-refundableBg mt-12 mb-12">
                    <div>
                        <Flex>
                            <div>
                                <h1 className="text-3xl text-white font-bold">
                                    Refundables
                                </h1>
                                <h2 className="text-xl text-white font-bold">
                                    Refundable Recycling for a stronger
                                    community
                                </h2>
                                <div className="w-[500px]">
                                    <p className="text-white mt-4 max-w">
                                        Cascade Recovery also takes charge of
                                        collecting and processing refundable
                                        items, including can, bottles, and
                                        anything with environmental deposits.
                                        SAP’s recycling efforts actively
                                        contribute to the Development
                                        Disabilities Association [include link],
                                        making a positive impact within our
                                        local community.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <img
                                    className="mb-5"
                                    height={180}
                                    src={refundServiceCard}
                                />
                                <Text className="text-lg text-white font-bold">
                                {currMonth}
                                </Text>
                                <div className="w-44 h-14 rounded-full bg-pillBgGreen text-center flex flex-row items-center justify-evenly drop-shadow-2xl">
                                    <ArrowUpIcon className="text-white stroke-[4px] w-6 h-6" />
                                    <p className="text-white font-bold text-2xl">
                                        50.1%
                                    </p>
                                </div>
                                <Text className="text-xs text-white mt-2">
                                    *Total Weight: 250 tons
                                </Text>
                            </div>
                        </Flex>
                    </div>
                </Card>
            </Carousel>
        </div>
    );
}

export default InfoCards;
