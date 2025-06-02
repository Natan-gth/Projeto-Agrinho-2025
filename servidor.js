const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const caminhoArquivo = 'registros.json';

// Rota para registrar novos usuários (já existe)
app.post('/registrar', (req, res) => {
  const novoRegistro = req.body;

  fs.readFile(caminhoArquivo, 'utf8', (err, data) => {
    let registros = [];
    if (!err && data) {
      try {
        registros = JSON.parse(data);
      } catch (e) {
        console.error('Erro ao parsear JSON existente:', e);
        registros = []; // Se o arquivo estiver corrompido, inicia um array vazio
      }
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

// ************************************************
// NOVA ROTA: Para obter todos os registros
// ************************************************
app.get('/registros', (req, res) => {
  fs.readFile(caminhoArquivo, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') { // Arquivo não encontrado
        return res.status(200).json([]); // Retorna array vazio se não houver registros
      }
      console.error('Erro ao ler registros.json:', err);
      return res.status(500).json({ mensagem: 'Erro ao buscar registros.' });
    }

    try {
      const registros = JSON.parse(data);
      res.status(200).json(registros);
    } catch (e) {
      console.error('Erro ao parsear registros.json:', e);
      res.status(500).json({ mensagem: 'Erro ao processar dados de registro.' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
