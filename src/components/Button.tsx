import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

interface buttonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const buttonVariants = cva(
  'cursor-pointer rounded-xl px-4 py-2 text-[1rem] font-semibold transition-color duration-150',
  {
    variants: {
      variant: {
        primary: 'bg-accent hover:bg-button-hover-bg text-white border-none',
        secondary:
          'bg-transparent text-standard-text hover:bg-secondary-hover border border-standard-text flex gap-6 items-center',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

function Button({ children, variant, className }: buttonProps) {
  return (
    <button className={twMerge(buttonVariants({ variant }), className)}>
      {children}
    </button>
  );
}

export default Button;
