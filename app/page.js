import Image from "next/image";
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import AboutSection from '@/components/AboutSection'
import OurProductsSection from "@/components/OurProductsSection";

import PartnersSection from "@/components/OurPatners";
import Footer from "@/components/Footer"
export default function Home() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <AboutSection/>
    <OurProductsSection></OurProductsSection>
    <PartnersSection/>
    <Footer></Footer>
    </>
  );
}
