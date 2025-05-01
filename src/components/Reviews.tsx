
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

interface Review {
  id: number;
  name: string;
  date: string;
  text: string;
  rating: number;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Александр К.",
    date: "Март 2025",
    text: "Отличный сервис! Обратился после ДТП, вмятина на крыле была серьезная. Все сделали быстро и качественно, не отличить от заводского состояния.",
    rating: 5
  },
  {
    id: 2,
    name: "Елена В.",
    date: "Февраль 2025",
    text: "Делала полировку и покраску бампера. Очень довольна результатом, цвет подобрали идеально. Рекомендую этот автосервис всем.",
    rating: 5
  },
  {
    id: 3,
    name: "Дмитрий М.",
    date: "Январь 2025",
    text: "Обращался для устранения вмятины без покраски. Работу выполнили быстро и аккуратно, цена соответствует качеству. Буду обращаться еще.",
    rating: 4
  },
  {
    id: 4,
    name: "Ирина С.",
    date: "Декабрь 2024",
    text: "Спасибо мастерам за профессиональный подход! Машина после ремонта выглядит как новая. Приятно иметь дело с настоящими профессионалами.",
    rating: 5
  }
];

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((current) => 
      current === reviews.length - 3 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((current) => 
      current === 0 ? reviews.length - 3 : current - 1
    );
  };

  // Показываем только 3 отзыва за раз
  const visibleReviews = reviews.slice(activeIndex, activeIndex + 3);

  return (
    <section id="reviews" className="py-16 bg-accent">
      <div className="container">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Отзывы клиентов</h2>
          <div className="text-sm text-muted flex items-center">
            <Icon name="MapPin" size={14} className="mr-1" />
            *отзывы с приложения 2GIS
          </div>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleReviews.map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-muted text-sm">{review.date}</p>
                  </div>
                  <div className="flex">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="text-muted">{review.text}</p>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevSlide}
              disabled={activeIndex === 0}
            >
              <Icon name="ChevronLeft" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextSlide}
              disabled={activeIndex >= reviews.length - 3}
            >
              <Icon name="ChevronRight" />
            </Button>
          </div>
        </div>
      </div>
      <Separator className="mt-16 opacity-20" />
    </section>
  );
};

export default Reviews;
