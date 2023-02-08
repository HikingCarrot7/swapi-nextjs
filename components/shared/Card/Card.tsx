import React from 'react';

interface CardWrapperProps {
  children: React.ReactNode;
}

const CardWrapper = ({ children }: CardWrapperProps) => {
  return (
    <div className="px-4 py-2 rounded overflow-hidden border space-y-3">
      {children}
    </div>
  );
};

interface CardContentProps {
  children: React.ReactNode;
}

const CardContent = ({ children }: CardContentProps) => {
  return <div className="flow-col space-y-2">{children}</div>;
};

interface CardTitleProps {
  title: string;
}

const CardTitle = ({ title }: CardTitleProps) => {
  return <h2 className="font-bold text-3xl py-3 text-center mb-2">{title}</h2>;
};

interface CardPropertyProps {
  label: string;
  value: string | number;
}

export const CardProperty = ({ label, value }: CardPropertyProps) => {
  return (
    <div>
      <span className="font-bold">{label}: </span>
      <span className="inline-block px-1 text-md">{value}</span>
    </div>
  );
};

interface CardColorPropertyProps {
  label: string;
  colors: string;
}

const CardColorProperty = ({ label, colors }: CardColorPropertyProps) => {
  return (
    <div>
      <span className="font-bold">{label}: </span>
      {colors
        .split(',')
        .map(color => color.trim())
        .map((color, index) => {
          return (
            <div
              key={index}
              className={`inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 ${Palettes[color].background} ${Palettes[color].foreground}`}>
              {color.trim()}
            </div>
          );
        })}
    </div>
  );
};

interface ColorPalette {
  background: string;
  foreground: string;
}

const Palettes: { [key: string]: ColorPalette } = {
  auburn: {
    background: 'bg-amber-700',
    foreground: 'text-white',
  },
  black: {
    background: 'bg-black',
    foreground: 'text-white',
  },
  blond: {
    background: 'bg-yellow-100',
    foreground: 'text-neutral-600',
  },
  blonde: {
    background: 'bg-yellow-200',
    foreground: 'text-neutral-600',
  },
  blue: {
    background: 'bg-blue-500',
    foreground: 'text-white',
  },
  'blue-gray': {
    background: 'bg-slate-400',
    foreground: 'text-white',
  },
  brown: {
    background: 'bg-amber-800',
    foreground: 'text-white',
  },
  'brown mottle': {
    background: 'bg-amber-900',
    foreground: 'text-white',
  },
  dark: {
    background: 'bg-neutral-600',
    foreground: 'text-white',
  },
  fair: {
    background: 'bg-orange-100',
    foreground: 'text-neutral-600',
  },
  gold: {
    background: 'bg-yellow-400',
    foreground: 'text-neutral-700',
  },
  green: {
    background: 'bg-green-500',
    foreground: 'text-white',
  },
  'green-tan': {
    background: 'bg-lime-700',
    foreground: 'text-white',
  },
  grey: {
    background: 'bg-gray-300',
    foreground: 'text-neutral-800',
  },
  hazel: {
    background: 'bg-emerald-600',
    foreground: 'text-white',
  },
  light: {
    background: 'bg-neutral-100',
    foreground: 'text-neutral-600',
  },
  metal: {
    background: 'bg-zinc-300',
    foreground: 'text-gray-500',
  },
  'mottled green': {
    background: 'bg-lime-600',
    foreground: 'text-white',
  },
  'n/a': {
    background: 'bg-gray-200',
    foreground: 'text-gray-700',
  },
  none: {
    background: 'bg-gray-200',
    foreground: 'text-gray-700',
  },
  orange: {
    background: 'bg-orange-400',
    foreground: 'text-white',
  },
  pale: {
    background: 'bg-amber-100',
    foreground: 'text-neutral-700',
  },
  pink: {
    background: 'bg-pink-400',
    foreground: 'text-white',
  },
  red: {
    background: 'bg-red-500',
    foreground: 'text-white',
  },
  silver: {
    background: 'bg-zinc-200',
    foreground: 'text-gray-500',
  },
  tan: {
    background: 'bg-yellow-600',
    foreground: 'text-white',
  },
  unknown: {
    background: 'bg-gray-200',
    foreground: 'text-gray-700',
  },
  white: {
    background: 'bg-white border',
    foreground: 'text-neutral-800',
  },
  yellow: {
    background: 'bg-yellow-300',
    foreground: 'text-neutral-700',
  },
};

export const Card = Object.assign(CardWrapper, {
  Title: CardTitle,
  Content: CardContent,
  Property: CardProperty,
  ColorProperty: CardColorProperty,
});
