import React from 'react';
import '../components/Services.css'
import Header from '../components/Header';
import Card from '../components/Card';
import ClientR from '../components/ClientR';
import Newbot from '../components/newbot';

export const Services = () => {
    return (
        <div className='services'>
            <Header imgtext={"Discover Our Grooming Services"} />
            <h1 className='main-heading'> "Tailored to Elevate <br/> Your Style and Confidence"</h1>
            <p className='main-para'> Welcome to our services page, where excellence meets style. Discover the finest grooming experiences tailored just for you. From classic haircuts to precision beard trims and soothing shaves, our skilled barbers are here to elevate your look and boost your confidence. Explore our curated selection of services designed to cater to your individual needs and preferences. Step into our world of expertise and relaxation, where every visit promises unparalleled care and attention to detail. Let us redefine your grooming routine and leave you feeling refreshed, revitalized, and ready to conquer the day. Your journey to a sharper, more refined version of yourself starts here.</p>

            
            <p className='heading2'>Pricing & Details</p>
            <div className="cards">
            <Card cardHeading={"'Haircut'"} price={"20$"} cardDetails={"Our haircut package offers more than just a trim. Indulge in a refreshing wash, a precision cut tailored to your style, and a professional finish that leaves you looking sharp and confident."} />
            <Card cardHeading={"'Beard Trim'"} price={"15$"} cardDetails={"Experience the ultimate in beard care with our grooming package. Enjoy meticulous shaping, expert styling, and soothing treatments that leave your beard looking its best."} />
            <Card cardHeading={"'Coloring'"} price={"30$"} cardDetails={"Transform your look with our coloring package. From subtle highlights to bold transformations, our skilled colorists use premium products to achieve your desired shade with precision and care."} />
            </div>
            <hr />

            <p className='heading2'>Client Haircuts</p>
            <p style={{color: "orange", textAlign: "center"}}>Get Your Customized Look Today!</p>
            
            <div className="clientr">
            <ClientR img={"/pics/client1.jpeg"} />
            <ClientR img={"/pics/client2.jpeg"} />
            <ClientR img={"/pics/client3.jpeg"} />
            <ClientR img={"/pics/client4.jpeg"} />
            <ClientR img={'/pics/client5.jpeg'} />
            <ClientR img={"/pics/client6.jpeg"} />
            <ClientR img={"/pics/client7.jpeg"} />
            <ClientR img={"/pics/client8.jpeg"} />
            <ClientR img={"/pics/client1.jpeg"} />
            </div>

            <Newbot />
            
        </div>
    )
}

export default Services