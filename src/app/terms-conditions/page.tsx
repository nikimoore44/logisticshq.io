import { Metadata } from "next";    
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
    title: "Terms & Conditions - LOGISTICS HQ",
    description: "Terms & Conditions for LOGISTICS HQ",
};

export default function TermsConditions() {
    return (
        <>
        <div className="bg-black">
          <NavBar />
          <div className="mt-14 flex flex-col items-center min-h-screen">
            <h1 className="text-white text-4xl font-bold">Terms & Conditions</h1>
            <p className="text-white text-2xl">
                This is the terms and conditions for LOGISTICS HQ.
            </p>
          </div>
          <Footer />
        </div>
      </>
    );
}
