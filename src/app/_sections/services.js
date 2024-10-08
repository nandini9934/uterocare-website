import Link from 'next/link';
import { Card, CardBody, CardHeader, CardFooter } from '@nextui-org/card';

export default function Services() {
  return (
    <div className="container mx-auto"> < section >
      <div className="mx-auto text-center">
        <h2 className="text-5xl font-medium font-serif my-20 text-pink-700">Holistic Support and Counseling</h2>
        <div className='lg:grid lg:grid-cols-3 lg:items-center lg:px-20'>
          <img src='/healthier.avif' className='lg:col-span-1 lg:rounded-[4rem] rounded-[5.5rem] px-20 py-20 lg:p-11 object-cover' />
          <div className="text-center px-10 lg:col-span-2 lg:text-left">
            <h2 className='font-medium lg:text-5xl text-4xl font-serif text-pink-600 mb-6'>Expertise and Experience</h2>
            <p className='text-pink-500 text-lg lg:text-xl'>Our team of highly skilled fertility specialists, embryologists, and support staff bring decades of experience in the field of reproductive medicine. We stay at the forefront of the latest advancements in fertility treatments, ensuring that our patients receive the most up-to-date, evidence-based care.</p>
            <div className='flex justify-center lg:justify-start my-5 lg:my-7'>
              <button className="flex  bg-pink-600 hover:bg-pink-200 text-white hover:text-pink-700 border-2 border-pink-600 font-bold py-2 px-4 rounded-xl ">Get your welcome kit</button>
            </div>
          </div>
        </div>



        <div className='hidden lg:grid lg:grid-cols-3 lg:items-center lg:px-20'>
          <div className="text-center px-10 lg:col-span-2 lg:text-left">
            <h2 className='font-medium text-5xl font-serif text-pink-600 mb-6'>Personalized Treatment Plans</h2>
            <p className='text-pink-500 text-xl'>Every couple’s fertility journey is different, and so are the solutions. We take the time to get to know you, your history, and your goals, crafting a customized treatment plan that gives you the highest chances of success.</p>
            <div className='lg:justify-left my-5 lg:my-7'>
              <button className="flex  bg-pink-600 hover:bg-pink-200 text-white hover:text-pink-700 border-2 border-pink-600 font-bold py-2 px-4 rounded-xl ">Talk to a specialist</button>
            </div>
          </div>
          <img src='/doctors.avif' className='lg:col-span-1 rounded-[2.5rem] px-20 py-20 lg:p-5 object-cover' />
        </div>


        <div className='lg:hidden'>
          <img src='/doctors.avif' className='rounded-[5.5rem] px-20 py-20 lg:h-screen lg:w-full object-cover' />
          <div className="text-center px-10 pb-5">
            Every couple’s fertility journey is different, and so are the solutions. We take the time to get to know you, your history, and your goals, crafting a customized treatment plan that gives you the highest chances of success.
            <p className='text-pink-500 text-lg'> </p>
          </div>
          <h2 className='font-medium text-4xl font-serif text-pink-600 mb-6'>Personalized Treatment Plans</h2>
          <div className='flex justify-center my-5'>
            <button className="flex  bg-pink-600 hover:bg-pink-200 text-white hover:text-pink-700 border-2 border-pink-600 font-bold py-2 px-4 rounded-xl">Talk to a specialist</button>
          </div>
        </div>


        <div className='lg:grid lg:grid-cols-3 lg:items-center lg:px-24'>
          <img src='/mobile.avif' className='lg:col-span-1 lg:rounded-[3rem] rounded-[5.5rem] px-20 py-20 lg:p-8 lg:w-full object-cover' />
          <div className="text-center px-10 lg:col-span-2 lg:text-left">
            <h2 className='font-medium text-4xl lg:text-5xl font-serif text-pink-600 mb-6'>High Success Rates</h2>
            <p className='text-pink-500 text-lg lg:text-xl'>our success rates reflect our commitment to excellence. We are proud to help countless individuals and couples realize their dream of parenthood, and we continuously strive to improve our outcomes.</p>
            <div className='flex justify-center lg:justify-start my-5 lg:my-7'>
              <button className="flex  bg-pink-600 hover:bg-pink-200 text-white hover:text-pink-700 border-2 border-pink-600 font-bold py-2 px-4 rounded-xl ">Chat now</button>
            </div>
          </div>
        </div>



        <div className='hidden lg:grid lg:grid-cols-3 lg:items-center lg:px-24'>
          <div className="text-center px-10 lg:col-span-2 lg:text-left">
            <h2 className='font-medium text-5xl font-serif text-pink-600 mb-6'>Tailored Diet Plans Just for You</h2>
            <p className='text-pink-500 text-xl'>Experience the benefits of a diet plan designed specifically for your needs. Our personalized plans consider your unique goals, preferences, and health conditions to ensure optimal results.</p>
            <div className='lg:justify-left my-5 lg:my-7'>
              <button className="flex  bg-pink-600 hover:bg-pink-200 text-white hover:text-pink-700 border-2 border-pink-600 font-bold py-2 px-4 rounded-xl ">Get your Personalized Plan</button>
            </div>
          </div>
          <img src='/nutrients.avif' className='lg:col-span-1 rounded-[2.5rem] px-20 py-20 lg:p-5 object-cover' />
        </div>

        <div className='lg:hidden'>
          <img src='/nutrients.avif' className='rounded-[5.5rem] px-20 py-20 lg:h-screen lg:w-full object-cover' />
          <div className="text-center px-10">
            <h2 className='font-medium text-4xl font-serif text-pink-600 mb-6'>Tailored Diet Plans Just for You</h2>
            <p className='text-pink-500 text-lg'>Experience the benefits of a diet plan designed specifically for your needs. Our personalized plans consider your unique goals, preferences, and health conditions to ensure optimal results.</p>
          </div>
          <div className='flex justify-center my-5'>
            <button className="flex  bg-pink-600 hover:bg-pink-200 text-white hover:text-pink-700 border-2 border-pink-600 font-bold py-2 px-4 rounded-xl">Get your Personalized Plan</button>
          </div>
        </div>



        <h6 id="pricing" className="text-pink-400 font-bold mt-28 mb-5">Pricing</h6>
        <h2 className="font-medium text-5xl font-serif text-pink-700 mb-6">Homeopathy: A Natural Approach to Fertility</h2>
        <p className='px-10 text-pink-500 text-base'>Most Affordable plans accross the world</p>
        {/* <div className='grid grid-cols-1 lg:grid lg:grid-cols-2 lg:gap-8 lg:mx-96 mx-14'>
          <div className='col-span-1 w-full bg-uteropink my-10 py-3 px-15 justify-center rounded-[0.875rem] shadow-xl'>
            <img src='/bottle.webp' className='h-72 w-72 mx-auto py-10 px-10 rounded-full' />
            <div className='justify-center font-medium text-3xl text-pink-600 font-serif mb-[1rem]'>
              <p>Nutritional diet plan</p>
            </div>
            <div className='lg:text-left text-start text-pink-500 px-4 text-xs lg:text-sm pl-[2rem] lg:pl-[3rem] lg:pt-5  space-y-4 mb-4'>
              <li>Customized diet plan on daily basis</li>
              <li>Weekly progress tracking on daily</li>
              <li>Access to verified nutrition content</li>
              <li>Monthly full body checkups</li>
              <li>Direct access to certified dieticians</li>
              <li>Priority customer support</li>
            </div>
            <div className='justify-center mb-6'>
              <button className="bg-pink-600 hover:bg-pink-200 text-white hover:text-pink-700 border-2 border-pink-600 font-bold text-base py-3 mt-3 px-4 rounded-xl">Book Now</button>
            </div>
          </div>
          <div className='col-span-1 w-full bg-uteropink my-10 py-3 px-4 justify-center rounded-[0.875rem] shadow-xl'>
            <img src='/pregnancy.gif' className='h-72 w-72 mx-auto py-10 px-10 rounded-full' />
            <div className='justify-center font-medium text-3xl mb-4 text-pink-600 font-serif'>
              <p>Pregnancy diet plan</p>
            </div>
            <div className='lg:text-left text-start text-pink-500 px-4 text-xs lg:text-sm pl-[1rem] lg:pl-[2rem] lg:pt-5 space-y-4 mb-4'>
              <li>Tailored Diet Plans for each trimester</li>
              <li>Monthly consultation with dietician</li>
              <li>Essential nutrition content</li>
              <li>Post delivery diet plans</li>
              <li>Direct access to certified dieticians</li>
              <li>Priority customer support</li>
            </div>
            <div className='justify-center mb-6'>
              <button className="bg-pink-600 hover:bg-pink-200 text-white hover:text-pink-700 border-2 border-pink-600 font-bold text-base py-3 mt-3 px-4 rounded-xl">Book Now</button>
            </div>
          </div>
        </div> */}
        <div className="text-pink-400 mt-10 mb-5 px-20">Homeopathy is a system of medicine based on the principle of "like cures like," meaning that substances that cause symptoms in a healthy person can, in minute doses, treat similar symptoms in a sick person. The homeopathic approach is holistic, meaning it treats the individual as a whole rather than focusing on specific symptoms. This approach is particularly beneficial in infertility cases, where the emotional, psychological, and physical health of the individual are deeply interconnected.</div>
        <div className="text-pink-400 mt-4 mb-5 px-20">Homeopathic remedies are natural and derived from plant, mineral, and animal sources. They are highly diluted and customized to each patient’s unique needs. In the context of infertility, homeopathy seeks to restore balance to the body, promote overall wellness, and support the body’s natural ability to conceive.</div>

        {/* <h6 id="team" className="text-pink-400 font-bold mt-28 mb-5">Team</h6>
        <h2 className="font-medium text-5xl font-serif text-pink-700 mb-6">Meet Your Health Guides</h2>
        <p className='px-14 text-pink-500 text-base'>Meet our expert dieticians to your well-being. With years of experience and a passion for nutrition, they provide personalized support and scientifically-backed advice. Trust our professionals to guide you towards your health goals with care and expertise.</p>
        <div className='grid grid-cols-1 lg:grid lg:grid-cols-4 lg:gap-8 mx-14'>
          <div className='col-span-1 w-full bg-uteropink my-10 py-3 px-15 justify-center rounded-[0.875rem] shadow-xl'>
            <img src='/Azra.jpg' className='h-72 w-72 mx-auto py-10 px-10 rounded-full' />
            <div>
              <p className='text-xl text-pink-700'>Dt. Azra Khan</p>
              <h5 className='text-sm text-pink-500 pb-5'>Clinical dietician</h5>
            </div>
          </div>
          <div className='col-span-1 w-full bg-uteropink my-10 py-3 px-15 justify-center rounded-[0.875rem] shadow-xl'>
            <img src='Arti.jpg' className='h-72 w-72 mx-auto py-10 px-10 rounded-full' />
            <div>
              <p className='text-xl text-pink-700'>Dt. Arti Kesharwani</p>
              <h5 className='text-sm text-pink-500 pb-5'>Clinical dietician and diabetes educator</h5>
            </div>
          </div>
          <div className='col-span-1 w-full bg-uteropink my-10 py-3 px-15 justify-center rounded-[0.875rem] shadow-xl'>
            <img src='/Nainsi.jpg' className='h-72 w-72 mx-auto py-10 px-10 rounded-full' />
            <div>
              <p className='text-xl text-pink-700'>Dt. Nainsi Vishwakarma</p>
              <h5 className='text-sm text-pink-500 pb-5'>Clinical dietician specialist in bone disease, weight loss and weight gain</h5>
            </div>
          </div>
          <div className='col-span-1 w-full bg-uteropink my-10 py-3 px-15 justify-center rounded-[0.875rem] shadow-xl'>
            <img src='/Neha.jpg' className='h-72 w-72 mx-auto py-10 px-10 rounded-full' />
            <div>
              <p className='text-xl text-pink-700'>Dt. Neha Shakya</p>
              <h5 className='text-sm text-pink-500 pb-5'>Clinical nutritionist & diet consultant |<br />Diabetes Educator</h5>
            </div>
          </div>
        </div> */}
      </div>
    </section ></div>
  )
}