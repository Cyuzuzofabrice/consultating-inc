export default function MenuCard({ item, onOrder }) {
  return (
    <div className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition">

      {/* Food name */}
      <h2 className="text-xl font-bold">
        {item.name}
      </h2>

      {/* Description */}
      <p className="text-gray-600 mt-2 text-sm">
        {item.description}
      </p>

      {/* Price */}
      <p className="mt-3 font-bold text-green-600">
        {item.price} RWF
      </p>

      {/* Button */}
      <button
        onClick={() => onOrder(item)}
        className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
      >
        Order Now
      </button>

    </div>
  )
}