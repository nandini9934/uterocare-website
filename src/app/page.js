// pages/index.js
import Head from 'next/head';
import Header from './components/Header';
import HeroSection from './components/Herosection';
import Footer from './components/Footer';
import SuccessStories from './components/SuccessStories';
import BlogSection from './components/Blogsection';

export default function Home() {
  return (
    <>
      <Head>
        <title>UteroCare - Infertility Solutions</title>
      </Head>

      <div className="flex flex-col min-h-screen">
        <Header />
        <HeroSection />
        <SuccessStories/>
        <BlogSection/>
        <Footer />
      </div>
    </>
  );
}
