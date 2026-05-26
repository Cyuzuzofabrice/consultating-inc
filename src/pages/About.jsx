export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[70vh]">

        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b"
          alt="restaurant"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">

          <h1 className="text-6xl font-bold text-white">
            About Us
          </h1>

        </div>

      </section>

      {/* About Content */}
      <section className="max-w-6xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-14 items-center">

        <img
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de"
          alt="chef"
          className="rounded-3xl h-[500px] w-full object-cover shadow-xl"
        />

        <div>

          <h2 className="text-5xl font-bold mb-8 text-[#2B1B12]">
            Authentic Arabian Taste
          </h2>

          <p className="text-lg text-gray-600 leading-9">
            House of Mandi combines traditional Arabian flavors,
            luxury dining spaces, and warm hospitality to create
            a memorable food experience for every guest.
          </p>

          <p className="text-lg text-gray-600 leading-9 mt-6">
            Enjoy delicious mandi, shawarma, grilled meals,
            refreshing drinks, and a relaxing atmosphere
            designed for families and friends.
          </p>

        </div>

      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <h2 className="text-4xl font-bold text-center mb-14">
          Restaurant Experience 
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="food"
            className="rounded-3xl h-80 w-full object-cover hover:scale-105 transition"
          />

          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9"
            alt="restaurant tables"
            className="rounded-3xl h-80 w-full object-cover hover:scale-105 transition"
          />

          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
            alt="restaurant atmosphere"
            className="rounded-3xl h-80 w-full object-cover hover:scale-105 transition"
          />

        </div>

      </section>

      {/* Footer Info */}
      <footer className="bg-black text-white py-12 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-yellow-500 mb-4">
            House of Mandi
          </h2>

          <p className="text-gray-300 text-lg">
           KN 81 St, Kigali, Rwanda
          </p>

          <p className="text-gray-300 text-lg mt-2">
            Open Daily: 09:00 AM — 11:30 PM
          </p>

        </div>

      </footer>

    </div>
  )
}