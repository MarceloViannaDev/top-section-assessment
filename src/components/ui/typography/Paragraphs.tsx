import clsx from 'clsx';
import { ReactNode } from 'react';

type ParagraphsProps = {
  children: string | ReactNode;
  className?: string;
};

export const PPrimary: React.FC<ParagraphsProps> = ({
  children,
  className,
}) => {
  return <p className={clsx('text-md md:text-lg', className)}>{children}</p>;
};
