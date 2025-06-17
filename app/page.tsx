import { ReduxProvider } from "../lib/provider";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";

export default function HomePage() {
  return (
    <ReduxProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <ProductList />
        </main>
        <Footer />
      </div>
    </ReduxProvider>
  );
}
