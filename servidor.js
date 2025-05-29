const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/registrar', (req, res) => {
  const newUser = req.body;

  fs.readFile('registros.json', (err, data) => {
    let registros = [];

    if (!err && data.length > 0) {
      registros = JSON.parse(data);
    }

    registros.push(newUser);

    fs.writeFile('registros.json', JSON.stringify(registros, null, 2), err => {
      if (err) {
        console.error('Erro ao salvar:', err);
        res.status(500).send('Erro ao salvar');
      } else {
        res.status(200).send('Registrado com sucesso!');
      }
    });
  });
});

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
