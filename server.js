import express from 'express';
import conectarAoBanco from './src/config/dbConfig.js';
import routes from './src/routes/postsRoutes.js';

// Cria uma instância do Express, que será o núcleo da nossa aplicação
const app = express();
routes(app);

// Inicia o servidor na porta 3000 e exibe uma mensagem no console
app.listen(3000, () => {
    console.log('servidor escutando...');
});

// Rota raiz, retorna uma mensagem de boas-vindas
app.get('/', (req, res) => {
    res.status(200).send('Boas vindas a Imersão!');
});
