let banner, exemplo, fundo;
let verificarB;
let botaoAtivo = true;

function preload() {
  banner = loadImage('imagens/banner.png');
  exemplo = loadImage('imagens/qrcodeex.png');
  fundo = loadImage('imagens/fundo.png');
}

function setup() {
  createCanvas(1300, 1300);
  background('white');

  image(fundo, 0, 210, 1300, 1090); // fundo ajustado
  image(banner, 0, 0, 1300, 300);   // banner ajustado
  image(exemplo, 480, 435, 280, 280); // qrcode

  fill('white');
  stroke(0);
  strokeWeight(2);

  textSize(35);
  text("Veja seu registro através", 60, 440);
  text("do QR code.", 60, 470);

  text("Oque é o agrinho 2025?", 815, 390);

  textSize(23);
  text("O Agrinho 2025 é um programa de \nresponsabilidade social promovido pelo \nSistema FAEP \n(Federação da Agricultura do Estado \ndo Paraná) \nem parceria com o SENAR-PR \n(Serviço Nacional de Aprendizagem Rural). \nEste programa tem como objetivo promover \na educação e a conscientização sobre a \nimportância do agronegócio e suas práticas \nsustentáveis entre os jovens.", 815, 420);

  text("O tema para o concurso do Agrinho em 2025 é “Festejando a conexão campo-cidade”. Este tema busca \nPromover ações que integrem as realidades do campo e da cidade. \nEstimular ideias e projetos que ofereçam soluções sustentáveis para os desafios enfrentados por ambas as comunidades. \nEnvolver os jovens em discussões sobre a importância da agricultura e da sustentabilidade.", 50, 900);

  text("Objetivos do Programa \nO Agrinho visa: \n ● Educação: Incentivar o aprendizado sobre práticas agrícolas e a importância do agronegócio. \n ● Conscientização: Promover a consciência ambiental e a sustentabilidade. \n ● Integração: Fomentar a conexão entre as áreas rurais e urbanas, destacando a interdependência entre elas.", 50, 1050);

  text("© Esse projeto foi feito por um aluno do Colégio Estadual Carlos Gomes \npara o programa Agrinho 2025.", 50, 1250);

  text("Não está registrado ainda?", 50, 800);

  let link = createA('registro.html','Clique aqui para se registrar!');
  link.position(340, 777); 
  link.style('font-size', '24px'); 
  link.style('color', '#6F6FFF');
  link.style('text-decoration', 'underline');  

  verificarB = createButton('VERIFICAR-SE');
  verificarB.size(310, 135);
  verificarB.position(100, 525);
  verificarB.style('font-size', '36px');
  verificarB.style('background-color', '#72EE7B');
  verificarB.style('color', '#ffffff');
  verificarB.mousePressed(funcaoDoBotaoAoClicar);
}

function funcaoDoBotaoAoClicar() {
  if (botaoAtivo) {
    botaoAtivo = false;
    console.log('Botão clicado!');
    setTimeout(() => {
      botaoAtivo = true;
    }, 1000);
  }
}
