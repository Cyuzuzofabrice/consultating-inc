export default function Shawarma() {

  return (
    <div className="min-h-screen bg-white p-10">

      <h1 className="text-5xl font-bold text-center mb-10">
        Shawarma 
      </h1>

      <div className="max-w-4xl mx-auto bg-gray-100 rounded-2xl overflow-hidden shadow">

        <img
          src="https://images.unsplash.com/photo-1562967916-eb82221dfb92"
          alt="shawarma"
          className="w-full h-96 object-cover"
        />

        <div className="p-8">

          <h2 className="text-3xl font-bold">
            Chicken Shawarma
          </h2>

          <p className="mt-4 text-gray-600">
            Fresh shawarma wrapped with vegetables and delicious sauce.
          </p>

          <p className="text-green-600 font-bold mt-4">
            6,000 RWF
          </p>

        </div>

      </div>

    </div>
  )
}