import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { cursos } from '../data';

export default function CursoDetalhe() {
  const { id } = useParams();
  const curso = cursos.find(c => c.id === parseInt(id));

  if (!curso) return <div className="text-center py-20 text-2xl font-bold">Curso não encontrado.</div>;

  return (
    <div className="min-h-screen bg-white animate-fade-in-up">
      {/* Hero Section do Curso */}
      <div className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <span className="bg-blue-500 text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
            {curso.categoria}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-6 mb-4">{curso.titulo}</h1>
          <p className="text-xl text-slate-300 max-w-3xl">{curso.descricao}</p>
        </div>
      </div>

      {/* Corpo de Informações */}
      <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Coluna Principal */}
        <div className="lg:col-span-2 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-4">Objetivos</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {curso.objetivos.map((obj, i) => <li key={i}>{obj}</li>)}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-4">Conteúdo Programático</h2>
            <ul className="space-y-3">
              {curso.conteudo.map((modulo, i) => (
                <li key={i} className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-gray-800 font-medium">
                  {modulo}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-4">Requisitos & Certificação</h2>
            <p className="text-gray-700 mb-2"><strong>Requisitos:</strong> {curso.requisitos}</p>
            <p className="text-gray-700"><strong>Certificação:</strong> {curso.certificacao}</p>
          </section>
        </div>

        {/* Sidebar Flutuante de Inscrição */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 sticky top-8">
            <div className="text-3xl font-extrabold text-gray-900 mb-6">{curso.valor}</div>
            
            <div className="space-y-4 mb-8 text-gray-600">
              <div className="flex justify-between border-b pb-2">
                <span>Duração</span> <span className="font-semibold text-gray-900">{curso.duracao}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Modalidade</span> <span className="font-semibold text-gray-900">{curso.regime}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Formador</span> <span className="font-semibold text-gray-900">{curso.formador}</span>
              </div>
            </div>

            <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/30">
              Inscrever-se Agora
            </button>
            <Link to="/" className="block text-center mt-4 text-sm text-gray-500 hover:text-gray-900">
              Voltar ao Catálogo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}