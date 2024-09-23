const sequelize = require('./config/config'); 
const User = require('./models/User'); 

sequelize.sync({ force: true }) 
    .then(() => {
        console.log('Tabelas criadas com sucesso!');
    })
    .catch(err => {
        console.error('Erro ao criar tabelas:', err);
    });
