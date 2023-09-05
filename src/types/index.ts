/* Usado no hook UseShowNav */
import { CheckSquare, LucideIcon, TimerReset, TrendingUp } from 'lucide-react';
import { ReactNode } from 'react';

export type UseShowNavProps = {
  ShowNav?: boolean;
  open?: () => void;
  close?: () => void;
  toggle?: () => void;
};
/* Usado em todos os components Base globalmente */
export type globalProps = {
  children?: ReactNode;
  className?: string;
};
/* Card interface */
export const iconMap: { [index: string]: LucideIcon } = {
  trendingUp: TrendingUp,
  checkSquare: CheckSquare,
  timerReset: TimerReset,
};
export type cardProps = {
  title: string;
  description: string;
  onClick?: () => void;
  className?: string;
  icon: 'trendingUp' | 'checkSquare' | 'timerReset';
  size?: number;
  color?: string;
  strokeWidth?: number;
};
