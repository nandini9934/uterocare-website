// components/HeroSection.js
import Button from './Button';

export default function SuccessStories() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-uteropink">
      <h1 className="text-pink-700  text-4xl font-bold mb-8">
      Our Patients Success Stories
      </h1>
      <p className="text-pink-700 text-lg max-w-2xl">
      At UteroCare, nothing brings us more joy than seeing our patients achieve their dreams of starting a family. Here are just a few of the many success stories that inspire us every day.
      </p>
      <Button />
    </section>
  );
}
