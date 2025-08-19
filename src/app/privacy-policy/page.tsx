import { Metadata } from "next";    
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
    title: "Privacy Policy - LOGISTICS HQ",
    description: "Privacy Policy for LOGISTICS HQ",
};

export default function PrivacyPolicy() {
    return (
        <>
        <div className="bg-black">
          <NavBar />
          <div className="mt-14 flex flex-col items-center min-h-screen">
            <h1 className="text-white text-4xl font-bold">Privacy Policy</h1>
            <p className="text-white text-2xl">
                This is the privacy policy for LOGISTICS HQ.
            </p>
          </div>
          <Footer />
        </div>
      </>
    );
}
