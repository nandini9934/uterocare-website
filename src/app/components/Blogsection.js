// components/Blogsection.js
import Button from './Button';

export default function BlogSection() {
  return (
    <section className="min-h-screen px-10 flex flex-col items-center justify-center text-center bg-uteropink">
      <h1 className="text-pink-700  text-4xl font-bold mb-8">
      Fertility Insights from UteroCare
      </h1>
      <p className="text-pink-700 text-lg max-w-2xl">
      Stay informed with expert insights, tips, and the latest advancements in fertility treatments. Our blog provides valuable information to help you navigate your fertility journey with confidence.
      </p>
      <Button />
    </section>
  );
}
