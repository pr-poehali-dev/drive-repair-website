
import ServiceCard from "@/components/ServiceCard";
import { Separator } from "@/components/ui/separator";

const services = [
  {
    title: "Покраска",
    description: "Профессиональная покраска элементов кузова с подбором цвета и защитным покрытием",
    price: "от 5 000 ₽",
    image: "https://cdn.poehali.dev/files/a6d3db9a-c3e0-444b-a8e6-6bce790dd639.jpg"
  },
  {
    title: "Выравнивание кузова",
    description: "Устранение вмятин, выравнивание геометрии кузова без покраски",
    price: "от 3 000 ₽",
    image: "https://cdn.poehali.dev/files/201cd4c5-7e59-4cd8-aa8e-873ca19639c0.jpg"
  },
  {
    title: "Ремонт после ДТП",
    description: "Комплексное восстановление автомобиля после аварии любой сложности",
    price: "от 10 000 ₽",
    image: "https://cdn.poehali.dev/files/ca21785c-fc64-4dcf-851c-41b705555538.jpg"
  },
  {
    title: "Техническое обслуживание",
    description: "Диагностика и устранение технических неисправностей, плановое ТО",
    price: "от 2 500 ₽",
    image: "https://cdn.poehali.dev/files/6e72f7ba-ef11-4a0f-a3b9-91f5fec1e2a3.jpg"
  },
  {
    title: "Полировка",
    description: "Восстановление блеска и защита лакокрасочного покрытия автомобиля",
    price: "от 4 000 ₽",
    image: "https://cdn.poehali.dev/files/0e9156c3-3386-4c63-a1d9-121cc49a4166.jpg"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-accent">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Наши услуги</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              price={service.price}
              image={service.image}
            />
          ))}
        </div>
      </div>
      <Separator className="mt-16 opacity-20" />
    </section>
  );
};

export default Services;
