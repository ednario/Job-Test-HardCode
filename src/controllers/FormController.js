const database = require('../models');

class FormController {
  // Adiciona dados ao banco
  static async addConcorrente(req, res) {
    try {
      await database.Concorrentes.create(
        {
          nome: req.body.nome,
          email: req.body.email,
          datanasc: req.body.datanasc,
          telefone: req.body.telefone,
          cidade: req.body.cidade,
          reside_jn: req.body.reside_jn,
          homeoffice: req.body.homeoffice,
          meio_periodo: req.body.meio_periodo,
          possui_comp: req.body.possui_comp,
          possui_smartphone: req.body.possui_smartphone,
          concorrentescol: req.body.concorrentescol,
          area: req.body.area,
          wordpress: req.body.wordpress,
          elementor: req.body.elementor,
          nocode_lowcode: req.body.nocode_lowcode,
          nivel_profissional: req.body.nivel_profissional,
          experiencia: req.body.experiencia,
          freelancer: req.body.freelancer,
          exame: req.body.exame,
          ingles: req.body.ingles,
          modelo_contrato: req.body.modelo_contrato,
          possui_empresa_aberta: req.body.possui_empresa_aberta,
        },
      );
      return res.status(200).redirect('/');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  // lista todos os concorrentes
  static async listaConcorrentes(req, res) {
    try {
      const todosOsConcorrentes = await database.Concorrentes.findAll();
      return res.status(200).json(todosOsConcorrentes);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = FormController;
