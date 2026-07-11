import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    // fixed top-0 left-0 right-0 garante que ela não saia do topo no scroll
    // bg-white/95 com backdrop-blur-sm dá um efeito moderno e não deixa ver o texto por baixo
    <nav className="fixed top-0 left-0 right-0 h-auto bg-white/95 backdrop-blur-sm rounded-b-2xl flex flex-col md:flex-row items-center justify-between px-4 md:px-6 shadow-md gap-2 py-3 md:py-0 z-50 transition-all duration-300">
      <div className="navbar-bg-image"></div>

      {/* Área do Logo e Nome da Marca */}
      <div className="flex items-center justify-between md:justify-start gap-3 z-10 w-full md:w-auto">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden bg-slate-100 flex items-center justify-center flex-shrink-0 border border-slate-200">
            <img
              src="/logo.jpeg"
              alt="GREJUDEC Logo"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentNode.innerHTML =
                  '<span class="text-[10px] font-bold text-slate-400 font-mono">GREJUDEC</span>';
              }}
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-black text-lg md:text-5xl text-slate-900 tracking-tight leading-none uppercase">
              <span className="text-red-600">GRE</span>
              <span className="text-blue-600">JU</span>
              <span className="text-yellow-400">DE</span>
              <span className="text-transparent [-webkit-text-stroke:1px_#000]">
                C
              </span>
            </span>
            <span className="text-[10px] md:text-1xl text-slate-400 font-bold tracking-wider uppercase mt-1">
              Grêmio Juvenil para Desenvolvimento Comunitário
            </span>
          </div>
        </div>

        {/* Botão Hambúrguer */}
        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="flex md:hidden p-2 font-bold text-slate-700 bg-slate-100 border border-slate-600 rounded-xl text-lg transition-colors active:scale-95"
        >
          {menuAberto ? "✕" : "☰"}
        </button>
      </div>

      {/* Botões */}
      <div 
        className={`${
          menuAberto ? "flex animate-menu-open" : "hidden"
        } md:flex flex-col md:flex-row flex-initial place-items-center-safe justify-center gap-2 md:gap-3 font-mono text-xs z-10 w-full md:w-auto border-t md:border-t-0 border-dashed border-slate-200 pt-3 md:pt-0 pb-2 md:pb-0`}
      >
        <button className="p-1.5 w-full md:w-auto font-bold text-slate-700 bg-slate-100 border border-slate-600 rounded-xl hover:bg-slate-200 transition-colors">
          <span className="text-red-600">Cursos</span>
        </button>
        <button className="p-1.5 w-full md:w-auto font-bold text-slate-600 hover:text-slate-900 border border-slate-600 rounded-xl transition-colors">
          <span className="text-blue-600">Contactos</span>
        </button>

        <button className="p-1.5 w-full md:w-auto font-bold text-slate-600 hover:text-slate-900 transition-colors border border-slate-600 rounded-xl">
          <span className="text-transparent inline-block [-webkit-text-stroke:1px_#000]">
            Sobre Nós
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;