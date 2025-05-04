
import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  href?: string;
}

const ServiceCard = ({ icon, title, description, className, href = "#" }: ServiceCardProps) => {
  return (
    <a
      href={href}
      className={cn(
        "service-card flex flex-col items-center text-center p-6 rounded-lg bg-white border border-gray-100",
        "hover:border-primary/20 cursor-pointer",
        className
      )}
    >
      <div className="mb-4 text-primary p-3 bg-primary/10 rounded-full">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </a>
  );
};

export default ServiceCard;
