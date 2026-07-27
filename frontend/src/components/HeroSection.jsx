import fotoPerfil from '../assets/PerfilWallace.PNG';

export function HeroSection() {
  return (
    <header className="bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <span className="inline-block bg-blue-100 text-blue-700 font-semibold px-4 py-1 rounded-full text-sm">
            Fisioterapia Esportiva de Alta Performance
          </span >
          <h2 className="text-5xl md:text-6xl font-extrabold text-slate-950 leading-tight">
            Volte ao seu <span className="text-blue-600">máximo rendimento</span>, livre de dores.
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl">
            Reabilitação especializada, prevenção de lesões e recovery para atletas que buscam performance e saúde a longo prazo. Atendimento focado no seu esporte.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
            <a className="bg-blue-600 text-white px-8 py-3.5 rounded-full font-bold text-lg hover:bg-blue-700 transition w-full sm:w-auto shadow-md" target='_blank' href="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2F558899527492%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGn4WuHD2Q2GIvzl8teXWzjmEq1eoI7B_s30gSRqb0M0tbVQb4vEPnSLnNI4uQ_aem_6lUWG8VmMoJieY-17fJCxQ&e=AUAG8gDIVEMbHvIl2VIe_ycfAxigxNotr64H6OY3ZR3UHEVzpZ854HzutNT_DqyYiXa9FjQdFbNwAc9LIiqPn2K_I3RgZ4WVD7hbnzYp1IsPus7FBfDHZKIWfXLpgKD6QxsXZwIiIjIbLisoQtwLabs">
              Agendar Avaliação Inicial
            </a>
            <a href="#servicos" className="text-slate-700 hover:text-blue-600 transition font-semibold text-lg flex items-center gap-2">
              Conheça as especialidades →
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <div className="w-full h-80 md:h-96 bg-slate-200 rounded-3xl flex items-center justify-center border-4 border-dashed border-slate-300">
            <img src={fotoPerfil}></img>
          </div>
        </div>

      </div>
    </header>
  );
}