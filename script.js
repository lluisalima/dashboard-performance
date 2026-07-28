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
const expandido = new Set();
let graficoPresenca = null;
let graficoFaltas = null;
let graficoProjetos = null;
let graficoMeses = null;

function clonarDadosIniciais() {
  return JSON.parse(JSON.stringify(DADOS_INICIAIS));
}

function salvarDados() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
}

function carregarDados() {
  const salvo = localStorage.getItem(STORAGE_KEY);
  if (!salvo) {
    dados = clonarDadosIniciais();
    return;
  }

  try {
    dados = JSON.parse(salvo);
  } catch (erro) {
    dados = clonarDadosIniciais();
  }
}

function resetarDados() {
  if (!confirm("Tem certeza? Isso vai apagar as edições e voltar ao painel original.")) return;
  dados = clonarDadosIniciais();
  localStorage.removeItem(STORAGE_KEY);
  abrirTodosGrupos();
  renderizarTudo();
  alert("✅ Dados resetados com sucesso.");
}

function abrirTodosGrupos() {
  expandido.clear();
  dados.grupos.forEach((_, indice) => expandido.add(indice));
}

function atualizarData() {
  const hoje = new Date();
  document.getElementById("data-hoje").textContent = hoje.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
  dados.data = hoje.toLocaleDateString("pt-BR");
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
  const html = `
    <div class="stat-card verde">
      <span class="stat-numero">${status.presentes}</span>
      <span class="stat-label">Presentes</span>
      <span class="stat-extra">Equipe disponível hoje</span>
    </div>
    <div class="stat-card vermelho">
      <span class="stat-numero">${status.faltas}</span>
      <span class="stat-label">Faltas</span>
      <span class="stat-extra">Ausências sem presença</span>
    </div>
    <div class="stat-card laranja">
      <span class="stat-numero">${status.ausentesMd}</span>
      <span class="stat-label">Ausente MD</span>
      <span class="stat-extra">Afastamento / ausência MD</span>
    </div>
    <div class="stat-card azul">
      <span class="stat-numero">${percentual}%</span>
      <span class="stat-label">Presença Geral</span>
      <span class="stat-extra">${status.total} funcionários no total</span>
    </div>
  `;

  document.getElementById("visao-geral").innerHTML = html;
}

function renderGrupos() {
  const container = document.getElementById("grupos");

  container.innerHTML = dados.grupos.map((grupo, gi) => {
    const presentes = grupo.membros.filter(m => m.status === "PRESENTE").length;
    const taxaPresenca = grupo.membros.length ? Math.round((presentes / grupo.membros.length) * 100) : 0;
    const temMeta = grupo.previsto > 0;
    const taxaMeta = temMeta ? Math.round((grupo.entregue / grupo.previsto) * 100) : 0;
    const corMeta = taxaMeta >= 80 ? "verde" : taxaMeta >= 50 ? "laranja" : "vermelho";

    return `
      <div class="grupo-card">
        <div class="grupo-header">
          <div class="grupo-titulo-area">
            <h3 ondblclick="editarTituloGrupo(${gi})">${grupo.titulo}</h3>
            <span class="grupo-sub">
              ${grupo.membros.length} pessoas • ${presentes} presentes (${taxaPresenca}%)
              ${temMeta ? ` • Previsto <strong class="cel-editavel" ondblclick="editarNumeroGrupo(${gi}, 'previsto')">${grupo.previsto}</strong> / Entregue <strong class="cel-editavel" ondblclick="editarNumeroGrupo(${gi}, 'entregue')">${grupo.entregue}</strong>` : ""}
            </span>
          </div>
          <div class="grupo-acoes">
            ${temMeta ? `<span class="badge-meta ${corMeta}">${taxaMeta}% da meta</span>` : ""}
            <button class="btn-icon" onclick="toggleGrupo(${gi})" title="Abrir ou recolher">${expandido.has(gi) ? "▲" : "▼"}</button>
            <button class="btn-icon" onclick="adicionarMembro(${gi})" title="Adicionar funcionário">➕</button>
            <button class="btn-icon" onclick="removerGrupo(${gi})" title="Remover projeto">🗑️</button>
          </div>
        </div>

        <div class="grupo-membros ${expandido.has(gi) ? "" : "recolhido"}">
          <table class="tabela-membros">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Função</th>
                <th>Atividade</th>
                <th>Status</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              ${grupo.membros.map((membro, mi) => `
                <tr data-status="${classeStatus(membro.status)}">
                  <td class="cel-nome" ondblclick="editarCampo(${gi}, ${mi}, 'nome')">${membro.nome}</td>
                  <td class="cel-funcao" ondblclick="editarCampo(${gi}, ${mi}, 'funcao')">${membro.funcao}</td>
                  <td class="cel-atividade" ondblclick="editarCampo(${gi}, ${mi}, 'atividade')">${membro.atividade}</td>
                  <td>
                    <button class="btn-status ${classeStatus(membro.status)}" onclick="alternarStatus(${gi}, ${mi})">${membro.status}</button>
                  </td>
                  <td>
                    <button class="btn-icon" onclick="removerMembro(${gi}, ${mi})" title="Remover funcionário">🗑️</button>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }).join("");
}

function toggleGrupo(gi) {
  if (expandido.has(gi)) expandido.delete(gi);
  else expandido.add(gi);
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

  expandido.add(dados.grupos.length - 1);
  salvarDados();
  renderizarTudo();
}

function removerGrupo(gi) {
  const nome = dados.grupos[gi].titulo;
  if (!confirm(`Remover o projeto "${nome}"?`)) return;
  dados.grupos.splice(gi, 1);
  abrirTodosGrupos();
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

function destruirGrafico(instancia) {
  if (instancia) instancia.destroy();
}

function renderGraficoPresenca() {
  const ctx = document.getElementById("graficoPresenca").getContext("2d");
  const status = contarStatus();
  destruirGrafico(graficoPresenca);

  graficoPresenca = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Presentes", "Faltas", "Ausente MD"],
      datasets: [{
        data: [status.presentes, status.faltas, status.ausentesMd],
        backgroundColor: ["#1f8f52", "#c53a32", "#c97b14"],
        borderColor: ["#ffffff", "#ffffff", "#ffffff"],
        borderWidth: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "62%",
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            padding: 18,
            font: { size: 14, weight: "700" }
          }
        }
      }
    }
  });
}

function renderGraficoFaltas() {
  const ctx = document.getElementById("graficoFaltas").getContext("2d");
  const faltosos = todosMembros().filter(m => m.status === "FALTA" || m.status === "AUSENTE MD");
  const contagem = {};

  faltosos.forEach(membro => {
    const chave = nomeCurto(membro.nome);
    contagem[chave] = (contagem[chave] || 0) + 1;
  });

  destruirGrafico(graficoFaltas);

  const labels = Object.keys(contagem);
  const valores = Object.values(contagem);

  if (labels.length === 0) {
    document.getElementById("resumo-faltas").innerHTML = '<p class="sem-dados">Nenhuma falta registrada no estado atual do painel.</p>';
    graficoFaltas = new Chart(ctx, {
      type: "bar",
      data: { labels: ["Sem faltas"], datasets: [{ data: [0], backgroundColor: ["#dbe2ee"] }] },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } }
      }
    });
    return;
  }

  graficoFaltas = new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [{
        label: "Faltas / ausências",
        data: valores,
        backgroundColor: "#c53a32",
        borderRadius: 10
      }]
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: {
          beginAtZero: true,
          ticks: { precision: 0, stepSize: 1 }
        }
      }
    }
  });

  const maior = labels[valores.indexOf(Math.max(...valores))];
  const total = valores.reduce((acc, valor) => acc + valor, 0);
  document.getElementById("resumo-faltas").innerHTML = `<p>Total de faltas/ausências no painel atual: <strong>${total}</strong>. Maior destaque: <strong>${maior}</strong>.</p>`;
}

function renderGraficoProjetos() {
  const ctx = document.getElementById("graficoProjetos").getContext("2d");
  destruirGrafico(graficoProjetos);

  const labels = dados.grupos.map(g => g.titulo.length > 22 ? `${g.titulo.slice(0, 22)}...` : g.titulo);
  const valores = dados.grupos.map(g => {
    if (!g.membros.length) return 0;
    const presentes = g.membros.filter(m => m.status === "PRESENTE").length;
    return Math.round((presentes / g.membros.length) * 100);
  });

  graficoProjetos = new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [{
        label: "% de presença",
        data: valores,
        backgroundColor: "#2070d8",
        borderRadius: 10
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            callback: valor => `${valor}%`
          }
        }
      }
    }
  });
}

function gerarResumoMensalIlustrativo() {
  const base = contarStatus();
  const faltasBase = base.faltas + base.ausentesMd;
  return {
    labels: ["Mar", "Abr", "Mai", "Jun", "Jul"],
    valores: [Math.max(1, faltasBase - 2), Math.max(1, faltasBase + 1), Math.max(1, faltasBase), Math.max(1, faltasBase + 3), Math.max(1, faltasBase + 2)]
  };
}

function renderGraficoMeses() {
  const ctx = document.getElementById("graficoMeses").getContext("2d");
  destruirGrafico(graficoMeses);

  const mensal = gerarResumoMensalIlustrativo();
  graficoMeses = new Chart(ctx, {
    type: "line",
    data: {
      labels: mensal.labels,
      datasets: [{
        label: "Faltas por mês",
        data: mensal.valores,
        borderColor: "#c97b14",
        backgroundColor: "rgba(201, 123, 20, 0.16)",
        tension: 0.35,
        fill: true,
        pointRadius: 4,
        pointHoverRadius: 5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { stepSize: 1 }
        }
      }
    }
  });
}

function renderizarGraficos() {
  renderGraficoPresenca();
  renderGraficoFaltas();
  renderGraficoProjetos();
  renderGraficoMeses();
}

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
  const wb = XLSX.utils.book_new();

  const faltas = [["Funcionário", "Função", "Atividade", "Status", "Projeto", "Data"]];
  dados.grupos.forEach(grupo => {
    grupo.membros.forEach(membro => {
      if (membro.status === "FALTA" || membro.status === "AUSENTE MD") {
        faltas.push([membro.nome, membro.funcao, membro.atividade, membro.status, grupo.titulo, dados.data]);
      }
    });
  });

  const desempenho = [["Projeto", "Previsto", "Entregue", "Taxa da Meta (%)", "Funcionários", "Presentes", "Presença (%)"]];
  dados.grupos.forEach(grupo => {
    const presentes = grupo.membros.filter(m => m.status === "PRESENTE").length;
    const taxaPresenca = grupo.membros.length ? Math.round((presentes / grupo.membros.length) * 100) : 0;
    const taxaMeta = grupo.previsto > 0 ? Math.round((grupo.entregue / grupo.previsto) * 100) : 0;
    desempenho.push([grupo.titulo, grupo.previsto, grupo.entregue, taxaMeta, grupo.membros.length, presentes, taxaPresenca]);
  });

  XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(faltas), "Faltas e Ausências");
  XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(desempenho), "Desempenho");

  XLSX.writeFile(wb, `Relatorio_Painel_Stellantis_${dados.data.replace(/\//g, "-")}.xlsx`);
}

function renderizarTudo() {
  renderVisaoGeral();
  renderGrupos();
  renderizarGraficos();
}

function init() {
  carregarDados();
  atualizarData();
  abrirTodosGrupos();
  renderizarTudo();
}

document.addEventListener("DOMContentLoaded", init);
