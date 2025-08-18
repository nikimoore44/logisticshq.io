import Header from "./components/Header";
import KeyStats from "./components/KeyStarts";
import NavBar from "./components/NavBar";
import OurPricing from "./components/OurPricing";
import Services from "./components/Services";
import Footer from "./components/Footer";
import FAQs from "./components/FAQs";
import Contactus from "./components/Contactus";

export default function Home() {
  return (
    <>
    <div className="bg-black">
    <NavBar />
    <Header />
    <Services />
    <KeyStats />
    <OurPricing />
    <FAQs />
    <Contactus />
    <Footer />
    </div>
    </>
  );
}
