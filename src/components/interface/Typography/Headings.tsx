import { globalProps } from '@/types';
import clsx from 'clsx';

export const H1Primary: React.FC<globalProps> = ({ children, className }) => {
  return (
    <h1 className={clsx('text-2xl font-bold uppercase md:text-4xl', className)}>{children}</h1>
  );
};

export const H1Secondary: React.FC<globalProps> = ({ children, className }) => {
  return <h1 className={clsx('text-base font-semibold md:text-xl', className)}>{children}</h1>;
};

export const H1Section: React.FC<globalProps> = ({ children, className }) => {
  return <h1 className={clsx('text-lg font-bold uppercase md:text-3xl', className)}>{children}</h1>;
};

export const H2: React.FC<globalProps> = ({ children, className }) => {
  return (
    <h2 className={clsx('text-xs font-semibold uppercase md:text-xl', className)}>{children}</h2>
  );
};
