export default function ExperienceSection() {
  return (
    <section className="bg-[#2B1B12] text-white py-24 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
          alt="restaurant"
          className="rounded-3xl h-[500px] w-full object-cover"
        />

        <div>

          <h2 className="text-5xl font-bold mb-8 text-yellow-500">
            Luxury Dining Experience
          </h2>

          <p className="text-lg text-gray-300 leading-9">
            Enjoy authentic Arabian hospitality in a warm and relaxing atmosphere.
            From premium mandi dishes to elegant dining spaces,
            House of Mandi delivers unforgettable moments.
          </p>

        </div>

      </div>

    </section>
  )
}