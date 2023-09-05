import { H1Primary } from '@/components/interface';
import { UseShowNavProps } from '@/types';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

export const Nav = ({ toggle }: UseShowNavProps) => {
  return (
    <nav className="sticky bg-color--black">
      {/* CONTAINER WRAPPER */}
      <div className="container--wrapper">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <H1Primary className="text-color--green">F5 Digital</H1Primary>
          {/* NAV SECTION */}
          <nav className="text-slate-50">
            {/* HAMBURGUER MENU */}
            <motion.div initial={{ left: 0 }} animate={{ left: 100 }}>
              <Menu
                size={30}
                strokeWidth={1.5}
                className="cursor-pointer lg:hidden text-color--green"
                onClick={toggle}
              />
            </motion.div>

            {/* DESTOP MENU */}
            <ul className="hidden lg:flex lg:gap-4 lg:text-sm xl:text-base xl:gap-8">
              <li>
                <a href="#">Início</a>
              </li>
              <li>
                <a href="#">Depoimentos</a>
              </li>
              <li>
                <a href="#">Especialistas</a>
              </li>
              <li>
                <a href="#">Como Crescer</a>
              </li>
              <li>
                <a href="#">Conteúdos Gratuitos</a>
              </li>
              <li>
                <a href="#">Chamar no Whats</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
};
