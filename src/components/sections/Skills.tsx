import { Card, CardContent } from '@/components/ui/card';
import { BarChart, Palette, Database, Code } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: <BarChart className="w-12 h-12 text-purple-500" />,
      title: "VISUALIZAÇÃO & ANÁLISE DE DADOS",
      description: "Desenvolvimento de dashboards através de ferramentas como Power BI, Tableau e Excel.",
      gradient: "from-purple-500 to-purple-700"
    },
    {
      icon: <Palette className="w-12 h-12 text-blue-500" />,
      title: "DESIGN DE DASHBOARDS",
      description: "Aplicação do Figma ou Power Point para elaborar layouts premium para projetos de Business Intelligence.",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      icon: <Database className="w-12 h-12 text-green-500" />,
      title: "BANCO DE DADOS & ETL",
      description: "Análise usando SQL com queries e views avançadas através da utilização de bancos de dados nos mais variados SGBDs.",
      gradient: "from-green-500 to-green-700"
    },
    {
      icon: <Code className="w-12 h-12 text-orange-500" />,
      title: "PROGRAMAÇÃO",
      description: "Sólido conhecimento em programação para processamento e manipulação de dados com Python e Linguagem R.",
      gradient: "from-orange-500 to-orange-700"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Principais habilidades e ferramentas
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((skill, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 shadow-lg overflow-hidden relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <CardContent className="p-8 text-center relative z-10">
                <div className="mb-6 flex justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <div className="p-4 rounded-full bg-slate-50 group-hover:bg-white shadow-lg">
                    {skill.icon}
                  </div>
                </div>
                
                <h3 className="text-sm font-bold text-slate-800 mb-4 leading-tight tracking-wide">
                  {skill.title}
                </h3>
                
                <p className="text-sm text-slate-600 leading-relaxed">
                  {skill.description}
                </p>

                {/* Hover Effect Border */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${skill.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
            <span className="font-medium">Clique aqui para visualizar os meus projetos</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </div>
    </section>
  );
}