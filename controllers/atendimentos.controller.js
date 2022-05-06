const { atendimentos, pacientes, psicologos } = require('../models/');

const atendimentosController = {
    async cadastrarAtendimento(req, res) {
        try {
            const { data_atendimento, observacao, paciente_id, psicologos_id1 } = req.body;
            const novoAtendimento = await atendimentos.create({
                data_atendimento,
                observacao,
                paciente_id,
                psicologos_id1,

            });
            
            return res.status(201).json(novoAtendimento)

        } catch (error) {
            return res.status(400).json('Falha ao cadastrar atendimento');
        }
    }, 
    
};

module.exports = atendimentosController;