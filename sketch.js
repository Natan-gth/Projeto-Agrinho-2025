const eventos = [
  {
    ano: "1950",
    titulo: "Festa da Colheita",
    descricao: "Celebração tradicional realizada em vilarejos rurais do Brasil após a colheita.",
    imagem: "img1.jpg"
  },
  {
    ano: "1975",
    titulo: "Expansão das Festas Juninas",
    descricao: "Festas típicas ganham destaque nas cidades com quadrilhas, barracas e música.",
    imagem: "img2.jpg"
  },
  {
    ano: "1990",
    titulo: "Tecnologia no Campo",
    descricao: "Início da modernização agrícola com máquinas e eventos demonstrativos.",
    imagem: "img3.jpg"
  },
  {
    ano: "2000",
    titulo: "Festas Urbanas Temáticas",
    descricao: "Cidades passam a valorizar a cultura rural em eventos e festas públicas.",
    imagem: "img4.jpg"
  },
  {
    ano: "2025",
    titulo: "Agrinho 2025",
    descricao: "Integração entre o campo e a cidade é celebrada com projetos educacionais.",
    imagem: "img5.jpg"
  }
];

function criarEventoCard(evento) {
  const div = document.createElement('div');
  div.className = 'evento';
  div.innerHTML = `
    <img src="${evento.imagem}" alt="${evento.titulo}">
    <h3>${evento.ano} - ${evento.titulo}</h3>
    <p>${evento.descricao}</p>
  `;
  return div;
}

document.addEventListener('DOMContentLoaded', () => {
  const timeline = document.getElementById('timeline');
  eventos.forEach(evento => {
    const card = criarEventoCard(evento);
    timeline.appendChild(card);
  });

  document.getElementById('prevBtn').addEventListener('click', () => {
    timeline.scrollLeft -= 300;
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
    timeline.scrollLeft += 300;
  });
});

