import { Card, Flex } from '@tremor/react';
import { Carousel } from '@material-tailwind/react';

import greenTeamCard from '../assets/SAPGREENTEAMCARDCOLLECTIONV2.png';
import napkinHero from '../assets/NapkinHeroV2.png';
import ddaLogo from '../assets/DDALOGO.png';
import anishaCard from '../assets/Anisha_CardPhoto.jpg';


function NewsSection() {
    return (
    <div>
        <h1 className='text-textmain text-[40px] font-bold text-center mt-12 mb-8'>What's new, SAP?</h1>
        <Carousel 
        className='rounded-lg' 
        transition={{ duration: 1.5 }}
        autoplay={true}
        prevArrow={false}
        nextArrow={false}
        loop={true}
        > 
            <Card className="max-w-3xl mx-auto bg-bgmain mb-12">
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

            <Card className="max-w-3xl mx-auto bg-bgmain mb-12">
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


            <Card className="max-w-3xl mx-auto bg-bgmain mb-12">
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


            <Card className="max-w-3xl mx-auto bg-bgmain mb-12">
            <div>
                <img 
                className='mb-5'
                height={180}
                src={napkinHero}
                />    
            </div>
            </Card>
        </Carousel>
    </div>
    );
}

export default NewsSection;