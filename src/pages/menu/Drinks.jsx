const drinks = [
  {
    id: 1,
    name: "Fresh Juice",
    price: "3,000 RWF",
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e",
  },
  {
    id: 2,
    name: "Mango Smoothie",
    price: "4,500 RWF",
    image:
      "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4",
  },
]

export default function Drinks() {

  return (
    <div className="min-h-screen bg-white p-6">

      <h1 className="text-4xl font-bold text-center mb-10">
        Drinks 
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {drinks.map((drink) => (
          <div
            key={drink.id}
            className="bg-gray-100 rounded-2xl overflow-hidden shadow"
          >

            <img
              src={drink.image}
              alt={drink.name}
              className="h-60 w-full object-cover"
            />

            <div className="p-5">

              <h2 className="text-2xl font-bold">
                {drink.name}
              </h2>

              <p className="text-green-600 mt-2 font-semibold">
                {drink.price}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}