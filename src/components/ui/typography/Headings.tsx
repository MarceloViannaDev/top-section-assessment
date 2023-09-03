import clsx from 'clsx';
import { ReactNode } from 'react';

type HeadingsProps = {
  children: string | ReactNode;
  className?: string;
};

export const H1Primary: React.FC<HeadingsProps> = ({ children, className }) => {
  return (
    <h1 className={clsx('text-2xl font-bold uppercase md:text-4xl', className)}>
      {children}
    </h1>
  );
};

export const H1Secondary: React.FC<HeadingsProps> = ({
  children,
  className,
}) => {
  return (
    <h1 className={clsx('text-2xl font-bold uppercase md:text-4xl', className)}>
      {children}
    </h1>
  );
};
