import { BrowserRouter } from "react-router-dom"
import Layout from "./layout/Layout"
import { Routes, Route } from "react-router-dom"
import Menu from "./pages/Menu";

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}