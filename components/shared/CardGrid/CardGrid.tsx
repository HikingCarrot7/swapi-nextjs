import React from 'react';

interface CardGridProps {
  children: React.ReactNode;
}

export const CardGrid = ({ children }: CardGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {children}
    </div>
  );
};
