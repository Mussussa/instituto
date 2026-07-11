import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Sobre from "./pages/Sobre";
import { cursos, categories } from "./data";

function App() {
  const [cursoSelecionado, setCursoSelecionado] = useState(null);
  const [filtroCategoria, setFiltroCategoria] = useState("Todos");
  const [filtroRegime, setFiltroRegime] = useState("Todos");
  const [termoPesquisa, setTermoPesquisa] = useState("");

  const alternarSelecao = (curso) => {
    if (cursoSelecionado?.id === curso.id) {
      setCursoSelecionado(null);
    } else {
      setCursoSelecionado(curso);
    }
  };

  const cursosFiltrados = cursos.filter((curso) => {
    const matchCategoria =
      filtroCategoria === "Todos" || curso.categoria === filtroCategoria;
    const matchRegime =
      filtroRegime === "Todos" || curso.regime === filtroRegime;
    const matchPesquisa = curso.titulo
      .toLowerCase()
      .includes(termoPesquisa.toLowerCase());
    return matchCategoria && matchRegime && matchPesquisa;
  });

  const categoriasFiltro = ["Fistrar Por Categorias", ...categories];
  const regimesFiltro = [
    "Fistrar Por Regimes",
    ...new Set(cursos.map((c) => c.regime)),
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased selection:bg-blue-500 selection:text-white">
      <Navbar />

      <div className="pt-28 md:pt-36 p-4 max-w-[1600px] mx-auto">
        <Hero />

        {/* lg:items-stretch garante que o aside e a listagem têm a mesma altura no PC */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start lg:items-stretch">
          {/* AQUI ESTÁ A MUDANÇA: Se tiver curso, ocupa 7 colunas. Se não, ocupa as 12 colunas (largura total) */}
          <section
            className={`${cursoSelecionado ? "lg:col-span-7" : "lg:col-span-12"} space-y-6 flex flex-col transition-all duration-300`}
          >
            <div
              className="border border-slate-200 bg-white shadow-sm rounded-2xl p-4 space-y-4 shrink-0 "
              id="cursos"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <span className="font-mono text-slate-800 font-bold text-sm tracking-wider uppercase">
                  Catálogo de Formação
                </span>
                <input
                  type="text"
                  placeholder="Pesquisar curso..."
                  value={termoPesquisa}
                  onChange={(e) => setTermoPesquisa(e.target.value)}
                  className="w-full sm:w-64 h-10 border border-slate-300 bg-slate-50 focus:bg-white rounded-xl px-4 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <select
                  value={filtroCategoria}
                  onChange={(e) => setFiltroCategoria(e.target.value)}
                  className="w-full h-10 border border-slate-300 bg-slate-50 rounded-xl px-3 text-xs font-bold font-mono focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700 "
                >
                  {categoriasFiltro.map((cat, index) => (
                    <option className="" key={index} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>

                <select
                  value={filtroRegime}
                  onChange={(e) => setFiltroRegime(e.target.value)}
                  className="w-full h-10 border border-slate-300 bg-slate-50 rounded-xl px-3 text-xs font-bold font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-700"
                >
                  {regimesFiltro.map((reg, index) => (
                    <option key={index} value={reg}>
                      {reg}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Limitador de altura (max-h) equivalente a ~3 linhas (530px) e scroll exclusivo para o PC (lg) */}
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:max-h-[530px] lg:overflow-y-auto lg:pr-2 lg:pb-2">
              {cursosFiltrados.map((curso) => (
                <div
                  key={curso.id}
                  onClick={() => alternarSelecao(curso)}
                  className={`relative overflow-hidden border rounded-2xl p-3 md:p-5 transition-all cursor-pointer min-h-[160px] group ${
                    cursoSelecionado?.id === curso.id
                      ? "border-blue-500 shadow-md ring-1 ring-blue-500"
                      : "border-slate-200 hover:border-blue-300 hover:shadow-lg"
                  }`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center blur-sm opacity-40 group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${curso.imagem})` }}
                  />
                  <div
                    className={`absolute inset-0 z-0 transition-colors duration-300 ${cursoSelecionado?.id === curso.id ? "bg-blue-50/85" : "bg-white/90 group-hover:bg-white/75"}`}
                  />

                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <span className="text-[9px] font-mono bg-slate-900/10 text-slate-700 px-2 py-0.5 rounded-md font-bold uppercase">
                        {curso.categoria}
                      </span>
                      <h3 className="font-sans text-xs md:text-base text-slate-900 font-black mt-2 leading-tight">
                        {curso.titulo}
                      </h3>
                    </div>

                    <div className="border-t border-dashed border-slate-400/30 pt-2 flex flex-col md:flex-row justify-between items-start md:items-end mt-3 gap-2">
                      <span className="text-blue-700 font-black text-xs md:text-sm">
                        {curso.valor}
                      </span>
                      <button className="text-[9px] md:text-[10px] font-bold text-white bg-slate-900 px-2 py-1 md:px-3 md:py-1.5 rounded-lg w-full md:w-auto">
                        Ver
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {cursoSelecionado && (
            <aside className="lg:col-span-5 fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 lg:bg-transparent lg:static lg:p-0 lg:z-auto">
              <div className="w-full max-w-xl lg:max-w-full border border-blue-200 bg-white rounded-3xl p-6 shadow-2xl relative overflow-hidden max-h-[90vh] lg:max-h-none lg:h-full overflow-y-auto">
                <div
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage: `url('/logo.jpeg')`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                />

                <div className="relative z-10 space-y-6">
                  <div className="flex justify-between items-start border-b border-dashed border-slate-200 pb-4">
                    <div>
                      <span className="font-mono text-blue-600 font-bold text-[10px] tracking-widest uppercase bg-blue-50 px-2 py-1 rounded">
                        Detalhes da Formação
                      </span>
                      <h2 className="font-sans text-xl font-black text-slate-900 mt-3">
                        {cursoSelecionado.titulo}
                      </h2>
                    </div>
                    <button
                      onClick={() => setCursoSelecionado(null)}
                      className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-red-50"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="border border-slate-100 bg-slate-50/80 rounded-xl p-3">
                      <span className="text-[9px] text-slate-400 uppercase font-bold">
                        Regime
                      </span>
                      <p className="text-xs font-bold">
                        {cursoSelecionado.regime}
                      </p>
                    </div>
                    <div className="border border-slate-100 bg-slate-50/80 rounded-xl p-3">
                      <span className="text-[9px] text-slate-400 uppercase font-bold">
                        Certificação
                      </span>
                      <p className="text-xs font-bold">
                        {cursoSelecionado.certificacao}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xs font-black text-slate-800 uppercase">
                      Para quem é este curso?
                    </h4>
                    <ul className="ml-4 space-y-1">
                      {cursoSelecionado.objetivos.map((obj, i) => (
                        <li
                          key={i}
                          className="text-xs text-slate-600 list-disc"
                        >
                          {obj}
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-xs font-black text-slate-800 uppercase">
                      Conteúdo Programático
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {cursoSelecionado.conteudo.map((item, i) => (
                        <div
                          key={i}
                          className="text-[11px] text-slate-700 bg-slate-100/50 p-2 rounded-lg font-mono"
                        >
                          ✓ {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4 flex items-center justify-between">
                    <span className="text-blue-600 font-black text-lg">
                      {cursoSelecionado.valor}
                    </span>
                    <button className="px-6 py-3 bg-slate-900 text-white text-xs font-bold uppercase rounded-xl">
                      Inscrever-se Agora
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          )}
        </main>
        <Sobre />

        <Footer />
      </div>
    </div>
  );
}

export default App;
