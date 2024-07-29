import React from 'react';
import Header from '../components/Header';
import Imgntext from '../components/imgntext';
import Newbot from '../components/newbot';

function About() {
  return (
    <div>
      <Header imgtext={"Get Your Perfect Cut Today!"} />
      <Imgntext img={"/pics/aboutus1.jpg"} heading={"ABOUT US"} text={"Welcome to Clippers, your premier destination for grooming and style. At Slippers, we understand the essence of a well-groomed appearance and strive to provide you with top-notch services tailored to your unique needs. With a team of skilled professionals dedicated to excellence, we offer a wide range of grooming solutions to elevate your style quotient. From precision haircuts to meticulous beard trims, we ensure every detail is perfected to your satisfaction. Step into our welcoming environment where comfort meets sophistication, and experience the difference at Slippers. Let us redefine your grooming routine and help you look and feel your absolute best."}/>
      <Imgntext img={"/pics/aboutus2.jpg"} heading={"GROWTH JOURNEY"} text={"Embarking on a journey of growth, Clippers has evolved into a beacon of excellence in the grooming industry. With a steadfast commitment to quality and innovation, we have expanded our services, honed our skills, and cultivated a loyal clientele. Our journey is marked by continuous learning, adapting to trends, and embracing new technologies. Through dedication and passion, we have achieved milestones, forged partnerships, and established ourselves as a trusted name in the grooming landscape. Join us as we continue to grow and elevate the standards of excellence in grooming."} />
      <Imgntext img={"/pics/aboutus3.jpg"} heading={"OUR MISSION"} text={"At Clippers, our mission is simple yet profound: to empower individuals to embrace their unique style and confidence. We believe that grooming is more than just a service—it's an expression of self-care and identity. Our mission is to provide a nurturing environment where clients feel valued, understood, and inspired to explore their personal aesthetic. Through expert craftsmanship and personalized attention, we aim to enhance each individual's natural beauty and charisma. With every appointment, we strive to leave a lasting impression, fostering a sense of empowerment and self-assurance in our clients' lives."} />
      <Newbot />
    </div>
  );
}

export default About;
