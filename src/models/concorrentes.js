const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Concorrentes extends Model {
    static associate(models) {
    }
  }
  Concorrentes.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    datanasc: DataTypes.DATEONLY,
    telefone: DataTypes.STRING,
    cidade: DataTypes.STRING,
    reside_jn: DataTypes.STRING,
    homeoffice: DataTypes.STRING,
    meio_periodo: DataTypes.STRING,
    possui_comp: DataTypes.STRING,
    possui_smartphone: DataTypes.STRING,
    concorrentescol: DataTypes.STRING,
    area: DataTypes.STRING,
    wordpress: DataTypes.STRING,
    elementor: DataTypes.STRING,
    nocode_lowcode: DataTypes.STRING,
    nivel_profissional: DataTypes.STRING,
    experiencia: DataTypes.STRING,
    freelancer: DataTypes.STRING,
    exame: DataTypes.STRING,
    ingles: DataTypes.STRING,
    modelo_contrato: DataTypes.STRING,
    possui_empresa_aberta: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Concorrentes',
  });
  return Concorrentes;
};
