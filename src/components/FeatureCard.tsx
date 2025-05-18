
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  delay?: string;
}

const FeatureCard = ({ title, description, icon, className, delay = "0s" }: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "bg-nexfab-darker p-6 rounded-xl border border-white/10 card-hover animate-fade-in",
        className
      )}
      style={{ animationDelay: delay }}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-nexfab-purple/20 text-nexfab-purple mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

export default FeatureCard;
