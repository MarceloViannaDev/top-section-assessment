import { BtnPrimary } from '@/components/interface';
import { H1Primary } from './../../interface/Typography/Headings';
import { PPrimary } from './../../interface/Typography/Paragraphs';

export const Hero = () => {
  return (
    <section>
      <div className="container--section">
        <div className="h-[80vh] flex flex-col justify-end rounded-br-[72px] bg-color--black bg-hero--main bg-[72%]  bg-no-repeat border-b-8 border-color--green-500 md:bg-auto md:h-[70vh] ">
          {/* CONTAINER FADED BACKGROUND */}
          <div className="w-full backdrop-blur-md rounded-br-[72px] border-b-color--green-500 border-b-8 border-opacity-50 ">
            {/* CONTAINER WRAPPER */}
            <div className="flex flex-col gap-2 py-8 container--wrapper">
              {/* HERO HEADING SECTION */}
              <H1Primary className="text-slate-50">
                Seu negócio precisa de{' '}
                <span className="text-color--green">estratégia digital e tráfego!</span>
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
    </section>
  );
};
