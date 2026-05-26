import { BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}