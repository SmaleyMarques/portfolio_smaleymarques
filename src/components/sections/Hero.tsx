import { Button } from '@/components/ui/button';
import { TypingEffect } from '@/components/ui/TypingEffect';
import { Phone, Mail, Linkedin } from 'lucide-react';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-3 sm:px-6 py-16 sm:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Profile Image Section */}
          <div className="flex-shrink-0 order-1 lg:order-none">
            <div className="relative">
              <img 
                src="/assets/profile-photo.jpg" 
                alt="Smaley Marques" 
                className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-purple-400 shadow-2xl mx-auto"
                onError={(e) => {
                  // Fallback to placeholder if image doesn't exist
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgdmlld0JveD0iMCAwIDMyMCAzMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMzIwIiByeD0iMTYwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8Y2lyY2xlIGN4PSIxNjAiIGN5PSIxMzAiIHI9IjUwIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjMiLz4KPHBhdGggZD0iTTEwMCAyNDBDMTAwIDIwMC4yIDEyNi44NjMgMTY4IDE2MCAxNjhDMTkzLjEzNyAxNjggMjIwIDIwMC4yIDIyMCAyNDBIMTAwWiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4zIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50IiB4MT0iMCIgeTE9IjAiIHgyPSIzMjAiIHkyPSIzMjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzk5MzNGRiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzQjgyRjYiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K';
                }}
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-none w-full">
            <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light mb-2 sm:mb-4">
              Olá! Meu nome é
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight break-words">
              <TypingEffect text="Smaley Marques" speed={50} />
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-300 mb-3 sm:mb-6 lg:mb-8 max-w-2xl leading-relaxed mx-auto lg:mx-0 px-2 sm:px-0">
              Graduado em Ciência de Dados pela UFMS - Universidade Federal do Mato Grosso do Sul
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 mb-4 sm:mb-8 lg:mb-10 max-w-2xl leading-relaxed mx-auto lg:mx-0 px-2 sm:px-0">
              Analista de dados com experiência em soluções de Business Intelligence, focado em transformar dados em insights estratégicos para otimizar processos e apoiar decisões assertivas.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-6 sm:mb-12 justify-center lg:justify-start px-2 sm:px-0">
              <Button 
                onClick={() => scrollToSection('about')}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 sm:px-8 py-2 sm:py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 group text-xs sm:text-base"
              >
                <span className="flex items-center gap-2 justify-center">
                  Sobre Mim
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Button>
              <Button 
                onClick={() => scrollToSection('projects')}
                variant="outline" 
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-4 sm:px-8 py-2 sm:py-3 rounded-lg transition-all duration-300 text-xs sm:text-base"
              >
                Projetos
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline" 
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-4 sm:px-8 py-2 sm:py-3 rounded-lg transition-all duration-300 text-xs sm:text-base"
              >
                Contato
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center lg:justify-start px-2 sm:px-0">
              <a 
                href="https://wa.me/5521993506065" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors group justify-center lg:justify-start"
              >
                <Phone className="w-3 h-3 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm">(21) 99350-6065</span>
              </a>
              <a 
                href="https://linkedin.com/in/SmaleyMarques" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group justify-center lg:justify-start"
              >
                <Linkedin className="w-3 h-3 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm">/SmaleyMarques</span>
              </a>
              <a 
                href="mailto:smaleymark@gmail.com"
                className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group justify-center lg:justify-start"
              >
                <Mail className="w-3 h-3 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm">smaleymark@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}