
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  className?: string;
  isExternalLink?: boolean;
}

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  href, 
  className,
  isExternalLink = false
}: ServiceCardProps) => {
  // Function to scroll to top on navigation
  const handleNavigation = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cardContent = (
    <div className={cn(
      'service-card bg-white p-6 rounded-lg border border-muted shadow-sm hover:border-primary/20 flex flex-col h-full',
      className
    )}>
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="font-semibold text-xl mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
      <div className="text-sm font-medium text-primary hover:underline mt-auto">
        Learn more
      </div>
    </div>
  );

  return isExternalLink ? (
    <a 
      href={href} 
      className="block h-full touch-manipulation" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={`Learn more about ${title}`}
    >
      {cardContent}
    </a>
  ) : (
    <Link 
      to={href} 
      className="block h-full touch-manipulation" 
      onClick={handleNavigation}
      aria-label={`Learn more about ${title}`}
    >
      {cardContent}
    </Link>
  );
};

export default ServiceCard;
