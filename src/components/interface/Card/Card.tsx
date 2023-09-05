import { H1Secondary, PCard } from '@/components/interface';
import { cardProps, iconMap } from '@/types';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export const Card: React.FC<cardProps> = ({
  title,
  description,
  className,
  icon,
  size,
  color,
  strokeWidth,
}) => {
  const LucideIcon = iconMap[icon];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 2 }}>
      <div
        className={clsx(
          'flex flex-col gap-2 p-8 rounded-tl rounded-br shadow-xl shadow-gray-100 items-center',
          className
        )}>
        <LucideIcon size={size} color={color} strokeWidth={strokeWidth} />
        <H1Secondary className="mt-4">{title}</H1Secondary>
        <PCard>{description}</PCard>
      </div>
    </motion.div>
  );
};
