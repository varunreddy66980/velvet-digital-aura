import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import VipExperience from "@/components/VipExperience";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Events />
        <VipExperience />
        <Gallery />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
