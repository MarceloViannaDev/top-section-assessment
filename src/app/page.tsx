'use client';

import { Menu, MousePointerClick } from 'lucide-react';

export default function Home() {
  return (
    <header className="w-full">
      {/* NAV CONTAINER */}
      <div className="sticky w-full bg-gray-900 drop-shadow-md">
        {/* WRAPPER CONTAINER */}
        <div className="container flex items-center justify-between h-16 px-4 mx-auto lg:px-8 lg:max-w-[1280px]">
          {/* LOGO */}
          <h1 className="text-color--green">F5 Digital</h1>
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
      {/* HERO SECTION */}
      <div className="w-full h-[80vh] flex flex-col justify-end rounded-br-[72px] bg-color--black bg-hero--bg-main bg-[72%]  bg-no-repeat border-b-8 border-color--green-500">
        {/* WRAPPER CONTAINER */}
        <div className="w-full bg-color--black bg-opacity-90 rounded-br-[72px] border-b-color--green-500 border-b-8 border-opacity-50 ">
          {/* HERO HEADING SECTION */}
          <div className="container flex flex-col gap-2 py-8 p-4 mx-auto lg:px-8 lg:max-w-[1280px]">
            <h1 className="text-2xl font-bold text-slate-300 max-w-[90%] uppercase md:text-3xl">
              Seu negócio precisa de estratégia digital e tráfego!
            </h1>
            <p className=" text-md text-slate-50 max-w-[60%] md:text-lg  ">
              Atrair mais pessoas, criar relacionamentos <br /> e converter em
              clientes
            </p>
            {/* CTA BUTTON */}
            <button className="bg-color--green-300 mt-4 py-4 justify-center uppercase flex gap-2 rounded-br-[72px] font-bold">
              Vamos conversar
              <MousePointerClick size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </header>
    /* HEADER END */
  );
}
