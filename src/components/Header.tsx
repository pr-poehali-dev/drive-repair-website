
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="relative w-full h-[60vh] md:h-[70vh] bg-black">
      {/* Фоновое изображение с затемнением */}
      <div 
        className="absolute inset-0 bg-black/35 z-0" 
        style={{
          backgroundImage: `url(https://cdn.poehali.dev/files/8d99a946-b9a6-49a3-afcb-66a1f9e261a9.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="container relative z-10 h-full flex flex-col py-6">
        {/* Верхняя часть с логотипом и телефоном */}
        <div className="flex justify-between items-center">
          <div className="text-primary text-3xl md:text-5xl font-bold">
            ДРАЙВ
          </div>
          <a 
            href="tel:+79966215396" 
            className="text-white text-lg md:text-xl hover:text-primary transition-colors flex items-center gap-2"
          >
            <Icon name="Phone" className="text-primary" />
            +7 996 621 5396
          </a>
        </div>
        
        {/* Центральная часть с призывом к действию */}
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Кузовной ремонт в Тольятти
          </h1>
          <a href="tel:+79966215396">
            <Button size="lg" className="text-lg px-8">
              Позвонить
              <Icon name="Phone" />
            </Button>
          </a>
        </div>
        
        {/* Адрес внизу */}
        <div className="text-center mt-auto">
          <p className="text-gray-400 text-sm">ул. Офицерская 26</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
