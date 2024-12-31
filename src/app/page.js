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
      <Head>
        {/* Primary Meta Tags */}
        <title>utrocare - Comprehensive Women's Health Solutions</title>
        <meta name="description" content="utrocare offers expert care for women's health, including infertility, PCOS, menstrual issues, uterine fibroids, and more. Trusted by thousands for quality treatment." />
        <meta name="keywords" content="women's health, infertility treatment, PCOS treatment, menstrual health, uterine care, fibroids, uterine cancer, reproductive health, utrocare" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content="utrocare - Comprehensive Women's Health Solutions" />
        <meta property="og:description" content="Explore expert care for women's health issues like infertility, PCOS, uterine fibroids, and more. Join thousands of women who trust utrocare." />
        <meta property="og:image" content="https://example.com/images/utrocare-banner.jpg" />
        <meta property="og:url" content="https://www.utrocare.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="utrocare - Comprehensive Women's Health Solutions" />
        <meta name="twitter:description" content="Get expert care for women's health issues at utrocare. Trusted for infertility treatments, PCOS care, menstrual health, and more." />
        <meta name="twitter:image" content="https://example.com/images/utrocare-banner.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.utrocare.com" />
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

        {/*Footer Section */}
        <Footer />
      </div >
    </>
  );
}
