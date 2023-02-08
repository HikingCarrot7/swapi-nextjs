import React from 'react';

interface TitleProps {
  children: React.ReactNode;
}

export const Title = ({ children }: TitleProps) => {
  return <div className="text-3xl font-medium my-3">{children}</div>;
};
