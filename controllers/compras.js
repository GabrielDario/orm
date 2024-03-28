import { Compra } from '../model/Compras.js';


const getCompras = async (req, res) => {
    try {
        const compras = await Compra.findAll()
        //   const compras  = await Compra.findAll()
        //   const compras  = await Compra.findPk(2)
        //   const compras  = await Compra.findOne({ where : { title: 'My Title' } })
        res.status(200).send({ compras })
    } catch (erro) {
        console.log(erro);
        res.status(404).send({ mensagem: 'Erro ao buscar dados' })
    }
};

const postCompras = async (req, res) => {
    try {
        const { produto, preco } = req.body;

        if (!produto || !preco) return res.status(404).send({ mensagem: 'Mensagem incompletas!' })
        const produtoCriado = await Compra.create({ produto, preco })
        res.status(201).send({ produtoCriado })
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: 'Erro ao inserir dadaos!' })
    }
}

const putCompras = async (req, res) => {
    try {
        const { id } = req.params;
        const { produto, preco } = req.body;

        if (!produto || !preco) return res.status(404).send({ mensagem: 'Incompletas!' })

        const produtoAtualizado = await Compra.update({ produto, preco }, { where: { id } })
        res.status(200).send({ produtoAtualizado })

    } catch (erro) {
        console.log(erro);
        res.status(404).send({ mensagem: 'Erro ao atualizar dado' })
    }
}

const deleteCompras = async (req, res) => {
    try{
        const { id } = req.params;
        await Compra.destroy({ where : {id }})
        res.status(200).send({ produtoDeletado })

    }catch(erro) {
        console.log(erro);
        res.status(404).send({ mensagem: 'Deletado' })
    }
}
export { getCompras, postCompras, putCompras ,deleteCompras}