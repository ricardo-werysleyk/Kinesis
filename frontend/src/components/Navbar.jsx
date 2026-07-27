import { Logo } from './Logo';

export function Navbar() {
  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center shrink-0">
            <Logo className="h-10 sm:h-12 w-auto" />
          </a>
        </div>

        <div className="flex items-center gap-3 sm:gap-6">
          {/* Esconde o texto 'Serviços' no celular para não empurrar a tela */}
          <a href="#servicos" className="hidden sm:block text-slate-600 hover:text-blue-600 transition font-medium">
            Serviços
          </a>

          <a 
            className="bg-blue-600 text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-semibold text-sm sm:text-base hover:bg-blue-700 transition shadow-sm active:scale-95 text-center shrink-0" 
            target="_blank" 
            rel="noopener noreferrer"
            href="https://wa.me/558899527492"
          >
            Agendar Avaliação
          </a>
        </div>
      </div>
    </nav>
  );
}