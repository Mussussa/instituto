import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cursos, categorias } from '../data';

export default function Catalogo() {
  const [filtroArea, setFiltroArea] = useState('');
  const [filtroDuracao, setFiltroDuracao] = useState('');
  const [filtroRegime, setFiltroRegime] = useState('');

  const cursosFiltrados = cursos.filter(curso => {
    return (
      (filtroArea === '' || curso.categoria === filtroArea) &&
      (filtroDuracao === '' || curso.duracao === filtroDuracao) &&
      (filtroRegime === '' || curso.regime === filtroRegime)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-8 animate-fade-in-up">Catálogo de Formações</h1>
        
        {/* Sistema de Filtros */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8 flex flex-wrap gap-4 animate-fade-in-up">
          <select 
            className="p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none w-full md:w-auto"
            value={filtroArea} onChange={(e) => setFiltroArea(e.target.value)}
          >
            <option value="">Todas as Áreas</option>
            {categorias.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>

          <select 
            className="p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none w-full md:w-auto"
            value={filtroDuracao} onChange={(e) => setFiltroDuracao(e.target.value)}
          >
            <option value="">Qualquer Duração</option>
            <option value="1 Mês">1 Mês</option>
            <option value="3 Meses">3 Meses</option>
          </select>

          <select 
            className="p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none w-full md:w-auto"
            value={filtroRegime} onChange={(e) => setFiltroRegime(e.target.value)}
          >
            <option value="">Qualquer Modalidade</option>
            <option value="Presencial">Presencial</option>
            <option value="Online">Online</option>
            <option value="Híbrido">Híbrido</option>
          </select>
        </div>

        {/* Grid de Cursos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cursosFiltrados.map((curso, index) => (
            <div 
              key={curso.id} 
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 bg-slate-800 flex items-center justify-center relative overflow-hidden">
                <span className="text-white text-lg font-semibold z-10">{curso.categoria}</span>
                <div className="absolute inset-0 bg-blue-500 opacity-20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{curso.titulo}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{curso.descricao}</p>
                
                <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
                  <span className="flex items-center gap-1">⏱️ {curso.duracao}</span>
                  <span className="flex items-center gap-1">📍 {curso.regime}</span>
                </div>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-lg font-bold text-blue-600">{curso.valor}</span>
                  <Link 
                    to={`/curso/${curso.id}`}
                    className="px-5 py-2 bg-slate-900 hover:bg-blue-600 text-white rounded-lg transition-colors font-medium"
                  >
                    Ver Detalhes
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}