

export default function   AboutUs() {
  return (
    <div className="lg:bg-pink-500">
      <div className="container mx-auto">
        <section className="grid grid-cols-2 lg:grid lg:grid-cols-4 text-center bg-pink-500 text-white py-10">
          <div className="col-span-1 p-10">
            <h2 className="text-5xl mb-1">1000+</h2>
            <h2 className="text-2xl mb-1 font-bold">Success Stories</h2>
          </div>
          <div className="col-span-1 p-10">
            <h2 className="text-5xl mb-1">5+</h2>
            <h2 className="text-2xl mb-1 font-bold">Years of Experience</h2>
          </div>

          <div className="col-span-1 p-10">
            <h2 className="text-5xl mb-1">8+</h2>
            <h2 className="text-2xl mb-1 font-bold">Team of Expert</h2>
          </div>

          <div className="col-span-1 p-10">
            <h2 className="text-5xl mb-1">98%</h2>
            <h2 className="text-2xl mb-1 font-bold">Satisfaction Rate</h2>
          </div>
        </section >
      </div>
    </div>
  )
}