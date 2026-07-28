// ============================================================
// PAINEL DE PRESENÇA - STELLANTIS
// ============================================================

const DADOS_INICIAIS = {
  data: "27/07/2026",
  grupos: [
    {
      titulo: "COORDENAÇÃO E SUPERVISÃO",
      previsto: 0,
      entregue: 0,
      membros: [
        { nome: "GILSON RAMOS", funcao: "COORDENADOR - G24", atividade: "COORDENADOR", status: "PRESENTE" },
        { nome: "SÉRGIO DA SILVA", funcao: "SUPERVISOR", atividade: "SUPERVISÃO", status: "PRESENTE" },
        { nome: "KENDERSON FRANCY", funcao: "SUPERVISOR", atividade: "SUPERVISÃO", status: "FALTA" },
        { nome: "FABIANO ALVES", funcao: "LÍDER", atividade: "LÍDER", status: "AUSENTE MD" }
      ]
    },
    {
      titulo: "PROJETO REPARAÇÃO 26.0002",
      previsto: 12,
      entregue: 10,
      membros: [
        { nome: "CAMILA CARMEM", funcao: "ELETRICISTA / SIXTAU", atividade: "REPARAÇÃO", status: "PRESENTE" },
        { nome: "GUSTAVO GUIMARÃES", funcao: "ELETRICISTA / SIXTAU", atividade: "REPARAÇÃO", status: "FALTA" },
        { nome: "GUSTAVO KELVIN", funcao: "PINTOR / FL", atividade: "REPARAÇÃO", status: "PRESENTE" },
        { nome: "JORGE LUIZ LIMA", funcao: "PINTOR / FL", atividade: "REPARAÇÃO", status: "PRESENTE" },
        { nome: "HEIDER DAVIDSON", funcao: "MARTELINHO / RS", atividade: "REPARAÇÃO", status: "PRESENTE" },
        { nome: "CRISTIANO ANTONIO", funcao: "MARTELINHO / RS", atividade: "REPARAÇÃO", status: "PRESENTE" },
        { nome: "FÁBIO GUILHERME GRIS", funcao: "MARTELINHO / RS", atividade: "REPARAÇÃO", status: "PRESENTE" },
        { nome: "FILLIPE PEREIRA DE JESUS", funcao: "MECÂNICO", atividade: "REPARAÇÃO", status: "PRESENTE" },
        { nome: "DANILO CESAR", funcao: "MONTADOR", atividade: "REPARAÇÃO", status: "PRESENTE" },
        { nome: "OSEAS DA SILVA PIRES", funcao: "MONTADOR", atividade: "REPARAÇÃO", status: "PRESENTE" }
      ]
    },
    {
      titulo: "CONTROLE - FNR",
      previsto: 0,
      entregue: 0,
      membros: [
        { nome: "HEITOR OSAVA FERREIRA", funcao: "ASSISTENTE INSPEÇÃO", atividade: "INSPEÇÃO", status: "PRESENTE" },
        { nome: "MATHEUS FELIPE", funcao: "ASSISTENTE INSPEÇÃO", atividade: "INSPEÇÃO", status: "FALTA" },
        { nome: "RAIANY JULIANA", funcao: "ASSISTENTE INSPEÇÃO", atividade: "INSPEÇÃO", status: "PRESENTE" },
        { nome: "ANA CRISTINA", funcao: "ASSISTENTE INSPEÇÃO", atividade: "INSPEÇÃO", status: "PRESENTE" },
        { nome: "MAIHANE MENDES", funcao: "ASSISTENTE INSPEÇÃO", atividade: "INSPEÇÃO", status: "PRESENTE" }
      ]
    },
    {
      titulo: "PROJETO IVT 26.0002",
      previsto: 10,
      entregue: 7,
      membros: [
        { nome: "BRUNO DE OLIVEIRA", funcao: "MONTADOR", atividade: "IVT", status: "FALTA" },
        { nome: "FELIPE CHARLES DIAS", funcao: "MONTADOR", atividade: "IVT", status: "PRESENTE" },
        { nome: "MICHELLE CERQUEIRA FIRMINO", funcao: "MONTADOR", atividade: "IVT", status: "PRESENTE" },
        { nome: "ELAINE APARECIDA FERREIRA", funcao: "MONTADOR", atividade: "IVT", status: "PRESENTE" },
        { nome: "DIEGO MARTINS", funcao: "MONTADOR", atividade: "IVT", status: "PRESENTE" },
        { nome: "LUANA ALVES SANTOS", funcao: "MONTADOR", atividade: "IVT", status: "PRESENTE" },
        { nome: "LUIS HENRIQUE", funcao: "MONTADOR", atividade: "IVT", status: "FALTA" },
        { nome: "PATRICK WELLINGTON ALVES", funcao: "MONTADOR", atividade: "IVT", status: "PRESENTE" }
      ]
    },
    {
      titulo: "MISSÃO 26.0001 SHIPP - MOTORISTA / ENTRADA E SAÍDA",
      previsto: 15,
      entregue: 14,
      membros: [
        { nome: "DANIELA ALVES LEITE", funcao: "ASSIST/ PALETAGEM", atividade: "INSPEÇÃO", status: "PRESENTE" },
        { nome: "LUCAS HENRIQUE", funcao: "ASSIST/ PALETAGEM", atividade: "INSPEÇÃO", status: "PRESENTE" },
        { nome: "ANDRÉ RYAN", funcao: "ASSIST/ PALETAGEM", atividade: "INSPEÇÃO", status: "PRESENTE" },
        { nome: "STENIO GUILHERME", funcao: "ASSIST/ PALETAGEM", atividade: "INSPEÇÃO", status: "PRESENTE" },
        { nome: "CARLOS HENRIQUE PEREIRA", funcao: "ASSIST/ PALETAGEM", atividade: "INSPEÇÃO", status: "PRESENTE" },
        { nome: "DIÓGENES DE JESUS", funcao: "ASSIST/ PALETAGEM", atividade: "INSPEÇÃO", status: "PRESENTE" },
        { nome: "FLÁVIO PEREIRA", funcao: "ASSIST/ PELICULA", atividade: "INSPEÇÃO", status: "PRESENTE" },
        { nome: "LUCAS INÁCIO", funcao: "ASSIST/PELICULA", atividade: "INSPEÇÃO", status: "PRESENTE" },
        { nome: "THAÍS JÚLIA RASTE", funcao: "MOTORISTA / ENTRADA", atividade: "INSPEÇÃO", status: "PRESENTE" },
        { nome: "ESTER DE JESUS", funcao: "MOTORISTA / ENTRADA", atividade: "INSPEÇÃO", status: "PRESENTE" },
        { nome: "ZÉLIA REGINA", funcao: "MOTORISTA / ENTRADA", atividade: "INSPEÇÃO", status: "PRESENTE" },
        { nome: "MAURÍCIO GONÇALVES", funcao: "MOTORISTA / SAÍDA", atividade: "INSPEÇÃO", status: "PRESENTE" },
        { nome: "MÁRIO AUGUSTO PACHECO", funcao: "MOTORISTA / SAÍDA", atividade: "INSPEÇÃO", status: "FALTA" },
        { nome: "JOÃO PAULO DE OLIVEIRA", funcao: "MOTORISTA / SAÍDA", atividade: "INSPEÇÃO", status: "PRESENTE" },
        { nome: "WILSON ROSA DOS SANTOS", funcao: "MOTORISTA / SAÍDA", atividade: "INSPEÇÃO", status: "PRESENTE" }
      ]
    },
    {
      titulo: "MISSÃO 26.0591 APLICAÇÃO DE CAMUFLAGEM",
      previsto: 4,
      entregue: 1,
      membros: [
        { nome: "LUIZ GUSTAVO", funcao: "ASSISTENTE INSPEÇÃO", atividade: "INSPEÇÃO", status: "FALTA" },
        { nome: "CARLOS LEONIDIO MOREIRA", funcao: "ASSISTENTE INSPEÇÃO", atividade: "INSPEÇÃO", status: "PRESENTE" }
      ]
    }
  ]
};

let dados = JSON.parse(JSON.stringify(DADOS_INICIAIS));
const STORAGE_KEY = "painel-presenca-stellantis";
const DAILY_STORAGE_KEY = "painel-presenca-stellantis-dias";
let diaAtual = "";
let grupoAtivo = 0;

function clonarDadosIniciais() {
  return JSON.parse(JSON.stringify(DADOS_INICIAIS));
}

function hojeISO() {
  return new Date().toISOString().slice(0, 10);
}

function isoParaBR(iso) {
  if (!iso) return "";
  const [ano, mes, dia] = iso.split("-");
  return `${dia}/${mes}/${ano}`;
}

function carregarHistorico() {
  try {
    return JSON.parse(localStorage.getItem(DAILY_STORAGE_KEY)) || {};
  } catch (erro) {
    return {};
  }
}

function salvarHistorico(historico) {
  localStorage.setItem(DAILY_STORAGE_KEY, JSON.stringify(historico));
}

function prepararDadosParaDia(base, iso) {
  const copia = JSON.parse(JSON.stringify(base || DADOS_INICIAIS));
  copia.data = isoParaBR(iso);
  copia.grupos.forEach(grupo => {
    grupo.membros.forEach(membro => {
      membro.status = "PRESENTE";
    });
  });
  return copia;
}

function salvarDados() {
  if (!diaAtual) diaAtual = hojeISO();
  dados.data = isoParaBR(diaAtual);
  const historico = carregarHistorico();
  historico[diaAtual] = dados;
  salvarHistorico(historico);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
}

function carregarDados(iso = hojeISO()) {
  diaAtual = iso;
  const historico = carregarHistorico();
  if (historico[diaAtual]) {
    dados = historico[diaAtual];
  } else {
    const legado = localStorage.getItem(STORAGE_KEY);
    if (legado) {
      try {
        dados = JSON.parse(legado);
      } catch (erro) {
        dados = clonarDadosIniciais();
      }
    } else {
      dados = clonarDadosIniciais();
    }
    dados.data = isoParaBR(diaAtual);
    salvarDados();
  }
}

function resetarDados() {
  if (!confirm("Restaurar o dia selecionado para a base original?")) return;
  dados = prepararDadosParaDia(DADOS_INICIAIS, diaAtual || hojeISO());
  grupoAtivo = 0;
  salvarDados();
  renderizarTudo();
}

function trocarDia(iso) {
  if (!iso) return;
  salvarDados();
  carregarDados(iso);
  grupoAtivo = 0;
  renderizarTudo();
}

function iniciarNovoDia() {
  salvarDados();
  const sugerida = hojeISO();
  const informada = prompt("Data do dia que inicia (AAAA-MM-DD):", sugerida);
  if (informada === null) return;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(informada.trim())) {
    alert("Informe a data no formato AAAA-MM-DD.");
    return;
  }
  const historico = carregarHistorico();
  if (!historico[informada]) {
    historico[informada] = prepararDadosParaDia(dados, informada);
    salvarHistorico(historico);
  }
  carregarDados(informada);
  grupoAtivo = 0;
  renderizarTudo();
}

function atualizarData() {
  const input = document.getElementById("data-painel");
  if (input) input.value = diaAtual || hojeISO();
  dados.data = isoParaBR(diaAtual || hojeISO());
}

function todosMembros() {
  return dados.grupos.flatMap(grupo => grupo.membros);
}

function contarStatus() {
  const membros = todosMembros();
  return {
    presentes: membros.filter(m => m.status === "PRESENTE").length,
    faltas: membros.filter(m => m.status === "FALTA").length,
    ausentesMd: membros.filter(m => m.status === "AUSENTE MD").length,
    total: membros.length
  };
}

function classeStatus(status) {
  return status.toLowerCase().replace(/\s+/g, "-");
}

function proximoStatus(status) {
  const ordem = ["PRESENTE", "FALTA", "AUSENTE MD"];
  const indiceAtual = ordem.indexOf(status);
  return ordem[(indiceAtual + 1) % ordem.length];
}

function nomeCurto(nome) {
  const partes = nome.split(" ");
  return partes.length > 1 ? `${partes[0]} ${partes[1]}` : partes[0];
}

function renderVisaoGeral() {
  const status = contarStatus();
  const percentual = status.total ? Math.round((status.presentes / status.total) * 100) : 0;
  document.getElementById("visao-geral").innerHTML = `
    <article class="metric-card"><span class="metric-icon blue">♙</span><div><p>Equipe total</p><strong>${status.total}</strong></div></article>
    <article class="metric-card"><span class="metric-icon green">✓</span><div><p>Presentes hoje</p><strong>${status.presentes}</strong></div></article>
    <article class="metric-card"><span class="metric-icon red">✕</span><div><p>Faltas</p><strong>${status.faltas}</strong></div></article>
    <article class="metric-card"><span class="metric-icon blue">↗</span><div><p>Taxa de presença</p><strong>${percentual}%</strong></div></article>
  `;
}

function renderAbas() {
  document.getElementById("abas-projetos").innerHTML = dados.grupos.map((grupo, gi) => `
    <button class="tab ${gi === grupoAtivo ? "active" : ""}" onclick="selecionarGrupo(${gi})">
      <span>STELLANTIS</span> ${grupo.titulo}
    </button>
  `).join("");
}

function renderGrupos() {
  renderAbas();
  const container = document.getElementById("grupos");
  const grupo = dados.grupos[grupoAtivo] || dados.grupos[0];
  if (!grupo) {
    container.innerHTML = '<div class="empty-state">Nenhum projeto cadastrado.</div>';
    return;
  }
  const gi = grupoAtivo;
  const faltas = grupo.membros.filter(m => m.status === "FALTA").length;

  container.innerHTML = `
    <div class="project-toolbar">
      <div class="project-title"><span>STELLANTIS</span><strong ondblclick="editarTituloGrupo(${gi})">${grupo.titulo}</strong><p>Previsto: <b ondblclick="editarNumeroGrupo(${gi}, 'previsto')">${grupo.previsto}</b> &nbsp; Entregue: <b ondblclick="editarNumeroGrupo(${gi}, 'entregue')">${grupo.entregue}</b> &nbsp; Faltas: <b class="danger">${faltas}</b></p></div>
      <div class="project-actions"><button class="button ghost" onclick="editarTituloGrupo(${gi})">✎ Editar</button><button class="button outline" onclick="adicionarMembro(${gi})">＋ Adicionar funcionário</button><button class="icon-button" onclick="removerGrupo(${gi})">🗑</button></div>
    </div>
    <div class="table-wrap">
      <table class="people-table">
        <thead><tr><th>#</th><th>Nome</th><th>Função</th><th>Turno 1</th><th>Turno 2</th><th>Atividade</th><th>Status</th><th></th></tr></thead>
        <tbody>${grupo.membros.map((membro, mi) => `
          <tr>
            <td>${mi + 1}</td>
            <td class="name" ondblclick="editarCampo(${gi}, ${mi}, 'nome')">${membro.nome}</td>
            <td ondblclick="editarCampo(${gi}, ${mi}, 'funcao')">${membro.funcao}</td>
            <td>16:00 &nbsp;&nbsp; 20:00</td>
            <td>21:00 &nbsp;&nbsp; 02:00</td>
            <td ondblclick="editarCampo(${gi}, ${mi}, 'atividade')">${membro.atividade}</td>
            <td><button class="status-pill ${classeStatus(membro.status)}" onclick="alternarStatus(${gi}, ${mi})">${membro.status}⌄</button></td>
            <td class="row-actions"><button onclick="editarCampo(${gi}, ${mi}, 'nome')">✎</button><button onclick="removerMembro(${gi}, ${mi})">🗑</button></td>
          </tr>`).join("")}</tbody>
      </table>
    </div>
  `;
}

function selecionarGrupo(gi) {
  grupoAtivo = gi;
  renderGrupos();
}

function editarCampo(gi, mi, campo) {
  const valorAtual = dados.grupos[gi].membros[mi][campo];
  const rotulo = campo.charAt(0).toUpperCase() + campo.slice(1);
  const novoValor = prompt(`Editar ${rotulo}:`, valorAtual);
  if (novoValor === null || novoValor.trim() === "") return;
  dados.grupos[gi].membros[mi][campo] = novoValor.trim().toUpperCase();
  salvarDados();
  renderizarTudo();
}

function editarTituloGrupo(gi) {
  const atual = dados.grupos[gi].titulo;
  const novo = prompt("Editar nome do projeto:", atual);
  if (novo === null || novo.trim() === "") return;
  dados.grupos[gi].titulo = novo.trim().toUpperCase();
  salvarDados();
  renderizarTudo();
}

function editarNumeroGrupo(gi, campo) {
  const atual = dados.grupos[gi][campo];
  const novo = prompt(`Editar ${campo}:`, atual);
  if (novo === null || novo.trim() === "") return;
  const numero = Number(novo);
  if (Number.isNaN(numero) || numero < 0) {
    alert("Digite um número válido.");
    return;
  }
  dados.grupos[gi][campo] = numero;
  salvarDados();
  renderizarTudo();
}

function alternarStatus(gi, mi) {
  dados.grupos[gi].membros[mi].status = proximoStatus(dados.grupos[gi].membros[mi].status);
  salvarDados();
  renderizarTudo();
}

function adicionarGrupo() {
  const titulo = prompt("Nome do novo projeto:");
  if (titulo === null || titulo.trim() === "") return;

  const previsto = Number(prompt("Quantidade prevista (pode ser 0):", "0") || "0");
  const entregue = Number(prompt("Quantidade entregue (pode ser 0):", "0") || "0");

  dados.grupos.push({
    titulo: titulo.trim().toUpperCase(),
    previsto: Number.isNaN(previsto) ? 0 : previsto,
    entregue: Number.isNaN(entregue) ? 0 : entregue,
    membros: []
  });

  grupoAtivo = dados.grupos.length - 1;
  salvarDados();
  renderizarTudo();
}

function removerGrupo(gi) {
  const nome = dados.grupos[gi].titulo;
  if (!confirm(`Remover o projeto "${nome}"?`)) return;
  dados.grupos.splice(gi, 1);
  grupoAtivo = Math.max(0, Math.min(grupoAtivo, dados.grupos.length - 1));
  salvarDados();
  renderizarTudo();
}

function adicionarMembro(gi) {
  const nome = prompt("Nome do funcionário:");
  if (nome === null || nome.trim() === "") return;

  const funcao = prompt("Função:", "ASSISTENTE") || "ASSISTENTE";
  const atividade = prompt("Atividade:", "INSPEÇÃO") || "INSPEÇÃO";

  dados.grupos[gi].membros.push({
    nome: nome.trim().toUpperCase(),
    funcao: funcao.trim().toUpperCase(),
    atividade: atividade.trim().toUpperCase(),
    status: "PRESENTE"
  });

  salvarDados();
  renderizarTudo();
}

function removerMembro(gi, mi) {
  const nome = dados.grupos[gi].membros[mi].nome;
  if (!confirm(`Remover ${nome}?`)) return;
  dados.grupos[gi].membros.splice(mi, 1);
  salvarDados();
  renderizarTudo();
}

function renderizarGraficos() {}

function baixarDia() {
  const wb = XLSX.utils.book_new();

  const resumo = [
    ["PAINEL DE PRESENÇA - STELLANTIS"],
    ["Data:", dados.data],
    [""],
    ["RESUMO GERAL"],
    ["Presentes:", contarStatus().presentes],
    ["Faltas:", contarStatus().faltas],
    ["Ausente MD:", contarStatus().ausentesMd],
    ["Total:", contarStatus().total],
    [""]
  ];

  dados.grupos.forEach(grupo => {
    resumo.push([grupo.titulo]);
    resumo.push(["Previsto:", grupo.previsto, "Entregue:", grupo.entregue]);
    resumo.push(["Nome", "Função", "Atividade", "Status"]);
    grupo.membros.forEach(membro => {
      resumo.push([membro.nome, membro.funcao, membro.atividade, membro.status]);
    });
    resumo.push([""]);
  });

  const wsResumo = XLSX.utils.aoa_to_sheet(resumo);
  XLSX.utils.book_append_sheet(wb, wsResumo, "Resumo do Dia");

  const planilha = [["Projeto", "Nome", "Função", "Atividade", "Status", "Previsto", "Entregue"]];
  dados.grupos.forEach(grupo => {
    grupo.membros.forEach(membro => {
      planilha.push([grupo.titulo, membro.nome, membro.funcao, membro.atividade, membro.status, grupo.previsto, grupo.entregue]);
    });
  });
  const wsCompleta = XLSX.utils.aoa_to_sheet(planilha);
  XLSX.utils.book_append_sheet(wb, wsCompleta, "Equipe Completa");

  XLSX.writeFile(wb, `Painel_Presenca_Stellantis_${dados.data.replace(/\//g, "-")}.xlsx`);
}

function baixarMes() {
  salvarDados();
  const wb = XLSX.utils.book_new();
  const historico = carregarHistorico();
  const mesAtual = (diaAtual || hojeISO()).slice(0, 7);

  const faltas = [["Data", "Funcionário", "Função", "Atividade", "Status", "Projeto"]];
  const desempenho = [["Data", "Projeto", "Previsto", "Entregue", "Funcionários", "Presentes", "Faltas", "Ausente MD", "Presença (%)"]];

  Object.keys(historico).sort().filter(data => data.startsWith(mesAtual)).forEach(data => {
    historico[data].grupos.forEach(grupo => {
      const presentes = grupo.membros.filter(m => m.status === "PRESENTE").length;
      const faltasGrupo = grupo.membros.filter(m => m.status === "FALTA").length;
      const ausentesMd = grupo.membros.filter(m => m.status === "AUSENTE MD").length;
      const taxa = grupo.membros.length ? Math.round((presentes / grupo.membros.length) * 100) : 0;
      desempenho.push([isoParaBR(data), grupo.titulo, grupo.previsto, grupo.entregue, grupo.membros.length, presentes, faltasGrupo, ausentesMd, taxa]);
      grupo.membros.forEach(membro => {
        if (membro.status === "FALTA" || membro.status === "AUSENTE MD") {
          faltas.push([isoParaBR(data), membro.nome, membro.funcao, membro.atividade, membro.status, grupo.titulo]);
        }
      });
    });
  });

  XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(faltas), "Faltas e Ausências");
  XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(desempenho), "Desempenho Mensal");
  XLSX.writeFile(wb, `Relatorio_Mensal_G24_${mesAtual}.xlsx`);
}

function renderHistoricoInfo() {
  const total = Object.keys(carregarHistorico()).length;
  const el = document.getElementById("historico-info");
  if (el) el.textContent = `Dia selecionado: ${dados.data}. Histórico local com ${total} dia(s) salvo(s).`;
}

function renderizarTudo() {
  atualizarData();
  renderVisaoGeral();
  renderGrupos();
  renderHistoricoInfo();
}

function init() {
  carregarDados(hojeISO());
  renderizarTudo();
}

document.addEventListener("DOMContentLoaded", init);
