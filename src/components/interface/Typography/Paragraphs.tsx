import { globalProps } from '@/types';
import clsx from 'clsx';

export const PPrimary: React.FC<globalProps> = ({ children, className }) => {
  return <p className={clsx('text-base md:text-lg', className)}>{children}</p>;
};
export const PCard: React.FC<globalProps> = ({ children, className }) => {
  return <p className={clsx('text-xs md:text-sm', className)}>{children}</p>;
};
