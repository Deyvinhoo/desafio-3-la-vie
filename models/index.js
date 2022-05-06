const Pacientes = require("./pacientes")
const Psicologos = require("./psicologos")
const Atendimento = require("./atendimentos")

Pacientes.belongsTo(Psicologos, {
    foreignKey: 'psicologo_id',
});

Psicologos.hasMany(Pacientes, {
    foreignKey: 'paciente_id',
});

Psicologos.belongsToMany(Pacientes, {
    foreignKey: 'paciente_id',
    through: Atendimento,
});

Pacientes.belongsToMany(Psicologos, {
    foreignKey: 'psicologo_id',
    through: Atendimento,
});

module.exports = {
    Pacientes,
    Psicologos,
}