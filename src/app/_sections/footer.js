

export default function Footer() {
  return (
    <div className="lg:bg-uteropink">
      < section className="container mx-auto">
        <div className="relative flex flex-col items-center justify-center h-[550px] bg-uteropink">
          <div className="text-center">
            <h1 className="text-5xl font-serif text-pink-500">Let’s Make this happen</h1>
            <h2 className="text-8xl text-pink-500 font-serif mt-4">Together</h2>
          </div>
          <div className="absolute bottom-0 w-full bg-pink-400 h-[100px] rounded-t-full">
            <div className="absolute bottom-4 w-full flex justify-center">
              <p className="text-sm text-white font-bold">©2024 Uterocare. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </section >
    </div>
  )
}