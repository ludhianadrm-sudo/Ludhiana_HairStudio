import React from 'react';
import { Star } from 'lucide-react';

interface RatingStarsProps {
  rating: number;
  size?: number;
}

export const RatingStars: React.FC<RatingStarsProps> = ({ rating, size = 16 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.4;
  const totalStars = 5;

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: totalStars }).map((_, index) => {
        if (index < fullStars) {
          return (
            <Star
              key={index}
              size={size}
              className="fill-amber-400 text-amber-400 shrink-0"
            />
          );
        } else if (index === fullStars && hasHalfStar) {
          return (
            <div key={index} className="relative shrink-0" style={{ width: size, height: size }}>
              <Star size={size} className="text-gray-300 dark:text-gray-600 absolute top-0 left-0" />
              <div className="overflow-hidden absolute top-0 left-0" style={{ width: '50%' }}>
                <Star size={size} className="fill-amber-400 text-amber-400" />
              </div>
            </div>
          );
        } else {
          return (
            <Star
              key={index}
              size={size}
              className="text-gray-300 dark:text-gray-600 shrink-0"
            />
          );
        }
      })}
      <span className="text-xs font-semibold ml-1 text-gray-700 dark:text-gray-300">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};
