// pages/contact.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Get in Touch with UteroCare
        </title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center p-4">
          <h1 className="text-4xl font-bold mb-4">Contact information</h1>
          <h1>We are here to help you every step of the way. Whether you have questions about our services or would like to schedule a consultation, our friendly team is available to assist you.
          </h1>
          <p className="max-w-2xl text-center">
            Phone: +91-XXXXXXXXXX<br/>
            Email: support@uterocare.com<br/>
            Address: 64 Rajendra Nagar Naubasta, Kanpur 208021
          </p>
          Submit your inquiry, and one of our fertility specialists will get back to you shortly.
        </main>
        <Footer />
      </div>
    </>
  );
}
