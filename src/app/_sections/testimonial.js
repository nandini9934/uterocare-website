import { Card, CardBody, CardHeader, CardFooter } from '@nextui-org/card';

export default function Testimonial() {
  return (
    < section className="container mx-auto">
      <h6 className="text-pink-400 font-bold mt-28 mb-5 text-center text-lg">Testimonials</h6>
      <h2 className="font-medium text-4xl font-serif text-pink-700 mx-20 mb-6 text-center">See what people say about us</h2>
      <div className='mx-14 grid grid-cols-1 lg:grid-cols-3 lg:grid lg:gap-6 '>
        <div className='col-span-1 rounded-lg shadow-lg w-full bg-uteropink mr-3 my-20 py-3 px-15'>
          <div className='text-start font-medium mx-5 text-pink-500 text-sm space-y-4 py-4'>
            "Uterocare has truly transformed our journey toward parenthood. The tailored plans and holistic approach addressed our specific fertility concerns, making us feel hopeful and supported. Their expert team provided us with personalized guidance, practical solutions, and constant encouragement. Thanks to Uterocare, we’re now on the path to achieving our dream of starting a family."
          </div>
          <div className="flex space-x-1 justify-center">
            <i className="fas fa-star text-pink-500 text-3xl"></i>
            <i className="fas fa-star text-pink-500 text-3xl"></i>
            <i className="fas fa-star text-pink-500 text-3xl"></i>
            <i className="fas fa-star text-pink-500 text-3xl"></i>
            <i className="fas fa-star text-pink-500 text-3xl"></i>
          </div>
          <img src='/pic5.png' className='h-36 w-36 pt-5 pb-3 px-4 mx-auto rounded-full' />
          <p className='text-center font-bold text-base'>-- Jacob Mood</p>
          <p className='text-center text-pink-500 text-xs mb-5'>IT Professional</p>
        </div>
        <div className='col-span-1 rounded-lg shadow-lg w-full bg-uteropink mr-3 my-20 py-3 px-15'>
          <div className='text-start font-medium mx-5 text-pink-500 text-sm space-y-4 py-4'>
            "Uterocare has truly transformed our journey toward parenthood. The tailored plans and holistic approach addressed our specific fertility concerns, making us feel hopeful and supported. Their expert team provided us with personalized guidance, practical solutions, and constant encouragement. Thanks to Uterocare, we’re now on the path to achieving our dream of starting a family."
          </div>
          <div className="flex space-x-1 justify-center">
            <i className="fas fa-star text-pink-500 text-3xl"></i>
            <i className="fas fa-star text-pink-500 text-3xl"></i>
            <i className="fas fa-star text-pink-500 text-3xl"></i>
            <i className="fas fa-star text-pink-500 text-3xl"></i>
            <i className="fas fa-star text-pink-500 text-3xl"></i>
          </div>
          <img src='/pic3.png' className='h-36 w-36 pt-5 pb-3 px-4 mx-auto rounded-full' />
          <p className='text-center font-bold text-base'>-- Mayra Smith</p>
          <p className='text-center text-pink-500 text-xs mb-5'>IT Professional</p>
        </div>
        <div className='col-span-1 rounded-lg shadow-lg w-full bg-uteropink mr-3 my-20 py-3 px-15'>
          <div className='text-start font-medium mx-5 text-pink-500 text-sm space-y-4 py-4'>
            "Uterocare has truly transformed our journey toward parenthood. The tailored plans and holistic approach addressed our specific fertility concerns, making us feel hopeful and supported. Their expert team provided us with personalized guidance, practical solutions, and constant encouragement. Thanks to Uterocare, we’re now on the path to achieving our dream of starting a family."
          </div>
          <div className="flex space-x-1 justify-center">
            <i className="fas fa-star text-pink-500 text-3xl"></i>
            <i className="fas fa-star text-pink-500 text-3xl"></i>
            <i className="fas fa-star text-pink-500 text-3xl"></i>
            <i className="fas fa-star text-pink-500 text-3xl"></i>
            <i className="fas fa-star text-pink-500 text-3xl"></i>
          </div>
          <img src='/pic4.png' className='h-36 w-36 pt-5 pb-3 px-4 mx-auto rounded-full' />
          <p className='text-center font-bold text-base'>-- Johnson Kinley</p>
          <p className='text-center text-pink-500 text-xs mb-5'>IT Professional</p>
        </div>
      </div>
    </section >
  )
}