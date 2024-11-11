
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
     <Nav />
     <Hero />
     <Products />
     <Services />
     <Contact />
     <Footer />
    </main>
  );
}
