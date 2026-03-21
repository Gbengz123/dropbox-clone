import { cva } from 'class-variance-authority';

interface buttonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  className?: string;
}

const buttonVariants = cva(
  'shrink-0 cursor-pointer rounded-xl border-none px-4 py-2 text-[1rem] font-semibold',
  {
    variants: {
      variant: {
        primary:
          'bg-accent hover:bg-button-hover-bg transition-color text-white duration-150',
        secondary: 'bg-gray-200 text-black',
        danger: 'bg-red-500 text-white',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

function Button({ children, variant, className }: buttonProps) {
  return (
    <button className={buttonVariants({ variant, className })}>
      {children}
    </button>
  );
}

export default Button;
