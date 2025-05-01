
import { Helmet } from 'react-helmet-async';
import Header from "@/components/Header";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Reviews from "@/components/Reviews";
import Contacts from "@/components/Contacts";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Драйв - Кузовной ремонт автомобилей в Тольятти</title>
        <meta name="description" content="Профессиональный автосервис кузовного ремонта в Тольятти. Покраска, выравнивание, ремонт после ДТП, ТО и полировка. Более 8 лет опыта. Гарантия качества." />
        <meta name="keywords" content="кузовной ремонт, покраска автомобилей, выравнивание кузова, ремонт после ДТП, техническое обслуживание, полировка, автосервис Тольятти" />
      </Helmet>
      
      <main className="min-h-screen bg-white">
        <Header />
        <Services />
        <AboutUs />
        <Reviews />
        <Contacts />
      </main>
    </>
  );
};

export default Index;
