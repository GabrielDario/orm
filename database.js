import { Sequelize } from 'sequelize';

const conexao = process.env.CONEXAO
const sequelize = new Sequelize(conexao);

// try {
//        await sequelize.authenticate();
//        console.log('Conectado com sucesso!');
       
// }catch(erro) {
//     console.log(erro)
// }
export default sequelize