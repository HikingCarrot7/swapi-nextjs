import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return <div className="p-10 md:container md:mx-auto">{children}</div>;
};
