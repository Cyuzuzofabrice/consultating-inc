import { BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
console.log("Layout test");

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}