import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import Menu from "./pages/Menu";
import Layout from "./layout/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}