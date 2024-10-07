// components/HeroSection.js
import Button from './Button';

export default function HeroSection() {
  return (
    <section className="min-h-screen px-10 flex flex-col items-center justify-center text-center bg-uteropink">
      <h1 className="text-pink-700  text-4xl font-bold mb-8">
        UteroCare - Your Partner in Fertility Solutions
      </h1>
      <p className="text-pink-700 text-lg max-w-2xl">
        At UteroCare, we understand the emotional and physical challenges that come with infertility. We are dedicated to offering compassionate, personalized care and advanced fertility treatments to help individuals and couples achieve their dream of parenthood.
        Our comprehensive fertility solutions are backed by cutting-edge reproductive technologies, expert care, and a commitment to holistic well-being. Whether you are just beginning your fertility journey or seeking specialized treatment, we are here to guide you every step of the way.
        Start your journey today with UteroCare.
      </p>
      <Button />
    </section>
  );
}
