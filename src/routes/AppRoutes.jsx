import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import Menu from "../pages/Menu"
import About from "../pages/About"
import Contact from "../pages/Contact"

import Mandi from "../pages/menu/Mandi"
import Drinks from "../pages/menu/Drinks"
import Grill from "../pages/menu/Grill"
import Shawarma from "../pages/menu/Shawarma"
import Desserts from "../pages/menu/Desserts"

export default function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/menu" element={<Menu />} />
      <Route path="/menu/mandi" element={<Mandi />} />
      <Route path="/menu/drinks" element={<Drinks />} />
      <Route path="/menu/grill" element={<Grill />} />
      <Route path="/menu/shawarma" element={<Shawarma />} />
      <Route path="/menu/desserts" element={<Desserts />} />

      <Route path="/about" element={<About />} />

      <Route path="/contact" element={<Contact />} />

    </Routes>
  )
}