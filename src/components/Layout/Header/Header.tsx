import { Hero, Nav, NavHidden } from '@/components/Layout';
import { useShowNav } from '@/hooks/useShowNav';

export const Header = () => {
  const { ShowNav, toggle } = useShowNav();

  return (
    <header className="container--section">
      <Nav toggle={toggle} />
      <NavHidden ShowNav={ShowNav} toggle={toggle} />
      <Hero />
    </header>
  );
};
