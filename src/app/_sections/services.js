import Link from 'next/link';

export default function Diseases() {
  return (
    <div className="container mx-auto">
      <section>
        <div className="mx-auto text-center">
          <h2 className="text-5xl font-medium font-serif my-20 text-pink-700">Comprehensive Treatment for Various Conditions</h2>
          <div className="px-10 lg:px-20">
            <ul className="bg-pink-50  mb-20 p-10 list-disc rounded-xl text-left text-pink-700 text-lg space-y-4">
              <li className="font-medium">Infertility / Childlessness (for both women and men)</li>
              <li className="font-medium">Treatment for uterine (womb) fibroids</li>
              <li className="font-medium">Ovarian problems</li>
              <li className="font-medium">Contraceptive advice</li>
              <li className="font-medium">Treatment for PCOD / PCOS (Polycystic Ovarian Disease/Syndrome)</li>
              <li className="font-medium">Treatment for leucorrhoea (white discharge)</li>
              <li className="font-medium">Problems related to menstruation and monthly cycles (Menstrual Bleeding)</li>
              <li className="font-medium">Treatment for Menopause-related issues (problems due to cessation of menstruation)</li>
              <li className="font-medium">Treatment for breast lumps, tumors, and cancer</li>
              <li className="font-medium">Treatment for uterine prolapse (womb falling out)</li>
              <li className="font-medium">Beneficial treatments for male genital and sexual disorders:</li>
              <ul className="ml-6 text-pink-600">
                <li>a) Impotence</li>
                <li>b) Premature ejaculation</li>
                <li>c) Weakness or lack of rigidity</li>
                <li>d) Nocturnal emissions (nightfall)</li>
                <li>e) Semen-related issues (Dhatu Rog)</li>
                <li>f) Childless couples</li>
                <li>g) Low sperm count</li>
              </ul>
            </ul>
          </div>
        </div>
      </section>
      <section className="mx-auto text-center">
        <h6 id="team" className="text-pink-700 text-3xl font-bold mt-28 mb-5">Our Doctor</h6>

        <div className='w-[500px] bg-peach my-10 py-3 px-15 mx-auto rounded-[0.875rem] shadow-2xl'>
          <img src='/uterocarepic.png' className='h-[320px] w-[320px] mx-auto py-10 px-10 rounded-full' />
          <div>
            <p className='text-2xl text-pink-700'>Dt. Menka</p>
            <h5 className='text-md text-pink-500 pb-5'>BHMS Banaras</h5>
            <p className='text-justify text-pink-600 mx-10 my-7'>Step into the realm of holistic healing guided by Dr. Menka, a dedicated female homeopathic physician. With a nurturing touch and a deep understanding of natural remedies, Dr. Menka offers personalized care that addresses the root causes of illness and promotes overall well-being. Her expertise in homeopathy is complemented by her intuitive insights, allowing her to empower her patients to embrace their innate healing abilities and embark on a journey towards optimal health and vitality. With compassion and wisdom, she creates a nurturing environment where patients can experience profound healing and transformation.</p>
          </div>
        </div>


      </section>
    </div>
  );
}
