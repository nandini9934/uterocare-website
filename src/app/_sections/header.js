export default function Header() {
  return (
    <div className="lg:bg-uteropink">
      <div className="container mx-auto">
        <section className="flex items-center justify-center lg:block bg-uteropink py-[2rem] px-[1.5rem] lg:py-[5rem] lg:pt-[3rem] lg:px-[3.5rem] md:px-8">
          <div className="grid grid-cols-1 items-start lg:grid lg:grid-cols-3 gap-4 items-center md:justify-between">
            {/* Left Content */}
            <div className="col-span-1 lg:col-span-2 lg:mb-20 text-center lg:text-left">
              <h1 className="text-[1.5rem] xl:text-5xl md:text-2xl font-bold leading-tight font-amsterdam">
                <span className="text-pink-900">PLAN</span>
                <span className="text-pink-500 ml-2">YOUR</span>
              </h1>
              <h1 className="text-[1.5rem] xl:text-5xl md:text-2xl font-bold text-pink-500 leading-tight whitespace-nowrap font-tanker">
                FAMILY WITH UTEROCARE
              </h1>
              {/* <h1 className="text-[1.5rem] xl:text-5xl md:text-2xl font-bold text-pink-500 leading-tight font-tanker">
                PROJECT
              </h1> */}
              <p className="text-lg xl:text-2xl md:text-xl text-pink-500 mt-[3rem] md:mt-6">
              provide compassionate, world-class fertility care, offering personalized treatments designed to give you the best possible chance of achieving your dream of having a child.
              </p>
              <div className="lg:flex items-center mt-4 md:mt-6">
                <div className="flex justify-center space-x-2 pb-4 lg:pb-0">
                  {/* Placeholder for profile images */}
                  <img src="pic1.png" alt="profile1" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="pic2.png" alt="profile2" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="pic3.png" alt="profile3" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="pic4.png" alt="profile4" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="pic5.png" alt="profile4" className="w-10 h-10 rounded-full border-2 border-white" />
                </div>
                <p className="text-pink-600 text-lg ml-4">5.0 <span className="text-pink-500">From 1300+ Success Stories</span></p>
              </div>
              <div className="lg:flex items-center mt-4 justify-center lg:justify-start md:mt-8">
                <button className="bg-pink-600 hover:bg-pink-500 text-white font-bold py-2 mb-4 xl:mb-0 md:py-3 px-4 md:px-8 rounded-lg">
                  Join Now
                </button>
                {/* <p className="ml-2 text-lg font-semibold text-pink-800">30-DAYS MONEY BACK GUARANTEE</p> */}
              </div>

            </div>

            {/* Right Image */}
            <div className="col-span-1 flex justify-center">
              <img src="/lady.png" alt="Meditation" className="h-[450px]" />
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}
