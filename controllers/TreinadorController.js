const { Treinadores, Sequelize } = require('../models')
const Op = Sequelize.Op

class TreinadorController{
    async getAll(req, res) {

        try {
            const todosTreinadores = await Treinadores.findAll()
            return res.status(200).json(todosTreinadores)
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    async getOne(req, res) {
        const { id } = req.params
        try {
            const umTreinador = await Treinadores.findOne( { 
                where:{
                    id: Number(id)
                }
            } )
            return res.status(200).json(umTreinador)
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    async insert(req, res) {

        try {
            const novoTreinador = await Treinadores.create(req.body)
            return res.status(200).json(novoTreinador)
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    async delete(req, res) {
        try {
            const alvo = await Treinadores.findByPk(req.params.id)
            if (alvo) {
                await alvo.destroy()
                return res.status(204).json(alvo)
            } else {
                return res.status(400).json({
                    mensagem: "Treinador não encontrado"
                })
            }
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    async update(req, res) {
        try {
            const alvo = await Treinadores.findByPk(req.params.id)
            if (alvo) {
                await alvo.update(req.body)
                return res.status(204).json(alvo)
            } else {
                return res.status(400).json({
                    mensagem: "Treinador não encontrado"
                })
            }
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    async getAllByName(req, res) {
        let nome = '%'+req.query.nome
        try {
            const treinador = await Treinadores.findAll({
                where:{
                    nome: {
                        [Op.like]: nome
                    }
                }
            })
            return res.status(200).json(treinador)
        }catch(erro){
            return res.status(400).json({
                error: erro.message
            })
        }
    }

}

module.exports = new TreinadorController()
