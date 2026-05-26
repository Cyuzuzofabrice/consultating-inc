import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-8 py-5 flex justify-between items-center sticky top-0 z-50">

      <h1 className="text-2xl font-bold text-yellow-500">
        House of Mandi yemeni restaurant
      </h1>

      <div className="flex gap-8 text-lg">

        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

      </div>

    </nav>
  )
}