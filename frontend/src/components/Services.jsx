export function Services() {
  const specialities = [
    { name: 'Reabilitação Esportiva', icon: '🦵', desc: 'Tratamento focado em pós-operatórios e lesões comuns no esporte (ligamentos, tendinites).' },
    { name: 'Recovery Ativo', icon: '⚡', desc: 'Recuperação muscular acelerada com técnicas manuais e tecnológicas para otimizar treinos.' },
    { name: 'Prevenção de Lesões', icon: '🛡️', desc: 'Avaliação biomecânica e exercícios específicos para evitar interrupções na sua rotina de treinos.' },
  ];

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-3">
          <span className="text-blue-600 font-semibold">O que fazemos</span>
          <h3 className="text-4xl font-extrabold text-slate-950">Especialidades Kinesis</h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Abordagem moderna e baseada em evidência para tratar e otimizar o corpo do atleta.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {specialities.map((spec, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-4 hover:shadow-lg hover:border-blue-100 transition-all">
              <div className="text-5xl">{spec.icon}</div>
              <h4 className="text-xl font-bold text-slate-900 pt-3">{spec.name}</h4>
              <p className="text-slate-600">{spec.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}