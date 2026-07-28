// ============================================================
// PAINEL DE PRESENÇA — STELLANTIS
// Cada data tem seu próprio registro de presença salvo no navegador.
// ============================================================

const EQUIPE_INICIAL = {
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
};;

const STORAGE_KEY = "painel-presenca-stellantis-v2";
let painel = { grupos: [], registros: {} };
let dataAtual = "";
const expandido = new Set();
const graficos = { presenca: null, faltas: null, projetos: null, meses: null };

function hojeISO() {
  const agora = new Date();
  const fuso = agora.getTimezoneOffset() * 60000;
  return new Date(agora.getTime() - fuso).toISOString().slice(0, 10);
}

function clone(valor) { return JSON.parse(JSON.stringify(valor)); }
function chavePessoa(gi, mi) { return `${gi}-${mi}`; }

function criarPainelInicial() {
  const data = hojeISO();
  const grupos = clone(EQUIPE_INICIAL.grupos);
  const statusIniciais = {};
  grupos.forEach((grupo, gi) => grupo.membros.forEach((membro, mi) => {
    statusIniciais[chavePessoa(gi, mi)] = membro.status || "PRESENTE";
    membro.status = "PRESENTE";
  }));
  return { grupos, registros: { [data]: { status: statusIniciais } } };
}

function migrarVersaoAntiga(antigo) {
  if (!antigo || !antigo.grupos) return null;
  const data = hojeISO();
  const grupos = clone(antigo.grupos);
  const status = {};
  grupos.forEach((grupo, gi) => grupo.membros.forEach((membro, mi) => {
    status[chavePessoa(gi, mi)] = membro.status || "PRESENTE";
    membro.status = "PRESENTE";
  }));
  return { grupos, registros: { [data]: { status } } };
}

function carregarPainel() {
  try {
    const salvo = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (salvo && Array.isArray(salvo.grupos) && salvo.registros) { painel = salvo; return; }
    const antigo = JSON.parse(localStorage.getItem("painel-presenca-stellantis"));
    painel = migrarVersaoAntiga(antigo) || criarPainelInicial();
    salvarPainel();
  } catch (erro) {
    painel = criarPainelInicial();
    salvarPainel();
  }
}

function salvarPainel() { localStorage.setItem(STORAGE_KEY, JSON.stringify(painel)); }

function garantirRegistro(data) {
  if (!painel.registros[data]) painel.registros[data] = { status: {} };
  const registro = painel.registros[data];
  painel.grupos.forEach((grupo, gi) => grupo.membros.forEach((_, mi) => {
    const chave = chavePessoa(gi, mi);
    if (!registro.status[chave]) registro.status[chave] = "PRESENTE";
  }));
  return registro;
}

function statusNaData(gi, mi, data = dataAtual) {
  return garantirRegistro(data).status[chavePessoa(gi, mi)] || "PRESENTE";
}

function setStatusNaData(gi, mi, status, data = dataAtual) {
  garantirRegistro(data).status[chavePessoa(gi, mi)] = status;
}

function formatarData(data) {
  return new Date(`${data}T12:00:00`).toLocaleDateString("pt-BR", { weekday: "long", day: "2-digit", month: "long", year: "numeric" });
}

function classeStatus(status) { return status.toLowerCase().replace(/\s+/g, "-"); }
function proximoStatus(status) {
  const ordem = ["PRESENTE", "FALTA", "AUSENTE MD"];
  return ordem[(ordem.indexOf(status) + 1) % ordem.length];
}

function membrosDoDia(data = dataAtual) {
  return painel.grupos.flatMap((grupo, gi) => grupo.membros.map((membro, mi) => ({ ...membro, grupo: grupo.titulo, gi, mi, status: statusNaData(gi, mi, data) })));
}

function contagemDoDia(data = dataAtual) {
  const membros = membrosDoDia(data);
  return {
    total: membros.length,
    presentes: membros.filter(m => m.status === "PRESENTE").length,
    faltas: membros.filter(m => m.status === "FALTA").length,
    ausentesMd: membros.filter(m => m.status === "AUSENTE MD").length
  };
}

function datasDoMes() { return Object.keys(painel.registros).filter(data => data.startsWith(dataAtual.slice(0, 7))).sort(); }

function dadosMensais() {
  const acumulado = {};
  datasDoMes().forEach(data => {
    membrosDoDia(data).forEach(membro => {
      const chave = chavePessoa(membro.gi, membro.mi);
      if (!acumulado[chave]) acumulado[chave] = { nome: membro.nome, funcao: membro.funcao, grupo: membro.grupo, presentes: 0, faltas: 0, ausentesMd: 0 };
      if (membro.status === "PRESENTE") acumulado[chave].presentes += 1;
      if (membro.status === "FALTA") acumulado[chave].faltas += 1;
      if (membro.status === "AUSENTE MD") acumulado[chave].ausentesMd += 1;
    });
  });
  return Object.values(acumulado);
}

function nomeCurto(nome) { const p = nome.split(" "); return p.length > 1 ? `${p[0]} ${p[1]}` : p[0]; }

function renderVisaoGeral() {
  const s = contagemDoDia();
  const percentual = s.total ? Math.round((s.presentes / s.total) * 100) : 0;
  document.getElementById("visao-geral").innerHTML = `
    <div class="stat-card verde"><span class="stat-numero">${s.presentes}</span><span class="stat-label">Presentes</span><span class="stat-extra">Equipe disponível em ${formatarData(dataAtual)}</span></div>
    <div class="stat-card vermelho"><span class="stat-numero">${s.faltas}</span><span class="stat-label">Faltas</span><span class="stat-extra">Ausências registradas no dia</span></div>
    <div class="stat-card laranja"><span class="stat-numero">${s.ausentesMd}</span><span class="stat-label">Ausente MD</span><span class="stat-extra">Afastamento / ausência médica</span></div>
    <div class="stat-card azul"><span class="stat-numero">${percentual}%</span><span class="stat-label">Presença Geral</span><span class="stat-extra">${s.total} funcionários cadastrados</span></div>`;
}

function renderGrupos() {
  const container = document.getElementById("grupos");
  container.innerHTML = painel.grupos.map((grupo, gi) => {
    const presentes = grupo.membros.filter((_, mi) => statusNaData(gi, mi) === "PRESENTE").length;
    const taxa = grupo.membros.length ? Math.round((presentes / grupo.membros.length) * 100) : 0;
    const temMeta = grupo.previsto > 0;
    const taxaMeta = temMeta ? Math.round((grupo.entregue / grupo.previsto) * 100) : 0;
    const corMeta = taxaMeta >= 80 ? "verde" : taxaMeta >= 50 ? "laranja" : "vermelho";
    return `<div class="grupo-card">
      <div class="grupo-header"><div class="grupo-titulo-area"><h3 ondblclick="editarTituloGrupo(${gi})">${grupo.titulo}</h3><span class="grupo-sub">${grupo.membros.length} pessoas · ${presentes} presentes (${taxa}%)${temMeta ? ` · Previsto <strong class="cel-editavel" ondblclick="editarNumeroGrupo(${gi}, 'previsto')">${grupo.previsto}</strong> / Entregue <strong class="cel-editavel" ondblclick="editarNumeroGrupo(${gi}, 'entregue')">${grupo.entregue}</strong>` : ""}</span></div>
      <div class="grupo-acoes">${temMeta ? `<span class="badge-meta ${corMeta}">${taxaMeta}% da meta</span>` : ""}<button class="btn-icon" onclick="toggleGrupo(${gi})" title="Abrir ou recolher">${expandido.has(gi) ? "▲" : "▼"}</button><button class="btn-icon" onclick="adicionarMembro(${gi})" title="Adicionar funcionário">+</button><button class="btn-icon" onclick="removerGrupo(${gi})" title="Remover projeto">×</button></div></div>
      <div class="grupo-membros ${expandido.has(gi) ? "" : "recolhido"}"><table class="tabela-membros"><thead><tr><th>Nome</th><th>Função</th><th>Atividade</th><th>Status em ${dataAtual.split("-").reverse().join("/")}</th><th>Ação</th></tr></thead><tbody>
      ${grupo.membros.map((membro, mi) => { const status = statusNaData(gi, mi); return `<tr data-status="${classeStatus(status)}"><td class="cel-nome" ondblclick="editarCampo(${gi}, ${mi}, 'nome')">${membro.nome}</td><td class="cel-funcao" ondblclick="editarCampo(${gi}, ${mi}, 'funcao')">${membro.funcao}</td><td class="cel-atividade" ondblclick="editarCampo(${gi}, ${mi}, 'atividade')">${membro.atividade}</td><td><button class="btn-status ${classeStatus(status)}" onclick="alternarStatus(${gi}, ${mi})">${status}</button></td><td><button class="btn-icon" onclick="removerMembro(${gi}, ${mi})" title="Remover funcionário">×</button></td></tr>`; }).join("")}
      </tbody></table></div></div>`;
  }).join("");
}

function toggleGrupo(gi) { if (expandido.has(gi)) expandido.delete(gi); else expandido.add(gi); renderGrupos(); }
function alternarStatus(gi, mi) { setStatusNaData(gi, mi, proximoStatus(statusNaData(gi, mi))); salvarPainel(); renderizarTudo(); }

function editarCampo(gi, mi, campo) {
  const atual = painel.grupos[gi].membros[mi][campo];
  const novo = prompt(`Editar ${campo}:`, atual);
  if (novo === null || !novo.trim()) return;
  painel.grupos[gi].membros[mi][campo] = novo.trim().toUpperCase(); salvarPainel(); renderizarTudo();
}
function editarTituloGrupo(gi) { const novo = prompt("Editar nome do projeto:", painel.grupos[gi].titulo); if (novo && novo.trim()) { painel.grupos[gi].titulo = novo.trim().toUpperCase(); salvarPainel(); renderizarTudo(); } }
function editarNumeroGrupo(gi, campo) { const novo = Number(prompt(`Editar ${campo}:`, painel.grupos[gi][campo])); if (!Number.isNaN(novo) && novo >= 0) { painel.grupos[gi][campo] = novo; salvarPainel(); renderizarTudo(); } }
function adicionarGrupo() { const titulo = prompt("Nome do novo projeto:"); if (!titulo || !titulo.trim()) return; painel.grupos.push({ titulo: titulo.trim().toUpperCase(), previsto: 0, entregue: 0, membros: [] }); expandido.add(painel.grupos.length - 1); salvarPainel(); renderizarTudo(); }
function removerGrupo(gi) { if (!confirm(`Remover o projeto "${painel.grupos[gi].titulo}"?`)) return; painel.grupos.splice(gi, 1); abrirTodosGrupos(); salvarPainel(); renderizarTudo(); }
function adicionarMembro(gi) { const nome = prompt("Nome do funcionário:"); if (!nome || !nome.trim()) return; const funcao = prompt("Função:", "ASSISTENTE") || "ASSISTENTE"; const atividade = prompt("Atividade:", "INSPEÇÃO") || "INSPEÇÃO"; painel.grupos[gi].membros.push({ nome: nome.trim().toUpperCase(), funcao: funcao.trim().toUpperCase(), atividade: atividade.trim().toUpperCase() }); garantirRegistro(dataAtual); salvarPainel(); renderizarTudo(); }
function removerMembro(gi, mi) { if (!confirm(`Remover ${painel.grupos[gi].membros[mi].nome}?`)) return; painel.grupos[gi].membros.splice(mi, 1); salvarPainel(); renderizarTudo(); }

function mudarData(novaData) { dataAtual = novaData; garantirRegistro(dataAtual); salvarPainel(); renderizarTudo(); }
function irParaHoje() { const hoje = hojeISO(); document.getElementById("data-painel").value = hoje; mudarData(hoje); }
function abrirTodosGrupos() { expandido.clear(); painel.grupos.forEach((_, i) => expandido.add(i)); }

function destruir(nome) { if (graficos[nome]) graficos[nome].destroy(); }
function opcoesBase() { return { responsive: true, maintainAspectRatio: false, plugins: { legend: { labels: { color: "#141413", font: { family: "Georgia", size: 14 } } } } }; }

function renderGraficoPresenca() { const s = contagemDoDia(); destruir("presenca"); graficos.presenca = new Chart(document.getElementById("graficoPresenca"), { type: "doughnut", data: { labels: ["Presentes", "Faltas", "Ausente MD"], datasets: [{ data: [s.presentes, s.faltas, s.ausentesMd], backgroundColor: ["#6f876f", "#c6613f", "#b69a72"], borderColor: "#f0eee6", borderWidth: 4 }] }, options: { ...opcoesBase(), cutout: "62%" } }); }

function renderGraficoFaltas() {
  const mensal = dadosMensais()
    .filter(pessoa => pessoa.faltas + pessoa.ausentesMd > 0)
    .sort((a, b) => (b.faltas + b.ausentesMd) - (a.faltas + a.ausentesMd));

  destruir("faltas");
  graficos.faltas = new Chart(document.getElementById("graficoFaltas"), {
    type: "bar",
    data: {
      labels: mensal.length ? mensal.map(pessoa => nomeCurto(pessoa.nome)) : ["Sem faltas"],
      datasets: [{
        data: mensal.length ? mensal.map(pessoa => pessoa.faltas + pessoa.ausentesMd) : [0],
        backgroundColor: "#c6613f",
        borderRadius: 0
      }]
    },
    options: {
      ...opcoesBase(),
      indexAxis: "y",
      plugins: { legend: { display: false } },
      scales: {
        x: {
          beginAtZero: true,
          ticks: { precision: 0, color: "#3d3d3a" },
          grid: { color: "#cccbc8" }
        },
        y: {
          ticks: { color: "#3d3d3a" },
          grid: { display: false }
        }
      }
    }
  });

  const texto = mensal.length
    ? `No mês selecionado há ${datasDoMes().length} dia(s) salvo(s). Quem tem mais ausência: <strong>${mensal[0].nome}</strong> (${mensal[0].faltas + mensal[0].ausentesMd} ocorrência(s)).`
    : "Ainda não há faltas no mês selecionado.";
  document.getElementById("resumo-faltas").innerHTML = `<p>${texto}</p>`;
}

function renderGraficoProjetos() {
  const labels = painel.grupos.map(grupo => grupo.titulo.length > 22 ? `${grupo.titulo.slice(0, 22)}…` : grupo.titulo);
  const valores = painel.grupos.map((grupo, gi) => {
    const total = grupo.membros.length;
    const presentes = grupo.membros.filter((_, mi) => statusNaData(gi, mi) === "PRESENTE").length;
    return total ? Math.round((presentes / total) * 100) : 0;
  });

  destruir("projetos");
  graficos.projetos = new Chart(document.getElementById("graficoProjetos"), {
    type: "bar",
    data: { labels, datasets: [{ data: valores, backgroundColor: "#806143", borderRadius: 0 }] },
    options: {
      ...opcoesBase(),
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true, max: 100, ticks: { callback: valor => `${valor}%`, color: "#3d3d3a" }, grid: { color: "#cccbc8" } },
        x: { ticks: { color: "#3d3d3a" }, grid: { display: false } }
      }
    }
  });
}

function renderGraficoMeses() {
  const porMes = {};
  Object.keys(painel.registros).forEach(data => {
    const mes = data.slice(0, 7);
    if (!porMes[mes]) porMes[mes] = 0;
    membrosDoDia(data).forEach(membro => {
      if (membro.status !== "PRESENTE") porMes[mes] += 1;
    });
  });

  const labels = Object.keys(porMes).sort();
  const formatados = labels.map(mes => new Date(`${mes}-01T12:00:00`).toLocaleDateString("pt-BR", { month: "short", year: "2-digit" }));
  destruir("meses");
  graficos.meses = new Chart(document.getElementById("graficoMeses"), {
    type: "line",
    data: {
      labels: labels.length ? formatados : ["Sem histórico"],
      datasets: [{
        data: labels.length ? labels.map(mes => porMes[mes]) : [0],
        borderColor: "#806143",
        backgroundColor: "rgba(128, 97, 67, .12)",
        fill: true,
        tension: 0.25,
        pointBackgroundColor: "#806143"
      }]
    },
    options: {
      ...opcoesBase(),
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true, ticks: { precision: 0, color: "#3d3d3a" }, grid: { color: "#cccbc8" } },
        x: { ticks: { color: "#3d3d3a" }, grid: { display: false } }
      }
    }
  });
}
function renderizarGraficos() { renderGraficoPresenca(); renderGraficoFaltas(); renderGraficoProjetos(); renderGraficoMeses(); }

function baixarDia() {
  const wb = XLSX.utils.book_new(); const s = contagemDoDia();
  const linhas = [["PAINEL DE PRESENÇA - STELLANTIS"],["Data", formatarData(dataAtual)],[""],["Presentes",s.presentes],["Faltas",s.faltas],["Ausente MD",s.ausentesMd],[""],["Projeto","Nome","Função","Atividade","Status"]];
  membrosDoDia().forEach(m => linhas.push([m.grupo,m.nome,m.funcao,m.atividade,m.status]));
  XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(linhas), "Presença do Dia");
  XLSX.writeFile(wb, `Presenca_Stellantis_${dataAtual}.xlsx`);
}

function baixarMes() {
  const wb = XLSX.utils.book_new(); const mensal = dadosMensais();
  const resumo = [["RELATÓRIO MENSAL - PAINEL DE PRESENÇA"],["Mês",new Date(`${dataAtual.slice(0,7)}-01T12:00:00`).toLocaleDateString("pt-BR",{month:"long",year:"numeric"})],["Dias salvos",datasDoMes().length],[""],["Funcionário","Função","Projeto","Presenças","Faltas","Ausente MD","Registros"]];
  mensal.forEach(p => resumo.push([p.nome,p.funcao,p.grupo,p.presentes,p.faltas,p.ausentesMd,p.presentes+p.faltas+p.ausentesMd]));
  XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(resumo), "Resumo Mensal");
  const diario = [["Data","Projeto","Funcionário","Função","Status"]]; Object.keys(painel.registros).sort().forEach(data => membrosDoDia(data).forEach(m => diario.push([data,m.grupo,m.nome,m.funcao,m.status])));
  XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(diario), "Histórico Diário");
  XLSX.writeFile(wb, `Relatorio_Mensal_Stellantis_${dataAtual.slice(0,7)}.xlsx`);
}

function renderizarTudo() {
  document.getElementById("data-painel").value = dataAtual;
  document.getElementById("data-hoje").textContent = formatarData(dataAtual);
  document.getElementById("dias-salvos").textContent = Object.keys(painel.registros).length;
  renderVisaoGeral(); renderGrupos(); renderizarGraficos();
}

function init() { carregarPainel(); dataAtual = hojeISO(); garantirRegistro(dataAtual); abrirTodosGrupos(); salvarPainel(); renderizarTudo(); }
document.addEventListener("DOMContentLoaded", init);
