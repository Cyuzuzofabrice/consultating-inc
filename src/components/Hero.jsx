export default function Hero() {

  const phone = "250786675051"

  const message =
    "Hello House of Mandi 👋 I would like to place an order."

  const url =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <section className="relative h-screen">

      <img
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
        alt="mandi"
        className="absolute w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">

        <div className="text-center text-white px-6">

          <h1 className="text-6xl font-bold mb-6">
            House of Mandi
          </h1>

          <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-200">
            Experience authentic Arabian flavor, luxury dining,
            and unforgettable moments.
          </p>

          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="bg-yellow-500 text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-400"
          >
            Order via WhatsApp
          </a>

        </div>
 </div>

    </section>
  )
}