import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  // Informações trazidas do componente Sobre
  const dados = {
    identificacao: {
      nome: "Grêmio Juvenil Para Desenvolvimento Comunitário",
      sigla: "GREJUDEC",
    },
    localizacao: {
      endereco: "Terminal de Chapa da Munhava Campo",
      cidadeProvincia: "Beira - Sofala",
    },
    contactos: {
      chamadas: ["860 717 318"],
      whatsapp: ["841 008 432"],
    },
    cursosTecnicos: {
      lista: [
        "Inglês",
        "Secretariado Executivo",
        "Gestão de Recursos Humanos",
        "Gestão de Empresas",
        "Gestão Aduaneira",
        "Gestão Portuária",
        "Gestão de Projectos",
        "Gestão de Marketing e Venda",
        "Culinária",
        "Confeitaria",
        "Corte e Costura",
        "HST (Higiene e Segurança no Trabalho)",
        "Electricidade Instaladora",
        "Educação Infantil",
        "Empreendedorismo",
        "Jornalismo",
        "Agro-Processamento",
        "Serralharia",
        "Canalização",
        "Informática",
      ],
    },
  };

  return (
    <footer
      className="w-full bg-slate-900 text-slate-300 py-10 md:py-16 mt-12 rounded-t-3xl border-t-4 border-blue-500"
      id="sobre"
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
        {/* Layout Grid: 1 Coluna (Mobile) -> 2 Colunas (Tablet) -> 4 Colunas (PC) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Coluna 1: Logo e Identidade */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <div className="w-24 h-24 bg-white rounded-full p-1.5 shadow-lg flex items-center justify-center mb-2">
              <img
                src="/logo.jpeg"
                alt={`Logo ${dados.identificacao.sigla}`}
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div>
              <h3 className="text-white font-black text-2xl tracking-wide uppercase">
                {dados.identificacao.sigla}
              </h3>
              <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mt-1">
                {dados.identificacao.nome}
              </p>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Educando hoje, transformando amanhã, construindo o futuro da
              Beira! O conhecimento é o seu melhor investimento.
            </p>
          </div>

          {/* Coluna 2: Cursos (Nova coluna com as informações adicionadas) */}
          <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-white font-black text-lg uppercase tracking-wider border-b-2 border-blue-500 pb-2 inline-block">
              Nossos Cursos
            </h3>
            <ul className="space-y-3">
              {/* Mostra apenas os primeiros 6 cursos no footer para não ficar muito longo */}
              {dados.cursosTecnicos.lista.slice(0, 6).map((curso, i) => (
                <li
                  key={i}
                  className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <span className="text-blue-500 font-bold">&rsaquo;</span>{" "}
                  {curso}
                </li>
              ))}
              <a href="#cursos" className="block mt-2">
                <li className="text-sm text-blue-500 font-bold hover:text-white transition-colors duration-300 cursor-pointer list-none">
                  Ver todos os cursos...
                </li>
              </a>
            </ul>
          </div>

          {/* Coluna 3: Fale Connosco e Localização (Usando os Dados) */}
          <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-white font-black text-lg uppercase tracking-wider border-b-2 border-blue-500 pb-2 inline-block">
              Fale Connosco
            </h3>

            <div className="space-y-5">
              {/* Localização */}
              <div className="flex items-start gap-3 justify-center md:justify-start">
                <svg
                  className="w-6 h-6 text-red-500 shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p className="font-bold text-white text-sm uppercase">
                    Localização
                  </p>
                  <p className="text-sm text-slate-400 mt-1">
                    {dados.localizacao.endereco}
                    <br />
                    {dados.localizacao.cidadeProvincia}
                  </p>
                </div>
              </div>

              {/* Chamadas */}
              <div
                className="flex items-start gap-3 justify-center md:justify-start"
                id="contactos"
              >
                <svg
                  className="w-5 h-5 text-blue-400 shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <p className="font-bold text-white text-sm uppercase">
                    Chamadas
                  </p>
                  <div className="mt-1 flex flex-col space-y-1">
                    {dados.contactos.chamadas.map((num, i) => (
                      <a
                        key={i}
                        href={`tel:+258${num.replace(/\s/g, "")}`}
                        className="text-sm text-slate-400 font-mono hover:text-blue-400 transition-colors duration-300"
                      >
                        {num}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3 justify-center md:justify-start">
                <FaWhatsapp className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white text-sm uppercase">
                    WhatsApp
                  </p>
                  <div className="mt-1 flex flex-col space-y-1">
                    {dados.contactos.whatsapp.map((num, i) => (
                      <a
                        key={i}
                        href={`https://wa.me/258${num.replace(/\s/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-slate-400 font-mono hover:text-emerald-400 transition-colors duration-300"
                      >
                        {num}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna 4: Mapa */}
          <div className="flex flex-col space-y-4 md:col-span-2 lg:col-span-1">
            <h3 className="text-white font-black text-lg uppercase tracking-wider border-b-2 border-blue-500 pb-2 inline-block text-center md:text-left">
              Encontre-nos
            </h3>
            <div className="w-full h-56 md:h-full min-h-[200px] bg-slate-800 rounded-2xl overflow-hidden shadow-inner relative border-2 border-slate-700/50 group">
              {/* Iframe do Mapa */}
              <iframe
                title="Mapa da Localização Grejudec"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.3769923954574!2d34.8824064!3d-19.823995399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1f2a41926b289b3f%3A0x43f98bc1102e9ff4!2sGrejudec!5e0!3m2!1spt-PT!2smz!4v1783937599328!5m2!1spt-PT!2smz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 transition-all duration-500"
              ></iframe>

              {/* Botão para abrir no App/Maps */}
              <a
                href="https://maps.app.goo.gl/gqVbMyHgrbbzVFz18"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 left-4 bg-yellow-300 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-slate-800 shadow-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                Ver no Maps
              </a>
            </div>
          </div>
        </div>

        {/* Barra Inferior (Créditos e Direitos) */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-mono text-slate-500 text-center md:text-left">
          <p>
            © {new Date().getFullYear()} {dados.identificacao.sigla}. Todos os
            direitos reservados.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-slate-800/50 px-4 py-2 rounded-xl">
            <span>Realização & Design por:</span>
            <span className="text-cyan-400 font-bold flex items-center gap-2 tracking-widest uppercase">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              SoNexus Soluções
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
