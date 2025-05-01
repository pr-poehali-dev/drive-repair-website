
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  return (
    <section id="contacts" className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Контакты</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Как нас найти</h3>
              
              <div className="flex items-start mb-4">
                <Icon name="MapPin" className="mr-3 text-primary mt-1" />
                <div>
                  <p className="font-medium">Адрес:</p>
                  <p className="text-muted">г. Тольятти, ул. Офицерская 26</p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <Icon name="Phone" className="mr-3 text-primary mt-1" />
                <div>
                  <p className="font-medium">Телефоны:</p>
                  <a href="tel:+79966215396" className="block text-muted hover:text-primary transition-colors">+7 996 621 5396</a>
                  <a href="tel:740877" className="block text-muted hover:text-primary transition-colors">740877</a>
                  <a href="tel:+79277703126" className="block text-muted hover:text-primary transition-colors">+7 927 770 3126</a>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <Icon name="Mail" className="mr-3 text-primary mt-1" />
                <div>
                  <p className="font-medium">Email:</p>
                  <a href="mailto:alexpro63@mail.ru" className="text-muted hover:text-primary transition-colors">alexpro63@mail.ru</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Icon name="MessagesSquare" className="mr-3 text-primary mt-1" />
                <div>
                  <p className="font-medium">Telegram:</p>
                  <a 
                    href="https://t.me/alexander_prodrive" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-muted hover:text-primary transition-colors"
                  >
                    @alexander_prodrive
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Часы работы</h3>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="font-medium">Пн-Пт:</p>
                  <p className="text-muted">9:00 - 19:00</p>
                </div>
                <div>
                  <p className="font-medium">Сб:</p>
                  <p className="text-muted">10:00 - 17:00</p>
                </div>
                <div>
                  <p className="font-medium">Вс:</p>
                  <p className="text-muted">Выходной</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-80 md:h-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2397.8935836236444!2d49.41847837683653!3d53.06689997124235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41687ce04c81ceb5%3A0x9d7604e8ac7ef06e!2z0J7RhNC40YbQtdGA0YHQutCw0Y8g0YPQuy4sIDI2LCDQotC-0LvRjNGP0YLRgtC4LCDQodCw0LzQsNGA0YHQutCw0Y8g0L7QsdC7LiwgNDQ1MDIw!5e0!3m2!1sru!2sru!4v1696318451777!5m2!1sru!2sru" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: "8px" }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a href="tel:+79966215396">
            <Button size="lg" className="text-lg px-8">
              Позвонить сейчас
              <Icon name="Phone" />
            </Button>
          </a>
        </div>
        
        <div className="mt-16 text-center text-sm text-muted">
          <p>© 2025 Автосервис "Драйв". Все права защищены.</p>
          <div className="mt-2">
            <a href="#" className="hover:text-primary mr-4 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
