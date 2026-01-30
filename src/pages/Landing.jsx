import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/landing/Hero";
import AppPreview from "@/components/landing/AppPreview";
import Features from "@/components/landing/Features";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AppPreview />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
