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
import Form from './_sections/form';

export default function Home() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Uterocare - Trusted Women's Health Specialists | Infertility, PCOS, Menstrual Care</title>
        <meta name="description" content="Expert care for women's health: PCOS, infertility, menstrual issues, and fibroids. Trusted by thousands. Visit Uterocare for personalized solutions." />
        <meta name="keywords" content="women's health, PCOS treatment, infertility specialists, menstrual health care, uterine fibroids, reproductive health solutions, Uterocare clinic" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Uterocare - Trusted Women's Health Specialists" />
        <meta property="og:description" content="Specialized care for women's health: infertility, PCOS, menstrual issues, and more. Trusted by thousands. Book your consultation now." />
        <meta property="og:image" content="https://www.uterocare.com/images/clinic-banner.jpg" />
        <meta property="og:url" content="https://www.uterocare.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@UterocareClinic" />
        <meta name="twitter:title" content="Uterocare - Trusted Women's Health Specialists" />
        <meta name="twitter:description" content="Get expert care for women's health issues at Uterocare. Trusted for infertility treatments, PCOS care, menstrual health, and more." />
        <meta name="twitter:image" content="https://www.uterocare.com/images/clinic-banner.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.uterocare.com" />

        {/* Structured Data */}
      </Head>
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

        {/*Testimonial section*/}
        <Form/>

        {/*Footer Section */}
        <Footer />
      </div >
    </>
  );
}
