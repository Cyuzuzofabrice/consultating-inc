export default function Grill() {

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-bold text-center mb-10">
        Grill Menu 
      </h1>

      <div className="bg-white rounded-2xl shadow p-10 text-center">

        <img
          src="https://images.unsplash.com/photo-1529193591184-b1d58069ecdd"
          alt="Grill"
          className="rounded-2xl h-96 w-full object-cover"
        />

        <h2 className="text-3xl font-bold mt-6">
          Charcoal Grilled Chicken
        </h2>

        <p className="mt-4 text-gray-600">
          Delicious grilled meals with authentic Arabian flavor.
        </p>

      </div>

    </div>
  )
}