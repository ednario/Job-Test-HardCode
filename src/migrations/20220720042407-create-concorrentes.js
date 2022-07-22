module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Concorrentes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      datanasc: {
        type: Sequelize.DATEONLY,
      },
      telefone: {
        type: Sequelize.STRING,
      },
      cidade: {
        type: Sequelize.STRING,
      },
      reside_jn: {
        type: Sequelize.STRING,
      },
      homeoffice: {
        type: Sequelize.STRING,
      },
      meio_periodo: {
        type: Sequelize.STRING,
      },
      possui_comp: {
        type: Sequelize.STRING,
      },
      possui_smartphone: {
        type: Sequelize.STRING,
      },
      concorrentescol: {
        type: Sequelize.STRING,
      },
      area: {
        type: Sequelize.STRING,
      },
      wordpress: {
        type: Sequelize.STRING,
      },
      elementor: {
        type: Sequelize.STRING,
      },
      nocode_lowcode: {
        type: Sequelize.STRING,
      },
      nivel_profissional: {
        type: Sequelize.STRING,
      },
      experiencia: {
        type: Sequelize.STRING,
      },
      freelancer: {
        type: Sequelize.STRING,
      },
      exame: {
        type: Sequelize.STRING,
      },
      ingles: {
        type: Sequelize.STRING,
      },
      modelo_contrato: {
        type: Sequelize.STRING,
      },
      possui_empresa_aberta: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Concorrentes');
  },
};
