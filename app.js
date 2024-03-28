import express from 'express'
import 'dotenv/config'
import { router  } from './routes/compras.js';
import  sequelize  from './database.js';

const app = express();
console.log(process.env.CONEXAO)
console.log(process.env.MENSAGEM)
try {
    //  await sequelize.sync({force: true})
}catch(erro) {
    console.log(erro)
}

app.use(express.json());
app.use(router);
app.listen(3000, () => console.log('Servidor Rodando...'))