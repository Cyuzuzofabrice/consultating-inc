const mandiItems = [
  {
    id: 1,
    name: "Chicken Mandi",
    price: "12,000 RWF",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
  },
  {
    id: 2,
    name: "Beef Mandi",
    price: "15,000 RWF",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947",
  },
  {
    id: 3,
    name: "Lamb Mandi",
    price: "18,000 RWF",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  },
]

export default function Mandi() {

  const phone = "250798842328"

  const orderNow = (item) => {
    const message =
      `Hello House of Mandi 👋\nI would like to order ${item.name}`

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-4xl font-bold text-center mb-10">
        Mandi Menu 
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {mandiItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl overflow-hidden shadow"
          >

            <img
              src={item.image}
              alt={item.name}
              className="h-60 w-full object-cover"
            />

            <div className="p-5">

              <h2 className="text-2xl font-bold">
                {item.name}
              </h2>

              <p className="text-green-600 font-semibold mt-2">
                {item.price}
              </p>

              <button
                onClick={() => orderNow(item)}
                className="mt-4 bg-black text-white px-5 py-2 rounded-lg w-full"
              >
                Order via WhatsApp
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}