import { Card, H1Section, H2 } from '@/components/interface';
import { motion } from 'framer-motion';

export const Welcome = () => {
  return (
    <section className="container--section">
      <div className="py-8 md:py-16 container--wrapper">
        {/* WELCOME section START */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2 }}
          className="flex flex-col items-center gap-2 md:mb-8">
          <H1Section>
            Bem-vindo a <strong className="text-color--green">F5 Digital</strong>
          </H1Section>
          <H2 className="text-color--black">Vamos juntos aumentar seu faturamento!</H2>
        </motion.div>
        {/* CARD section START */}
        <div className="flex flex-col gap-4 lg:flex-row md:text-base">
          <Card
            icon={'trendingUp'}
            size={80}
            color="#00CE8D"
            strokeWidth={2.5}
            title="Não comece do ZERO"
            description="O medo de errar já te impediu de dar o primeiro passo? Como, quando e por onde começar?
Com mais de 10 anos imersos no marketing digital aprendemos e desenvolvemos as nossas estratégias para te ajudar a construir um negócio sólido e que gere resultados."
          />
          <Card
            icon={'checkSquare'}
            size={80}
            color="#00CE8D"
            strokeWidth={2.5}
            title="Menos erros, mais acertos"
            description="Você também passou sua vida inteira escutando que é preciso errar para aprender? Acreditamos que isso é verdade dependendo do contexto. No marketing digital, por exemplo, você pode contar com a gente e encontrar os melhores atalhos e evitando diversos erros."
          />
          <Card
            icon={'timerReset'}
            size={80}
            color="#00CE8D"
            strokeWidth={2.5}
            title="Não existe a hora certa"
            description="Não é nenhum segredo que a hora certa não existe. Por que adiar o seu sucesso, quando ele está batendo em sua porta? Queremos te ajudar a encontrar o caminho para alcançar o que você sempre sonhou."
          />
        </div>
      </div>
    </section>
  );
};
