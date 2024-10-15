// pages/index.js
import Head from 'next/head';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './_sections/header';
import Footer from './_sections/footer';
import Navbar from './_sections/navbar';
import Services from './_sections/services';
import Testimonial from './_sections/testimonial';
import Health from './_sections/health';
import AboutUs from './_sections/about';

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 divide-y divide-stone-300" >
        {/* Navbar section*/}
        <Navbar />
        {/* Header Section */}

        <Header />

        {/* About Section */}
        <AboutUs />

        {/* Services Section */}
        <Services />

        {/*Health Section*/}
        <Health />

        {/*Testimonial section*/}
        <Testimonial />

        {/*Footer Section */}
        <Footer />
      </div >
    </>
  );
}
