import Header from "./components/Header";
import KeyStats from "./components/KeyStarts";
import NavBar from "./components/NavBar";
import OurPricing from "./components/OurPricing";
import Services from "./components/Services";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
    <div className="bg-black">
    <NavBar />
    <Header />
    <Services />
    <KeyStats />
    <OurPricing />
    <Footer />
    </div>
    </>
  );
}
