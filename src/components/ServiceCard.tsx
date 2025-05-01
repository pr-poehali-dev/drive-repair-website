
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

const ServiceCard = ({ title, description, price, image }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold text-secondary mb-2">{title}</h3>
        <p className="text-muted text-sm mb-3">{description}</p>
        
        <div className="flex items-center mb-4">
          <span className="text-primary font-bold text-xl">{price}</span>
          <span className="text-xs text-muted ml-2">*зависит от сложности выполнения работ</span>
        </div>
        
        <a href="tel:+79966215396">
          <Button className="w-full">
            Позвонить
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
