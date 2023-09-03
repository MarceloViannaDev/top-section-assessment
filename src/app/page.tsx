//TODO: 1) Criar o menu mobile fullscreen
//TODO: 2) Adicionar efeitos motion na Header section toda e ver possibilidade de animar objetos no background para criar efeitos fodas!
//TODO: 3) Componentizar toda a Header section
//TODO: 4) Dar continuidade

import { BtnPrimary } from '@/components/ui/buttons/Buttons';
import { H1Primary } from '@/components/ui/typography/Headings';
import { PPrimary } from '@/components/ui/typography/Paragraphs';
import { Menu } from 'lucide-react';

export default function Home() {
  return (
    /* CONTAINER HEADER SECTION */
    <header className="container--section">
      {/* CONTAINER NAV*/}
      <div className="sticky bg-color--black drop-shadow-md">
        {/* CONTAINER WRAPPER */}
        <div className="container--wrapper">
          <div className="flex items-center justify-between h-16">
            {/* LOGO */}
            <H1Primary className="text-color--green">F5 Digital</H1Primary>
            {/* NAV SECTION */}
            <nav className="text-slate-50">
              {/* HAMBURGUER MENU */}
              <Menu
                size={20}
                strokeWidth={1.5}
                className="cursor-pointer lg:hidden"
              />
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
      </div>
      {/* CONTAINER HERO SECTION */}
      <div className="container--section">
        <div className="h-[80vh] flex flex-col justify-end rounded-br-[72px] bg-color--black bg-hero--main bg-[72%]  bg-no-repeat border-b-8 border-color--green-500 md:bg-auto md:h-[70vh] ">
          {/* CONTAINER FADED BACKGROUND */}
          <div className="w-full backdrop-blur-md rounded-br-[72px] border-b-color--green-500 border-b-8 border-opacity-50 ">
            {/* CONTAINER WRAPPER */}
            <div className="flex flex-col gap-2 py-8 container--wrapper">
              {/* HERO HEADING SECTION */}
              <H1Primary className="text-slate-50">
                Seu negócio precisa de{' '}
                <span>estratégia digital e tráfego!</span>
              </H1Primary>

              <PPrimary className="text-slate-50">
                Atrair pessoas, criar relacionamentos e converter em clientes
              </PPrimary>

              {/* CTA BUTTON */}
              <BtnPrimary>Vamos conversar</BtnPrimary>
            </div>
          </div>
        </div>
      </div>
    </header>
    /* HEADER END */
  );
}
