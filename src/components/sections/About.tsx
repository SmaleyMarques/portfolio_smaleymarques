import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Database, BarChart3, Users } from 'lucide-react';

export function About() {
  const areas = [
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      title: "Business Intelligence",
      description: "Desenvolvimento de soluções de BI para apoiar decisões estratégicas"
    },
    {
      icon: <Database className="w-8 h-8 text-blue-500" />,
      title: "Análise de Dados",
      description: "Transformação de dados brutos em insights valiosos para o negócio"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: "Dashboards",
      description: "Criação de painéis interativos e visualizações impactantes"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Consultoria",
      description: "Orientação estratégica em projetos de dados e analytics"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              Seja muito bem-vindo(a) ao meu portfólio. Conheça um pouco da minha trajetória:
            </p>
            
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-2xl text-white shadow-xl">
              <div className="text-center">
                <div className="text-6xl font-bold mb-2">
                  <AnimatedCounter end={10} suffix="+" />
                </div>
                <p className="text-xl font-medium">Anos de Experiência</p>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Especialista em análise de dados com passagens pelo Grupo Petrópolis e 
              Unilider Distribuidora.  Atuação focada em inteligência de negócios,
              abrangendo relatórios gerenciais, gestão de indicadores (metas e
              desempenho), análise de mercado e projeções históricas."
            </p>

            <p className="text-slate-600 leading-relaxed">
              Atualmente, foco na evolução constante das minhas habilidades técnicas
              para entregar soluções que não apenas organizam informações, mas
              geram valor concreto e inovação para o negócio.
            </p>
          </div>

          {/* Areas Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {areas.map((area, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {area.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    {area.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}