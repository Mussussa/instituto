import React, { useState, useEffect } from "react";
// Importa o teu array completo diretamente do teu ficheiro de dados
import { cursos } from "../data"; 

// Mapeamento de imagens profissionais e de equipamentos
const IMAGENS_CATEGORIAS = {
  "Gastronomia": "https://images.unsplash.com/photo-1581622558663-b2e33377dfb2?q=80&w=1200",
  "Operação de Máquinas": "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=1200",
  "Construção Civil": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200",
  "Informática": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
  "Marketing Digital": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200",
  "Gestão": "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200",
  "Agricultura": "https://images.unsplash.com/photo-1592417817098-8f3d6eb18865?q=80&w=1200",
  "Saúde e Segurança": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200",
  "Padrão": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200"
};

function Hero() {
  // ALTERAÇÃO: Agora usamos TODOS os cursos do array para os slides do Banner
  const slidesDestaque = cursos; 

  const [slideAtual, setSlideAtual] = useState(0);
  const [msgAtual, setMsgAtual] = useState(0);

  // Efeito 1: Transição automática dos slides principais a cada 6 segundos
  useEffect(() => {
    if (slidesDestaque.length === 0) return;
    const timerSlide = setInterval(() => {
      setSlideAtual((prev) => (prev + 1) % slidesDestaque.length);
      setMsgAtual(0); 
    }, 6000);
    return () => clearInterval(timerSlide);
  }, [slidesDestaque.length]);

  // Efeito 2: Rotação das mensagens internas (conteúdo do curso) a cada 3 segundos
  useEffect(() => {
    if (slidesDestaque.length === 0) return;
    const totalMsgs = slidesDestaque[slideAtual]?.conteudo?.length || 0;
    if (totalMsgs === 0) return;

    const timerMsg = setInterval(() => {
      setMsgAtual((prev) => (prev + 1) % totalMsgs);
    }, 3000);
    return () => clearInterval(timerMsg);
  }, [slideAtual, slidesDestaque]);

  if (slidesDestaque.length === 0) {
    return (
      <header className="w-full h-48 bg-slate-800 rounded-3xl flex items-center justify-center text-white font-mono">
        Carregando destaques da GREJUDEC...
      </header>
    );
  }

  const cursoAtivo = slidesDestaque[slideAtual];
  const urlImagemDinamica = IMAGENS_CATEGORIAS[cursoAtivo.categoria] || IMAGENS_CATEGORIAS["Padrão"];

  return (
    <header className="relative w-full h-[400px] md:h-[460px] bg-slate-950 rounded-3xl overflow-hidden shadow-lg mb-6 group">
      
      {/* Imagem de fundo */}
      <div className="absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/85 to-transparent z-10" />
        <img
          src={urlImagemDinamica}
          alt={cursoAtivo.titulo}
          className="w-full h-full object-cover opacity-60 transition-all duration-1000"
        />
      </div>

      {/* Conteúdo dinâmico */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-12 max-w-2xl text-left select-none">
        <span className="inline-block bg-blue-600 text-white font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full w-max mb-3 shadow-md">
          {cursoAtivo.categoria} • {cursoAtivo.duracao}
        </span>

        <h1 className="text-xl md:text-4xl font-black text-white uppercase tracking-tight leading-tight drop-shadow-md">
          {cursoAtivo.titulo}
        </h1>

        <p className="text-yellow-400 font-bold text-sm md:text-lg mt-2 font-mono">
          Investimento: {cursoAtivo.valor} <span className="text-white/60 font-sans text-xs font-normal">({cursoAtivo.regime})</span>
        </p>

        <p className="text-slate-300 text-xs md:text-sm mt-2 line-clamp-2 md:line-clamp-3 font-sans max-w-xl">
          {cursoAtivo.descricao}
        </p>

        {/* Janela Rotativa Interna de Conteúdos */}
        <div className="min-h-[50px] md:min-h-[64px] flex items-center mt-4 border-l-4 border-emerald-500 pl-4 bg-white/5 backdrop-blur-xs rounded-r-xl pr-2">
          {cursoAtivo.conteudo?.map((itemAprender, index) => (
            <p
              key={index}
              className={`text-slate-100 text-xs md:text-sm font-mono leading-relaxed transition-all duration-500 absolute ${
                index === msgAtual 
                  ? "opacity-100 translate-x-0 relative" 
                  : "opacity-0 -translate-x-4 pointer-events-none"
              }`}
            >
              <span className="text-emerald-400 font-bold font-sans">✓ Aprendizado:</span> "{itemAprender}"
            </p>
          ))}
        </div>
      </div>

      {/* Paginação do Slider */}
      <div className="absolute bottom-4 right-6 z-30 flex flex-wrap max-w-[200px] justify-end gap-2">
        {slidesDestaque.map((_, idx) => (
          <button
            key={idx}
            onClick={() => { setSlideAtual(idx); setMsgAtual(0); }}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === slideAtual ? "w-6 bg-yellow-400" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </header>
  );
}

export default Hero;