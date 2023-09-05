import { UseShowNavProps } from '@/types';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

export const NavHidden = ({ ShowNav, toggle }: UseShowNavProps) => {
  return (
    <AnimatePresence>
      {ShowNav /* Checa condicao para mostrar o menu */ && (
        <motion.nav
          className="absolute top-0 left-0 z-50 flex items-center min-w-full min-h-full bg-color--green bg-opacity-95 no-scroll"
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}>
          <X /* CROSS button  */
            className="absolute cursor-pointer right-4 top-4 md:right-8 md:top-8"
            size={40}
            strokeWidth={1.5}
            onClick={toggle}
          />
          <div className="relative container--wrapper">
            <ul className="flex flex-col items-center h-[100%] gap-4 font-semibold uppercase mt-[-2.25rem] md:mt-0 md:text-2xl">
              <li className=" hover:bg-color--green-400 hover:px-4 hover:rounded-full">
                <a href="#">Início</a>
              </li>
              <li className=" hover:bg-color--green-400 hover:px-4 hover:rounded-full">
                <a href="#">Depoimentos</a>
              </li>
              <li className=" hover:bg-color--green-400 hover:px-4 hover:rounded-full">
                <a href="#">Especialistas</a>
              </li>
              <li className=" hover:bg-color--green-400 hover:px-4 hover:rounded-full">
                <a href="#">Como Crescer</a>
              </li>
              <li className=" hover:bg-color--green-400 hover:px-4 hover:rounded-full">
                <a href="#">Conteúdos Gratuitos</a>
              </li>
              <li className=" hover:bg-color--green-400 hover:px-4 hover:rounded-full">
                <a href="#">Chamar no Whats</a>
              </li>
            </ul>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
