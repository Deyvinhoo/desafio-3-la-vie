const Atendimentos= require('../models/atendimentos');
const { Op } = require('sequelize');

const atendimentosController = {
    async cadastrarAtendimento(req, res) {
        try {
            const { data_atendimento, observacao, pacientes_id, psicologos_id1 } = req.body;
            const novoAtendimento = await Atendimentos.create({
                data_atendimento,
                observacao,
                psicologos_id1,
                pacientes_id,
    
            });
            
            return res.status(201).json(novoAtendimento)

        } catch (error) {
            return res.status(400).json('Falha ao cadastrar atendimento');
        }
    }, 
    async deletarAtendimento(req, res) {
        try {
            const { id } = req.params;

            await Atendimentos.destroy({
                where: {
                    id,
                }
            });

            res.status(204).json("Atendimento Deletado com sucesso");
        } catch (error) {

        }
    },
    async buscarAtendimento(req, res) {
        try {
            const atendimentos = await Atendimentos.findAll({
                include: [pacientes, psicologos]
                
            });
            res.json(atendimentos);
        } catch (error) {
            console.error('Erro de busca');
        }
    },

    async buscarAtendimentoId(req, res) {
        try {
            const { id } = req.params;
            const atendimentos = await Atendimentos.findByPk(id,{
                include: [pacientes, psicologos]
            });
            if (atendimentos == null) {
                return res.status(404).json('Id não encontrado');
            }
            res.json(atendimentos);
        } catch (error) {
            console.error('Id não encontrado');
            res.status(404);
        }
    }
};

module.exports = atendimentosController;