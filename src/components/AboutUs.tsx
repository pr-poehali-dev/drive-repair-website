
import { Separator } from "@/components/ui/separator";

const AboutUs = () => {
  return (
    <section id="about-us" className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">О нас</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Профессиональный кузовной ремонт в Тольятти</h3>
            <p className="text-muted mb-6 leading-relaxed">
              Автосервис «Драйв» предлагает полный спектр услуг по кузовному ремонту автомобилей в Тольятти. 
              Более 8 лет мы занимаемся восстановлением автомобилей после ДТП, устранением вмятин и царапин, 
              локальной и полной покраской кузова.
            </p>
            <p className="text-muted mb-6 leading-relaxed">
              Наши мастера используют современное оборудование и материалы высокого качества. 
              Мы восстанавливаем геометрию кузова, выполняем рихтовку, вытяжку, локальный и полный покрас, 
              полировку и другие работы любой сложности.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-accent p-5 rounded-lg text-center">
                <p className="text-3xl font-bold text-primary mb-2">8+</p>
                <p className="text-muted text-sm">лет опыта работы</p>
              </div>
              <div className="bg-accent p-5 rounded-lg text-center">
                <p className="text-3xl font-bold text-primary mb-2">1000+</p>
                <p className="text-muted text-sm">довольных клиентов</p>
              </div>
            </div>
          </div>
          
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://cdn.poehali.dev/files/a6d3db9a-c3e0-444b-a8e6-6bce790dd639.jpg" 
              alt="Кузовной ремонт в автосервисе Драйв" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-white text-center px-6">
                <p className="text-xl font-semibold mb-2">Премиальный сервис</p>
                <p className="text-sm">Для автомобилей любого класса</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separator className="mt-16 opacity-20" />
    </section>
  );
};

export default AboutUs;
