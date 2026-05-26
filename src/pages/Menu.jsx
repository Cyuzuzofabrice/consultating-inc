import { Link } from "react-router-dom"

const categories = [
  {
    id: 1,
    name: "Mandi",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
    link: "/menu/mandi",
    description: "Authentic Arabian mandi dishes",
  },

  {
    id: 2,
    name: "Grill",
    image:
      "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
    link: "/menu/grill",
    description: "Delicious charcoal grilled meals",
  },

  {
    id: 3,
    name: "Drinks",
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e",
    link: "/menu/drinks",
    description: "Fresh juices and cold beverages",
  },

  {
    id: 4,
    name: "Shawarma",
    image:
      "https://images.unsplash.com/photo-1562967916-eb82221dfb92",
    link: "/menu/shawarma",
    description: "Fresh shawarma with special sauce",
  },

  {
    id: 5,
    name: "Desserts",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b",
    link: "/menu/desserts",
    description: "Sweet desserts and cakes",
  },
]

export default function Menu() {
  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">

      {/* Title */}
      <div className="text-center mb-16">

        <h1 className="text-5xl font-bold mb-4">
          Our Menu 
        </h1>

        <p className="text-gray-600 text-lg">
          Explore our delicious categories
        </p>

      </div>

      {/* Category Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {categories.map((category) => (

          <Link
            key={category.id}
            to={category.link}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >

            {/* Image */}
            <img
              src={category.image}
              alt={category.name}
              className="h-72 w-full object-cover"
            />

            {/* Content */}
            <div className="p-6">

              <h2 className="text-3xl font-bold mb-3">
                {category.name}
              </h2>

              <p className="text-gray-600">
                {category.description}
              </p>

            </div>

          </Link>

        ))}

      </div>

    </div>
  )
}