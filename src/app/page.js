
import Header from "@/components/Header";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import AboutUsSection from "@/components/landing/AboutUs";
import Footer from "@/components/landing/Footer";
import HeroWithVideo from "@/components/landing/HeroSection";
import  Partners  from "@/components/landing/Partners";
import ProductCategories from "@/components/landing/ProductCategories";
import Stats from "@/components/landing/Stats";
import { partnersData } from "@/components/landing/data";
import FeaturedProductsCarousel from "@/components/landing/featuredProducts";

export default function page() {
  return (
    <>
      <div className="fixed bottom-10 right-6 z-20">
        <LanguageSwitcher />
      </div>
      <div className="relative">
        <div className="relative h-screen w-full">
          <HeroWithVideo />
        </div>

        <div className="fixed top-0 left-0 right-0 z-50">
          <Header />
        </div>
        <Stats />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeaturedProductsCarousel />
        </div>

        <ProductCategories />
        {/*<CoreValues values={coreValuesData} />*/}
        <AboutUsSection />
        <Partners partners={partnersData} />
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Testimonials testimonials={testimonialsData} />
        </div>*/}
        <Footer />
      </div>
    </>
  );
}
