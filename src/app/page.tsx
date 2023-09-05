//TODO:
//todo (X) Criar o menu mobile fullscreen
//todo ( ) Adicionar efeitos motion na Header section toda e ver possibilidade de animar objetos no background para criar efeitos fodas!
//todo (X) Componentizar toda a Header section

//TODO:
//todo ( ) construir sessao bem vindo
//todo ( ) sesao resultados comprovados

'use client';

import { Header, Welcome } from '@/components/Layout';

export default function Home() {
  return (
    /* HEADER SECTION */
    <main>
      <Header />
      <Welcome />
    </main>
  );
}
