import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Services } from './components/Services';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Navbar />
      <main>
        <HeroSection />
        <Services />
        
        <section className="bg-blue-700 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <h4 className="text-3xl font-extrabold text-white leading-tight">
              Pronto para voltar ao esporte com confiança?
            </h4>
            <p className="text-xl text-blue-100">
              Agende agora sua primeira avaliação técnica e inicie seu plano de reabilitação personalizado no Kinesis.
            </p>
            <a className="bg-white text-blue-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition shadow-lg mt-4" target='_blank' href="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2F558899527492%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGn4WuHD2Q2GIvzl8teXWzjmEq1eoI7B_s30gSRqb0M0tbVQb4vEPnSLnNI4uQ_aem_6lUWG8VmMoJieY-17fJCxQ&e=AUAG8gDIVEMbHvIl2VIe_ycfAxigxNotr64H6OY3ZR3UHEVzpZ854HzutNT_DqyYiXa9FjQdFbNwAc9LIiqPn2K_I3RgZ4WVD7hbnzYp1IsPus7FBfDHZKIWfXLpgKD6QxsXZwIiIjIbLisoQtwLabs">
              Agendar Avaliação
            </a>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Kinesis - Fisioterapia Esportiva. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;