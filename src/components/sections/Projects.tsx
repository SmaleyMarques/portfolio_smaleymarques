import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Eye, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  objectives: string[];
  indicators: string[];
  image: string;
  link: string;
  details: string;
}

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const projects: Project[] = [
    {
      id: 1,
      title: "DASHBOARD COMERCIAL",
      category: "Business Intelligence",
      objectives: [
        "Acompanhar vendas por tempo e mais",
        "Análise da margem de lucro (%)",
        "Performance por vendedor da empresa",
        "Desempenho  por categoria de produto"
      ],
      indicators: ["Vendas", "Margem", "Performance", "Top Vendedores"],
      details: "Dashboard completo para análise comercial com foco em vendas, margem de lucro e performance de vendedores. Inclui análise temporal e por produtos.",
      image: "/assets/dashboard-comercial.png",
      link: "https://app.powerbi.com/view?r=eyJrIjoiMjU4MzU4OTYtZTg2ZS00Y2M4LTg5ODctOGExOGY3MDg2ODM5IiwidCI6ImFiOGFiMGMyLTQ4ZTYtNDQ4Yy04YWJkLTk1MWViYzgxYjk0NCJ9"
    },
    {
      id: 2,
      title: "DASHBOARD DE LOGÍSTICA",
      category: "Supply Chain",
      objectives: [
        "Monitoramento de entregas em tempo real",
        "Análise de tempo de entrega (on time in full)",
        "Performance dos transportadores de acordo com a região",
        "TOP clientes, representatividade dos desvios operacionais e volume transportado"
      ],
      indicators: ["Entregas", "OTIF", "Transportadores", "Desvios"],
      details: "Sistema de monitoramento logístico com análise de performance de entregas e transportadores. Controle de KPIs logísticos e otimização de rotas.",
      image: "/assets/dashboard-logistica.jpg",
      link: "https://app.powerbi.com/view?r=eyJrIjoiMjU4MzU4OTYtZTg2ZS00Y2M4LTg5ODctOGExOGY3MDg2ODM5IiwidCI6ImFiOGFiMGMyLTQ4ZTYtNDQ4Yy04YWJkLTk1MWViYzgxYjk0NCJ9"
    },
    {
      id: 3,
      title: "DASHBOARD FINANCEIRO",
      category: "Finance",
      objectives: [
        "Controle de fluxo de caixa",
        "Análise de receitas vs despesas",
        "Operação MoM (Month Over Month) de despesas",
        "Margem de contribuição, saldo ao longo do tempo e também por centro de custo"
      ],
      indicators: ["Fluxo de Caixa", "Receitas vs Despesas", "MoM", "Margem"],
      details: "Dashboard financeiro para controle de fluxo de caixa e análise de receitas e despesas. Inclui projeções financeiras e análise de rentabilidade por centro de custo.",
      image: "/assets/dashboard-financeiro.jpg",
      link: "https://app.powerbi.com/view?r=eyJrIjoiMjU4MzU4OTYtZTg2ZS00Y2M4LTg5ODctOGExOGY3MDg2ODM5IiwidCI6ImFiOGFiMGMyLTQ4ZTYtNDQ4Yy04YWJkLTk1MWViYzgxYjk0NCJ9"
    },
    {
      id: 4,
      title: "DASHBOARD DE VENDAS",
      category: "Sales Analytics",
      objectives: [
        "Análise de funil de vendas",
        "Performance individual dos vendedores",
        "Previsão de vendas baseada em histórico",
        "Análise de sazonalidade e tendências"
      ],
      indicators: ["Funil", "Performance", "Previsão", "Tendências"],
      details: "Dashboard especializado em análise de vendas com foco em performance individual, previsões e identificação de oportunidades de crescimento.",
      image: "/assets/dashboard-vendas.jpg",
      link: "https://app.powerbi.com/view?r=eyJrIjoiMjU4MzU4OTYtZTg2ZS00Y2M4LTg5ODctOGExOGY3MDg2ODM5IiwidCI6ImFiOGFiMGMyLTQ4ZTYtNDQ4Yy04YWJkLTk1MWViYzgxYjk0NCJ9"
    },
    {
      id: 5,
      title: "DASHBOARD DE RH",
      category: "Human Resources",
      objectives: [
        "Análise de turnover e retenção",
        "Monitoramento de performance dos colaboradores",
        "Controle de custos com pessoal",
        "Análise de satisfação e engajamento"
      ],
      indicators: ["Turnover", "Performance", "Custos", "Satisfação"],
      details: "Dashboard de recursos humanos para análise de indicadores de pessoas, incluindo turnover, performance e custos operacionais com pessoal.",
      image: "/assets/dashboard-rh.jpg",
      link: "https://app.powerbi.com/view?r=eyJrIjoiMjU4MzU4OTYtZTg2ZS00Y2M4LTg5ODctOGExOGY3MDg2ODM5IiwidCI6ImFiOGFiMGMyLTQ4ZTYtNDQ4Yy04YWJkLTk1MWViYzgxYjk0NCJ9"
    },
    {
      id: 6,
      title: "DASHBOARD DE MARKETING",
      category: "Marketing Analytics",
      objectives: [
        "ROI de campanhas de marketing",
        "Análise de conversão por canal",
        "Custo de aquisição de clientes (CAC)",
        "Lifetime Value (LTV) dos clientes"
      ],
      indicators: ["ROI", "Conversão", "CAC", "LTV"],
      details: "Dashboard de marketing digital com análise de performance de campanhas, ROI e métricas de aquisição e retenção de clientes.",
      image: "/assets/dashboard-marketing.jpg",
      link: "https://app.powerbi.com/view?r=eyJrIjoiMjU4MzU4OTYtZTg2ZS00Y2M4LTg5ODctOGExOGY3MDg2ODM5IiwidCI6ImFiOGFiMGMyLTQ4ZTYtNDQ4Yy04YWJkLTk1MWViYzgxYjk0NCJ9"
    }
  ];

  // Responsive items per page
  const getItemsPerPage = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 1; // Mobile: 1 card
      if (window.innerWidth < 1024) return 2; // Tablet: 2 cards
      return 3; // Desktop: 3 cards
    }
    return 3;
  };

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
    };

    setItemsPerPage(getItemsPerPage());
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentProjects = () => {
    const start = currentIndex * itemsPerPage;
    return projects.slice(start, start + itemsPerPage);
  };

  return (
    <section id="projects" className="py-12 sm:py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Portfólio de Projetos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Conheça alguns dos principais projetos desenvolvidos com foco em Business Intelligence e análise de dados
          </p>
        </div>

        {/* Projects Carousel */}
        <div className="relative">
          {/* Page Indicators */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-purple-500' : 'bg-slate-600'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Projects Container with Navigation */}
          <div className="relative max-w-7xl mx-auto px-16 md:px-20">
            {/* Left Navigation Arrow - Desktop Only */}
            <Button
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-slate-800/90 border-slate-700 text-white hover:bg-purple-600 hover:border-purple-600 backdrop-blur-sm shadow-lg w-10 h-10"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Right Navigation Arrow - Desktop Only */}
            <Button
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-slate-800/90 border-slate-700 text-white hover:bg-purple-600 hover:border-purple-600 backdrop-blur-sm shadow-lg w-10 h-10"
              disabled={currentIndex === totalPages - 1}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {getCurrentProjects().map((project) => (
                <Card key={project.id} className="bg-slate-800 border-slate-700 hover:border-purple-500 transition-all duration-300 group hover:shadow-2xl hover:shadow-purple-500/20">
                  <CardContent className="p-0">
                    {/* Project Image */}
                    <div className="relative h-40 sm:h-48 bg-gradient-to-br from-purple-600 to-blue-600 rounded-t-lg overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          // Fallback to gradient background if image doesn't exist
                          (e.target as HTMLImageElement).style.display = 'none';
                          (e.target as HTMLImageElement).parentElement!.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600">
                              <div class="text-center text-white">
                                <div class="text-3xl sm:text-4xl mb-2">📊</div>
                                <p class="text-xs sm:text-sm font-medium px-2">${project.category}</p>
                              </div>
                            </div>
                          `;
                        }}
                      />
                    </div>

                    {/* Project Content */}
                    <div className="p-4 sm:p-6">
                      <div className="mb-3">
                        <span className="text-xs font-medium text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors leading-tight">
                        {project.title}
                      </h3>

                      <div className="mb-4">
                        <h4 className="text-xs sm:text-sm font-semibold text-gray-300 mb-2">Objetivos principais:</h4>
                        <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
                          {project.objectives.slice(0, 2).map((objective, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="w-1 h-1 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                              <span className="leading-relaxed">{objective}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4 sm:mb-6">
                        <h4 className="text-xs sm:text-sm font-semibold text-gray-300 mb-2">Indicadores:</h4>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {project.indicators.map((indicator, index) => (
                            <span key={index} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                              {indicator}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 group/btn text-sm sm:text-base py-2 sm:py-3">
                            <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                            Ver detalhes
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="p-4 bg-slate-800 border-slate-700 text-white max-w-2xl mx-4 sm:mx-auto">
                          <DialogHeader>
                            <DialogTitle className="text-xl sm:text-2xl font-bold text-purple-400">
                              {project.title}
                            </DialogTitle>
                          </DialogHeader>
                          
                          <div className="space-y-4 sm:space-y-6 max-h-[70vh] overflow-y-auto">
                            <img 
                              src={project.image} 
                              alt={project.title}
                              className="w-full h-48 sm:h-64 object-contain rounded-lg"
                              onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                                (e.target as HTMLImageElement).parentElement!.innerHTML += `
                                  <div class="w-full h-48 sm:h-64 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                                    <div class="text-center text-white">
                                      <div class="text-4xl sm:text-6xl mb-4">📊</div>
                                      <p class="text-base sm:text-lg font-medium">${project.category}</p>
                                    </div>
                                  </div>
                                `;
                              }}
                            />
                            
                            <div>
                              <h4 className="text-base sm:text-lg font-semibold mb-3 text-gray-200">Objetivos Completos:</h4>
                              <ul className="space-y-2">
                                {project.objectives.map((objective, index) => (
                                  <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-gray-300">
                                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                                    {objective}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="text-base sm:text-lg font-semibold mb-3 text-gray-200">Descrição:</h4>
                              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{project.details}</p>
                            </div>

                            <div className="flex gap-3">
                            <Button asChild className="mx-2 flex-1 bg-purple-600 hover:bg-purple-700">
                              <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Ver Projeto
                              </a>
                            </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <Button
              onClick={prevSlide}
              variant="outline"
              className="bg-slate-800 border-slate-700 text-white hover:bg-purple-600 hover:border-purple-600 px-6"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Anterior
            </Button>
            <Button
              onClick={nextSlide}
              variant="outline"
              className="bg-slate-800 border-slate-700 text-white hover:bg-purple-600 hover:border-purple-600 px-6"
              disabled={currentIndex === totalPages - 1}
            >
              Próximo
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {/* Project Counter */}
          <div className="text-center mt-4 sm:mt-6">
            <p className="text-sm sm:text-base text-gray-400">
              Mostrando {currentIndex * itemsPerPage + 1}-{Math.min((currentIndex + 1) * itemsPerPage, projects.length)} de {projects.length} projetos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}