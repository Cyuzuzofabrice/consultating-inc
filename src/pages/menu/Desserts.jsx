export default function Desserts() {

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-bold text-center mb-10">
        Desserts 
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white rounded-2xl overflow-hidden shadow">

          <img
            src="https://images.unsplash.com/photo-1551024601-bec78aea704b"
            alt="dessert"
            className="w-full h-72 object-cover"
          />

          <div className="p-6">

            <h2 className="text-2xl font-bold">
              Chocolate Cake
            </h2>

            <p className="text-gray-600 mt-3">
              Sweet dessert with rich chocolate flavor.
            </p>

            <p className="text-green-600 font-bold mt-3">
              5,000 RWF
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}