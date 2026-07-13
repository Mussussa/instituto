import React from "react";


function Sobre() {
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
    requisitos: [
      "Cópia de BI",
      "Duas fotos tipo passe",
      "Cópia do certificado da 7ª ou 10ª classe",
      "Ficha de inscrição (175 MT)",
    ],
    cursosTecnicos: {
      duracao: "3 a 6 meses",
      inscricao: "450 MT",
      mensalidade: "1.500 MT",
      lista: [
        "Inglês", "Secretariado Executivo", "Gestão de Recursos Humanos", "Gestão de Empresas",
        "Gestão Aduaneira", "Gestão Portuária", "Gestão de Projectos", "Gestão de Marketing e Venda",
        "Culinária", "Confeitaria", "Corte e Costura", "HST (Higiene e Segurança no Trabalho)",
        "Electricidade Instaladora", "Educação Infantil", "Empreendedorismo", "Jornalismo",
        "Agro-Processamento", "Serralharia", "Canalização", "Informática"
      ]
    },
    maquinas: {
      inscricao: "1.200 MT",
      tarifario: [
        { nome: "Pá Mecânica", valor: "15.000 MT" },
        { nome: "Retroescavadeira", valor: "16.000 MT" },
        { nome: "Empilhadeira", valor: "12.000 MT" },
        { nome: "Grua Móvel", valor: "24.000 MT" }
      ]
    }
  };

  return (
    <div className="flex-nowrap bg-slate-50 pt-8">

        

        {/* Requisitos */}
        <section className="bg-slate-900 text-white p-2 rounded-2xl">
          <h2 className="font-bold mb-4">📋 Requisitos de Inscrição</h2>
          <ul className="grid md:grid-cols-2 gap-2">
            {dados.requisitos.map((req, i) => (
              <li key={i} className="text-sm opacity-80">✓ {req}</li>
            ))}
          </ul>
        </section>
    
    </div>
  );
}

export default Sobre;