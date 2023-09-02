//TODO: 1) Criar o menu mobile fullscreen
//TODO: 2) Adicionar efeitos motion na Header section toda e ver possibilidade de animar objetos no background para criar efeitos fodas!
//TODO: 3) Componentizar toda a Header section
//TODO: 4) Dar continuidade

'use client';

import { Menu, MousePointerClick } from 'lucide-react';

export default function Home() {
  return (
    /* CONTAINER HEADER SECTION */
    <header className="container--section">
      {/* CONTAINER NAV*/}
      <div className="sticky bg-gray-900 drop-shadow-md">
        {/* CONTAINER WRAPPER */}
        <div className="container--wrapper ">
          <div className="flex items-center justify-between h-16 ">
            {/* LOGO */}
            <h1 className="text-color--green">F5 Digital</h1>
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
          <div className="w-full bg-color--black bg-opacity-90 rounded-br-[72px] border-b-color--green-500 border-b-8 border-opacity-50 ">
            {/* CONTAINER WRAPPER */}
            <div className="flex flex-col gap-2 py-8 container--wrapper">
              {/* HERO HEADING SECTION */}
              <h1 className="text-slate-300 md:hidden">
                Seu negócio precisa de estratégia digital e tráfego!
              </h1>
              <h1 className="hidden text-slate-300 md:block">
                Seu negócio precisa <br /> de estratégia digital <br /> e
                tráfego! (tablet)
              </h1>
              {/* Description for mobile */}
              <p className="text-md text-slate-50 md:hidden ">
                Atrair pessoas, criar relacionamentos <br /> e converter em
                clientes
              </p>
              {/* Description above mobile */}
              <p className="hidden md:text-xl text-slate-50 md:block">
                Atrair pessoas, criar relacionamentos e converter em clientes
                (tablet)
              </p>
              {/* CTA BUTTON */}
              <button className="bg-color--green-300 mt-6 py-4 justify-center uppercase flex gap-2 rounded-br-[72px] font-bold">
                Vamos conversar
                <MousePointerClick size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
    /* HEADER END */
  );
}
