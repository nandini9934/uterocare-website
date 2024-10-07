// pages/services.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services - UteroCare</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex flex-col justify-center p-4 bg-white">
          <h1 className="text-4xl font-bold mb-4 text-center">Our Fertility Services</h1>
          <p className="font-bold text-xl ">
            UteroCare offers a wide range of fertility services, customized to meet the unique needs of each patient. Our team of fertility experts uses advanced reproductive technologies and individualized treatment plans to provide you with the best possible chances of success.
          </p><br/>
          <ol className="font-medium space-y-3">
            <li><h5 className='font-bold'>1. Fertility Consultations:</h5> Our fertility consultations are designed to understand your medical history, evaluate your fertility health, and develop a personalized treatment plan. We believe in providing detailed information and helping you make informed decisions about your reproductive health.
            </li>
            <li><h5 className='font-bold'>2. In-Vitro Fertilization (IVF):</h5> IVF is one of the most advanced and effective fertility treatments available. Our state-of-the-art IVF lab uses cutting-edge technology to maximize the chances of conception. Whether you are dealing with unexplained infertility, age-related issues, or other medical conditions, IVF can offer a solution.
            </li>
            <li><h5 className='font-bold'>3. Intrauterine Insemination (IUI):</h5> IUI is a less invasive fertility treatment that involves placing sperm directly into the uterus. It can be a first-line treatment for couples experiencing difficulty conceiving due to mild fertility challenges.
            </li>
            <li><h5 className='font-bold'>4. Egg and Sperm Freezing:</h5> Our egg and sperm freezing services are ideal for those who want to preserve their fertility for the future. Whether due to medical reasons or personal choice, cryopreservation can help you have more options down the road.
            </li>
            <li><h5 className='font-bold'>5. Fertility Preservation for Cancer Patients:</h5> We offer specialized fertility preservation services for individuals undergoing cancer treatment. With techniques such as egg, sperm, and embryo freezing, we help protect your fertility during challenging times.
            </li>
            <li><h5 className='font-bold'>6. Reproductive Surgery:</h5> Our expert surgeons offer a variety of minimally invasive reproductive surgeries to treat conditions such as endometriosis, fibroids, and blocked fallopian tubes, which may be hindering your ability to conceive.
            </li>
            <li><h5 className='font-bold'>7. Hormonal Assessments & Treatments:</h5> We provide thorough hormonal evaluations and treatments to address conditions like polycystic ovary syndrome (PCOS), irregular periods, and other endocrine-related fertility challenges.
            </li>
          </ol><br/>
          <h2 className='font-bold'>Schedule your consultation with UteroCare today and explore the fertility options that are right for you.
          </h2>
        </main>
        <Footer />
      </div>
    </>
  );
}
