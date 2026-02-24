import { useEffect } from 'react';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';

export default function Index() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen font-['Poppins',sans-serif]">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className='flex gap-2 items-center'>
              <img src="/images/logo.svg" className='w-[45px] aspect-square' alt="logo" />
            <div className="text-white font-bold text-xl">
              Smaley Marques 
            </div> 
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: 'Home', id: 'hero' },
                { name: 'Sobre Mim', id: 'about' },
                { name: 'Habilidades', id: 'skills' },
                { name: 'Projetos', id: 'projects' },
                { name: 'Contato', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.id === 'hero') {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Sections */}
      <div id="hero">
        <Hero />
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Smaley Marques
            </h3>
            <p className="text-gray-400 mb-6">
              Analista de Dados | Business Intelligence | Dashboards
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a 
                href="https://wa.me/5521993506065" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                WhatsApp
              </a>
              <a 
                href="https://linkedin.com/in/SmaleyMarques" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:smaleymark@gmail.com"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                E-mail
              </a>
            </div>
            
            <div className="border-t border-slate-800 pt-8">
              <p className="text-gray-500 text-sm">
                © 2024 Smaley Marques. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}