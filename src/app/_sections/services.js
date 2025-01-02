import Link from 'next/link';

export default function Diseases() {
  return (
    <div className="container mx-auto">
      <section>
        <div className="mx-auto text-center">
          <h2 className="text-5xl font-medium font-serif my-20 text-pink-700">Comprehensive Treatment for Various Conditions</h2>
          <div className="px-10 lg:px-20">
            <ul className="bg-pink-50 p-10 list-disc rounded-xl text-left text-pink-700 text-lg space-y-4">
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
    </div>
  );
}
