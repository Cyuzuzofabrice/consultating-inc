import Navbar from "../components/Navbar";
import AppRoutes from "../routes/AppRoutes";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}