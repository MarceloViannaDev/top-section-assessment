import * as React from 'react';
import { UseShowNavProps } from '../types';

export const useShowNav = (initial = false): UseShowNavProps => {
  const [ShowNav, setShowNav] = React.useState(initial);

  const open = React.useCallback(() => setShowNav(true), []);
  const close = React.useCallback(() => setShowNav(false), []);
  const toggle = React.useCallback(() => setShowNav((state) => !state), []);

  React.useEffect(() => {
    if (ShowNav) {
      document.body.classList.add('overflow-hidden');
      document.body.classList.remove('overflow-x-hidden', 'overflow-y-auto');
    } else {
      document.body.classList.add('overflow-x-hidden', 'overflow-y-auto');
      document.body.classList.remove('overflow-hidden');
    }
  }, [ShowNav]);

  return { ShowNav, open, close, toggle };
};
