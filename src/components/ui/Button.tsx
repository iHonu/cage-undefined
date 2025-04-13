import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'accent' | 'primaryNoShadow' | 'accentNoShadow';
  className?: string;
}

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}: ButtonProps) => {
  const baseStyles = "group relative inline-flex px-6 py-3.5 items-center justify-center overflow-hidden font-extrabold text-xl transition-all duration-100 ";
  
  const variantStyles = {
    primary: 'bg-primary text-cream [box-shadow:4px_4px_rgb(255_253_238)] active:translate-x-[2px] active:translate-y-[2px] active:[box-shadow:0px_0px_rgb(255_253_238)]',
    accent: 'bg-accent text-cream [box-shadow:4px_4px_rgb(255_253_238)] active:translate-x-[2px] active:translate-y-[2px] active:[box-shadow:0px_0px_rgb(255_253_238)]',
    primaryNoShadow: 'bg-primary text-cream',
    accentNoShadow: 'bg-accent text-cream'
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 