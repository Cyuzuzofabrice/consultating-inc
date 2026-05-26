const foods = [
  {
    id: 1,
    name: "Chicken Mandi",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
  },
  {
    id: 2,
    name: "Beef Mandi",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947",
  },
  {
    id: 3,
    name: "Shawarma",
    image:
      "https://images.unsplash.com/photo-1562967916-eb82221dfb92",
  },
]

export default function FeaturedMenu() {
  return (
    <section className="py-20 bg-gray-100 px-6">

      <h2 className="text-5xl font-bold text-center mb-14">
        Featured Dishes 
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {foods.map((food) => (
          <div
            key={food.id}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition"
          >

            <img
              src={food.image}
              alt={food.name}
              className="h-72 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">
                {food.name}
              </h3>
            </div>

          </div>
        ))}

      </div>

    </section>
  )
}