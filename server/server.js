const express = require('express');
const sequelize = require('./config/config');
const User = require('./models/User'); // Certifique-se de importar o modelo
const authRoutes = require('./routes/auth'); // Importa as rotas de autenticação

const cors = require('cors'); // Certifique-se de que o cors está importado

const app = express(); // Inicialize o Express antes de usar qualquer middleware

app.use(cors()); // Aplicando o middleware do CORS
app.use(express.json()); // Para reconhecer requisições JSON

// Sincronizando o banco de dados
sequelize.sync()
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => {
        console.error('Error syncing database:', err);
    });

// Adiciona as rotas de autenticação
app.use('/api/auth', authRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
