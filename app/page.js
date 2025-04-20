import Image from "next/image";
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import CategorySection from '@/components/CategorySection'
import OurProductsSection from "@/components/OurProductsSection";
import Aboutus from '@/components/Aboutus'
import PartnersSection from "@/components/OurPartners";
import Footer from "@/components/Footer"
export default function Home() {
  return (
    <>
    
    <Banner/>
    <CategorySection/>
    <OurProductsSection></OurProductsSection>
    <PartnersSection/>
    <Aboutus></Aboutus>
   
    </>
  );
}
