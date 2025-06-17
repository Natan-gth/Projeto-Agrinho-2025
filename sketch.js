const slider = document.getElementById('slider');
const eventos = document.getElementById('eventos');
const markers = document.querySelectorAll('.slider-markers span');
const sliderContainer = document.querySelector('.slider-container');

const dados = [
    {
        imagem: 'imagens/evento1.jpg',
        titulo: 'Conexão Campo-Cidade',
        descricao: 'Este evento inaugural explora a profunda interdependência entre as áreas rurais e urbanas. Abordaremos como a produção agrícola no campo alimenta e sustenta as cidades, e como as inovações tecnológicas e o consumo urbano influenciam as práticas agrícolas. Descubra a jornada dos alimentos da fazenda à mesa e o papel vital de ambos os ambientes para o desenvolvimento sustentável.'
    },
    {
        imagem: 'imagens/evento2.jpg',
        titulo: 'Educação Rural: Semeando o Futuro',
        descricao: 'A educação no campo é a base para um futuro mais próspero e sustentável. Este evento destaca a importância de escolas rurais, programas de capacitação e acesso ao conhecimento para jovens agricultores e suas famílias. Discutiremos como a educação pode empoderar comunidades rurais, impulsionar a inovação no agronegócio e garantir a sucessão familiar no campo, fortalecendo a conexão com as novas gerações da cidade.'
    },
    {
        imagem: 'imagens/evento3.jpeg',
        titulo: 'Feiras e Tradições: Cultivando Sabores e Saberes',
        descricao: 'Celebre a rica cultura e as tradições do campo em nossas feiras temáticas. Este evento mergulha nas festividades locais, nos produtos artesanais e na culinária típica que nascem da terra. É uma oportunidade de vivenciar a autenticidade da vida rural, valorizar o trabalho do agricultor e fortalecer os laços entre produtores e consumidores urbanos, promovendo um intercâmbio cultural vibrante.'
    },
    {
        imagem: 'imagens/evento4.jpeg',
        titulo: 'Tecnologia no Agro: Inovação Sustentável',
        descricao: 'Explore como a tecnologia está revolucionando o agronegócio, tornando-o mais eficiente, produtivo e sustentável. Apresentaremos desde a agricultura de precisão e drones até a biotecnologia e energias renováveis no campo. Este evento demonstra como a inovação impulsiona a segurança alimentar, otimiza recursos e abre novas perspectivas para produtores rurais e para toda a cadeia de suprimentos que abastece as cidades.'
    },
    {
        imagem: 'imagens/evento5.jpg',
        titulo: 'Juventude e Sustentabilidade: Pontes para o Amanhã',
        descricao: 'Jovens impulsionam um futuro sustentável ao conectar campo e cidade, explorando inovações agrícolas, empreendedorismo rural e conscientização ambiental. Inspire-se em projetos que harmonizam ecologia, economia e sociedade.'
    }
];

function criarEventos() {
    eventos.innerHTML = '';
    dados.forEach((evento, i) => {
        const div = document.createElement('div');
        div.className = 'evento';
        div.innerHTML = `
            <img src="${evento.imagem}" alt="${evento.titulo}">
            <h3>${evento.titulo}</h3> <p>${evento.descricao}</p>
        `;
        eventos.appendChild(div);
    });
}

function atualizarEvento(index) {
    const todas = document.querySelectorAll('.evento');
    todas.forEach((div, i) => {
        div.classList.toggle('ativo', i === index);
    });

    markers.forEach((m, i) => {
        m.classList.toggle('active', i === index);
    });

    slider.value = index;
}

criarEventos();

slider.max = dados.length - 1;
slider.step = 1;

slider.addEventListener('mousedown', (e) => {
    e.preventDefault();
    e.stopPropagation();
});
slider.addEventListener('touchstart', (e) => {
    e.preventDefault();
    e.stopPropagation();
}, { passive: false });

slider.setAttribute('disabled', 'true');

atualizarEvento(0);
slider.value = 0;

markers.forEach((marker, i) => {
    marker.addEventListener('click', () => {
        atualizarEvento(i);
    });
});

sliderContainer.addEventListener('click', (e) => {
    if (e.target === slider || e.target.classList.contains('slider-thumb')) {
        return;
    }

    const rect = sliderContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const index = Math.round(percentage * (dados.length - 1));

    const clampedIndex = Math.max(0, Math.min(dados.length - 1, index));

    atualizarEvento(clampedIndex);
});
