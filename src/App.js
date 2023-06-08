import './style/App.css';

import { Card, Metric, Text, Title, BarChart, Subtitle, AreaChart, DonutChart, Flex, BadgeDelta, Badge, BarList, Bold} from "@tremor/react";
import { Carousel, Typography, IconButton, Chip, Navbar, MobileNav, Button, } from '@material-tailwind/react';
import { ChevronLeftIcon, ArrowRightIcon, ChevronRightIcon, ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/outline";
import { Icon } from '@tremor/react/dist';

import { Header } from './layouts/Header';
import Footer from './layouts/Footer';

import cascadeImg from './assets/cascade-recovery.svg';
import employeePresence from './assets/Employees.svg';
import greenTeamCard from './assets/SAPGREENTEAMCARDCOLLECTIONV2.png';
import napkinHero from './assets/NapkinHeroV2.png';
import ddaLogo from './assets/DDALOGO.png';
import anishaCard from './assets/Anisha_CardPhoto.jpg';
import footerLogo from './assets/SAPVECTORLOGO.svg';
import cascadeImage from './assets/cascade-recovery-lineup.svg';
import ecoActionImage from './assets/eco-action-lineup.svg';
import refundableImage from './assets/refundables-lineup.svg';
import wasteImage from './assets/waste-management-lineup.svg';
import ecoServiceCard from './assets/eco-action.svg';
import wasteServiceCard from './assets/wastemanagement.svg';
import refundServiceCard from './assets/refundables.svg';
import heroBackground from './assets/SAPVECTORLOGO-COLOR.svg';


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

    <div className='bg-bgmain py-4 flex justify-evenly items-center border-b-[60px] border-textmain'>
      <div className='flex flex-col'>
        <h1 className='text-textmain font-bold text-5xl z-10'>Reveal the Green</h1>
        <h1 className='text-textmain font-bold text-5xl z-10'>Team Revolution</h1>
        <h2 className='text-textmain text-2xl z-10'>Witness the Journey from Waste to sustainability.</h2>
        <div className='absolute top-1 right-0 left-[-50px] bottom-0'>
          <img src={heroBackground} className='w-[550px] h-[550px] z-0 opacity-10'/>
        </div>
      </div>
        
      
      <div classname='flex flex-row'>
        <div className='flex flex-row my-4 gap-x-4'>
          {/* Hero Card Cascade Recovery */}
          <Card className="w-[255px] flex flex-col items-center border-cascadeBorder border-[5px] drop-shadow-xl">
            <h1 className='text-textmain font-bold'>Cascade Recovery</h1>
            <img src={cascadeImage} className='my-3'/>
            <div className='w-32 h-12 rounded-full bg-pillBgGreen bg-opacity-[40%] text-center flex flex-row items-center justify-center gap-x-2 drop-shadow-2xl'>
                <ArrowUpIcon className='text-green-900 stroke-[3px] w-6 h-6'/>
                <p className='font-bold text-lg text-green-900'>45%</p>
            </div>
          </Card>
          {/* Hero Card Eco Action */}
          <Card className="w-[255px] flex flex-col items-center border-ecoBorder border-[5px] drop-shadow-xl">
            <h1 className='text-textmain font-bold'>Eco Action</h1>
            <img src={ecoActionImage} className='my-3'/>
            <div className='w-32 h-12 rounded-full bg-pillBgGreen bg-opacity-[40%] text-center flex flex-row items-center justify-center gap-x-2 drop-shadow-2xl'>
                <ArrowUpIcon className='text-green-900 stroke-[3px] w-6 h-6'/>
                <p className='font-bold text-lg text-green-900'>45%</p>
            </div>
          </Card>
        </div>

        <div className='flex flex-row my-4 gap-x-4'>
          {/* Hero Card Waste Control Services */}
          <Card className="w-[255px] flex flex-col items-center border-wasteBorder border-[5px] drop-shadow-xl">
            <h1 className='text-textmain font-bold'>Waste Control Services</h1>
            <img src={wasteImage} className='my-3'/>
            <div className='w-32 h-12 rounded-full bg-pillBgRed bg-opacity-[40%] text-center flex flex-row items-center justify-center gap-x-2 drop-shadow-2xl'>
                <ArrowDownIcon className='text-red-900 stroke-[3px] w-6 h-6'/>
                <p className='font-bold text-lg text-red-900'>45%</p>
            </div>
          </Card>
          {/* Hero Card refundables */}
          <Card className="w-[255px] flex flex-col items-center border-refundBorder border-[5px] drop-shadow-xl">
            <h1 className='text-textmain font-bold'>Refundables</h1>
            <img src={refundableImage} className='my-3' />
            <div className='w-32 h-12 rounded-full bg-pillBgGreen bg-opacity-[40%] text-center flex flex-row items-center justify-center gap-x-2 drop-shadow-2xl'>
                <ArrowUpIcon className='text-green-900 stroke-[3px] w-6 h-6'/>
                <p className='font-bold text-lg text-green-900'>45%</p>
            </div>
          </Card> 
        </div>
      </div>
    </div>

    <div className='flex flex-row items-center justify-evenly m-10'>
      {/* Office Presence Card */}

      <div>
        <h1 className='text-center mb-2 font-bold text-textmain text-xl'>Office Presence</h1>

        <Card className='bg-bgmain flex items-center gap-x-8 h-[200px]'>
            <div>
              <img 
                width={110}
                height={80}
                src={employeePresence}/>
            </div>
            <div>
              <h1 className='text-xl text-indigo-600 font-bold mb-4'>May</h1>
              <div className='w-40 h-14 rounded-full bg-pillBgGreen text-center flex flex-row items-center justify-evenly'>
                <ArrowUpIcon className='text-white stroke-[4px] w-6 h-6'/>
                <p className='text-white font-bold text-2xl'>50.1%</p>
              </div>
              <div className='mt-4'>
                <p className='text-sm'>*Based on the month-over-month <br/>analysis of office presence.</p>
              </div>
            </div>
        </Card>
      </div>
      
      {/* Waste Diversion Section */}
      <div className='w-[500px]'>
        <div className='text-center'>
          <h1 className='mb-2 text-center font-bold text-textmain text-xl'>Solid Waste Diversion</h1>
        </div>
        <Card className="w-full bg-bgmain">
          <div className="flex flex-row justify-between">
            <h1 className='text-xl text-indigo-600 font-bold mb-4'>May</h1>  
            <h2 className='text-xl text-indigo-600 font-bold mb-4'>Total (%)</h2>
          </div>
          <BarList data={recycling} className="p-3" />
        </Card>
      </div>
    </div>


    {/* Middle Carousel Section */}
    <div>
      <Carousel
        className='bg-bgmain'
        prevArrow={({ handlePrev }) => (
          <IconButton
            size="lg"
            onClick={handlePrev}
            className='!absolute top-2/4 -translate-y-2/4 left-4 bg-bgsecondary rounded-full'
          >
            <ChevronLeftIcon strokeWidth={3} className='w-6 h-6' />
          </IconButton>
        )} 
        nextArrow={({ handleNext }) => (
          <IconButton
            size="lg"
            onClick={handleNext}
            className='!absolute top-2/4 -translate-y-2/4 !right-4 bg-bgsecondary rounded-full'
          >
            <ChevronRightIcon strokeWidth={3} className='w-6 h-6' />
          </IconButton>
        )}
      >
        {/* Card 1 */}
        <Card className="max-w-3xl mx-auto bg-cascadeBg mt-12 mb-12">
          <div>
            <Flex>
              <div>
                <h1 className='text-3xl text-white font-bold'>Cascade Recovery</h1>
                <h2 className='text-xl text-white font-bold'>Non-Refundable Recycling Experts</h2>
                <div className='w-[500px]'>
                  <p className='text-white mt-4 max-w'>Cascade is responsible for managing and processing non-refundable materials at the SAP office, including paper, cardboard, and glass. From efficient handling to innovative recycling solutions, Cascade Recovery ensures sustainability and a circular economy.  Find out more about Cascade’s sustainability efforts here.</p>
                </div>
              </div>
              <div>
                <img 
                  className='mb-5'
                  height={180}
                  src={cascadeImg}
                />
                <Text className='text-lg text-white font-bold'>April</Text>
                <div className='w-44 h-14 rounded-full bg-pillBgGreen text-center flex flex-row items-center justify-evenly drop-shadow-2xl'>
                  <ArrowUpIcon className='text-white stroke-[4px] w-6 h-6'/>
                  <p className='text-white font-bold text-2xl'>50.1%</p>
                </div>
                <Text className='text-xs text-white mt-2'>*Total Weight: 250 tons</Text>
              </div>
            </Flex>
          </div>
        </Card>


        {/* Card 2 */}
        <Card className="max-w-3xl mx-auto bg-ecoActionBg mt-12 mb-12">
          <div>
            <Flex>
              <div>
                <h1 className='text-3xl text-white font-bold'>Eco-Action</h1>
                <h2 className='text-xl text-white font-bold'>Your In-Office Organic Recycling Experts at SAP</h2>
                <div className='w-[500px]'>
                  <p className='text-white mt-4 max-w'>Eco Action Recycling is Metro Vancouver's top choice for in-office, restaurant, and strata food waste recycling. They take responsibility for managing and recycling organics at SAP, including food scraps, soil paper, and napkins. With their effective solutions, Eco Action Recycling ensures a clean and odor-free environment. Their dedicated team sanitizes bins, while providing freshly cleaned totes during every pickup.</p>
                </div>
              </div>
              <div>
                <img 
                  className='mb-5'
                  height={180}
                  src={ecoServiceCard}
                />
                <Text className='text-lg text-white font-bold'>April</Text>
                <div className='w-44 h-14 rounded-full bg-pillBgGreen text-center flex flex-row items-center justify-evenly drop-shadow-2xl'>
                  <ArrowUpIcon className='text-white stroke-[4px] w-6 h-6'/>
                  <p className='text-white font-bold text-2xl'>50.1%</p>
                </div>
                <Text className='text-xs text-white mt-2'>*Total Weight: 250 tons</Text>
              </div>
            </Flex>
          </div>
        </Card>

        {/* Card 3 */}
        <Card className="max-w-3xl mx-auto bg-wasteBg mt-12 mb-12">
          <div>
            <Flex>
              <div>
                <h1 className='text-3xl text-white font-bold'>Waste Control Services</h1>
                <h2 className='text-xl text-white font-bold'>The Comprehensive Waste Management Partner</h2>
                <div className='w-[500px]'>
                  <p className='text-white mt-4 max-w'>Waste Control Services manages SAP's waste solutions prioritizing landfill diversion. They expertly handle various types of waste, including plastic waste, Styrofoam containers, and food plastic materials Waste Control Services mission aligns with the City of Vancouver's 2040 Zero Waste goal [include link].</p>
                </div>
              </div>
              <div>
                <img 
                  className='mb-5'
                  height={180}
                  src={wasteServiceCard}
                />
                <Text className='text-lg text-white font-bold'>April</Text>
                <div className='w-44 h-14 rounded-full bg-pillBgGreen text-center flex flex-row items-center justify-evenly drop-shadow-2xl'>
                  <ArrowUpIcon className='text-white stroke-[4px] w-6 h-6'/>
                  <p className='text-white font-bold text-2xl'>50.1%</p>
                </div>
                <Text className='text-xs text-white mt-2'>*Total Weight: 250 tons</Text>
              </div>
            </Flex>
          </div>
        </Card>

        {/* Card 4 */}
        <Card className="max-w-3xl mx-auto bg-refundableBg mt-12 mb-12">
          <div>
            <Flex>
              <div>
                <h1 className='text-3xl text-white font-bold'>Refundables</h1>
                <h2 className='text-xl text-white font-bold'>Refundable Recycling for a stronger community</h2>
                <div className='w-[500px]'>
                  <p className='text-white mt-4 max-w'>Cascade Recovery also takes charge of collecting and processing refundable items, including can, bottles, and anything with environmental deposits. SAP’s recycling efforts actively contribute to the Development Disabilities Association [include link], making a positive impact within our local community.</p>
                </div>
              </div>
              <div>
                <img 
                  className='mb-5'
                  height={180}
                  src={refundServiceCard}
                />
                <Text className='text-lg text-white font-bold'>April</Text>
                <div className='w-44 h-14 rounded-full bg-pillBgGreen text-center flex flex-row items-center justify-evenly drop-shadow-2xl'>
                  <ArrowUpIcon className='text-white stroke-[4px] w-6 h-6'/>
                  <p className='text-white font-bold text-2xl'>50.1%</p>
                </div>
                <Text className='text-xs text-white mt-2'>*Total Weight: 250 tons</Text>
              </div>
            </Flex>
          </div>
        </Card>
    </Carousel>
    </div>
    
    {/* WHATS NEW SECTION */}
    {/* <h1
      className='text-xl'
    >What's new, SAP?</h1> */}
    <Carousel 
      className='rounded-lg'
      transition={{ duration: 1.5 }}
      autoplay={true}
      prevArrow={false}
      nextArrow={false}
      loop={true}
    >
        <Card className="max-w-3xl mx-auto bg-bgmain mt-12 mb-12">
          <div>
            <Flex>
              <div className='flex flex-row m-8 gap-x-20'>
                <img 
                 className='rounded-lg'
                  width={230}
                  src={anishaCard}
                /> 
                <div className='w-[350px]'>
                  <h1 className='text-3xl text-textmain font-bold'>SAP Greenest Employer 2023</h1>
                  <p className='text-textmain mt-4 max-w'>Did you know SAP Labs Vancouver is recognized as one of Canada’s Greenest Employers for 2023? 
                  Our goal was to maintain our waste diversion program to meet or exceed 80% of total weight of 13195 kg from 2021. As of the end of 2022, the waste diverted is 97%!</p>
                </div>
              </div>
            </Flex>
          </div>
        </Card>

        <Card className="max-w-3xl mx-auto bg-bgmain mt-12 mb-12">
          <div>
            <Flex>
            <div className='flex flex-row gap-x-32'>
                <img 
                  className=''
                  src={greenTeamCard}
                />    
              </div>
              <div>
                <h1 className='text-3xl text-textmain font-bold'>Meet the 2023 SAP Green Team</h1>
                <div className='w-[400px]'>
                  <p className='text-textmain mt-4 max-w'>The SAP Green Team proudly welcomes Amanna, Anisha, Christopher, Dave, Josh, Kayla, Marlowe and Tiffany from BCIT’s New Media Design & Web Development program as summer interns 2023. The group took on the task of redesign the waste dashboard as a more engaging experience that brings a deeper understanding of SAP’s environmental impacts.</p>
                </div>
              </div>
            </Flex>
          </div>
        </Card>


        <Card className="max-w-3xl mx-auto bg-bgmain mt-12 mb-12">
          <div>
            <Flex>
            <div className='p-8'>
                <img 
                  className='mb-5'
                  height={180}
                  src={ddaLogo}
                />    
              </div>
              <div className='p-4'>
                <h1 className='text-3xl text-textmain font-bold'>DDA Donations 2023 SAP Green Team</h1>
                <div className='w-[350px]'>
                  <p className='text-textmain mt-4 max-w'>Your recycling efforts raised a total of $[number] last month for the Developmental Disabilities Association. The Developmental Disabilities Association provides community-based programs and services to individuals and their families living with developmental disabilities in the Vancouver and Richmond area.</p>
                </div>
              </div>
            </Flex>
          </div>
        </Card>


        <Card className="max-w-3xl mx-auto bg-bgmain mt-12 mb-12">
          <div>
            <img 
              className='mb-5'
              height={180}
              src={napkinHero}
              />    
          </div>
        </Card>
      </Carousel>

    {/* Footer Bar */}
      <div className='bg-textmain flex p-2'>
        <div className='flex items-center justify-center basis-11/12'>
          <Footer/>
        </div>
        <div className='flex items-center justify-center basis-1/12'>
          <img 
          className='w-20 h-20'
          src={footerLogo}
          />
        </div>
      </div>

        






  
  </div>
);
