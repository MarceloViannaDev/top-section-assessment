import clsx from 'clsx';
import { MousePointerClick } from 'lucide-react';
import { ReactNode } from 'react';

type ButtonsProps = {
  children: string | ReactNode;
  className?: string;
};

export const BtnPrimary: React.FC<ButtonsProps> = ({ children, className }) => {
  return (
    <button
      className={clsx(
        'bg-color--green mt-6 py-4 justify-center uppercase flex gap-2 rounded-br-[72px] font-bold',
        className,
      )}>
      {children}
      <MousePointerClick size={20} strokeWidth={1.5} />
    </button>
  );
};
