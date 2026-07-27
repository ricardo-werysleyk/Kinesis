export function Services() {
  const specialities = [
    { name: 'Reabilitação Esportiva', icon: '🦵', desc: 'Tratamento focado em pós-operatórios e lesões comuns no esporte (ligamentos, tendinites).' },
    { name: 'Recovery Ativo', icon: '⚡', desc: 'Recuperação muscular acelerada com técnicas manuais e tecnológicas para otimizar treinos.' },
    { name: 'Prevenção de Lesões', icon: '🛡️', desc: 'Avaliação biomecânica e exercícios específicos para evitar interrupções na sua rotina de treinos.' },
  ];

  return (
    <section id="servicos" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 space-y-3">
          <span className="text-blue-600 font-semibold text-sm sm:text-base uppercase tracking-wider">
            O que fazemos
          </span>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
            Especialidades Kinesis
          </h3>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Abordagem moderna e baseada em evidência para tratar e otimizar o corpo do atleta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {specialities.map((spec, i) => (
            <div 
              key={i} 
              className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center space-y-4 hover:shadow-lg hover:border-blue-100 transition-all"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl shadow-inner">
                {spec.icon}
              </div>
              
              <h4 className="text-xl font-bold text-slate-900 pt-2">
                {spec.name}
              </h4>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {spec.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}