// pages/about.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - UteroCare</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center p-4 bg-white text-black">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="max-w-2xl text-center">
            At UteroCare, we believe that every fertility journey is unique and deserves personalized care. Our mission is to provide individuals and couples with comprehensive solutions to infertility, combining the latest in medical technology with holistic, compassionate support.

            Founded by a team of renowned fertility specialists, UteroCare has become a trusted name in reproductive healthcare. Our multidisciplinary team works closely with each patient, offering a range of treatments from basic fertility assessments to advanced reproductive technologies, including IVF, IUI, and egg/sperm freezing.

            With a deep understanding of the emotional and physical complexities of infertility, UteroCare prioritizes mental and emotional well-being alongside cutting-edge fertility treatments. We strive to create a nurturing, supportive environment where hope thrives, and dreams of parenthood can be realized.

            Our core values of empathy, professionalism, and excellence guide everything we do. Let us walk this journey with you and provide the expert care you deserve.
          </p>
        </main>
        <Footer />
      </div>
    </>
  );
}
