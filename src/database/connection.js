const mongo = require('mongoose');

const connection = () => {
  // URL de conexão com o MongoDB
  const mongoDBUrl = 'mongodb+srv://root:root@cluster0.xgybtre.mongodb.net/?retryWrites=true&w=majority';

  // Conecte-se ao MongoDB
  mongo.connect(mongoDBUrl);

  // Verifique se a conexão foi bem-sucedida
  const db = mongo.connection;
  db.on('error', console.error.bind(console, 'A conexão com a database não foi estabelecida!'));
  db.once('open', () => {
    console.log('A conexão com a database foi estabelecida!');
  });
};

module.exports = connection;