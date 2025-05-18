
import React from 'react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  isPositive?: boolean;
  className?: string;
}

const StatCard = ({ title, value, change, isPositive = true, className }: StatCardProps) => {
  return (
    <div className={cn(
      "bg-nexfab-darker p-6 rounded-xl border border-white/10 card-hover",
      className
    )}>
      <div className="flex flex-col">
        <p className="text-sm text-white/60 mb-1">{title}</p>
        <p className="text-2xl font-bold mb-1">{value}</p>
        {change && (
          <div className="flex items-center">
            <span className={isPositive ? "text-green-500" : "text-red-500"}>
              {isPositive ? "↑" : "↓"} {change}
            </span>
            <span className="text-xs text-white/60 ml-1">vs last period</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
