const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const caminhoArquivo = 'registros.json';

app.post('/registrar', (req, res) => {
  const novoRegistro = req.body;

  fs.readFile(caminhoArquivo, 'utf8', (err, data) => {
    let registros = [];
    if (!err && data) {
      registros = JSON.parse(data);
    }
    registros.push(novoRegistro);

    fs.writeFile(caminhoArquivo, JSON.stringify(registros, null, 2), (err) => {
      if (err) {
        res.status(500).json({ mensagem: 'Erro ao salvar registro.' });
      } else {
        res.status(200).json({ mensagem: 'Registro salvo com sucesso!' });
      }
    });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

