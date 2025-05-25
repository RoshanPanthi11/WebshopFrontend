import Image from "next/image";

import Banner from '../components/Banner';
import CategorySection from '../components/CategorySection'
import OurProductsSection from "../components/OurProductsSection";
import Aboutus from '../components/Aboutus';
import PartnersSection from "../components/OurPartners";

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
