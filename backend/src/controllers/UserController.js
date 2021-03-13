import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const user = await User.create(req.body);

      return res.status(200).json(user);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const user = await User.findAll();

      if (!user)
        return res
          .status(400)
          .json({ msg: 'Não existem registros de usuários.' });

      return res.status(200).json(user);
    } catch (e) {
      return res.status(400).json({
        error: e.errors,
      });
    }
  }

  // async show(req, res) {
  //   try {
  //     const { id } = req.query;

  //     const posicaoVeiculo = await PosicaoVeiculo.findByPk(id, {
  //       attributes: ['id', 'latitude', 'longitude', 'veiculo_id'],
  //     });

  //     if (!posicaoVeiculo)
  //       return res
  //         .status(400)
  //         .json({ msg: 'Posição de veículo não encontrada' });

  //     return res.status(200).json(posicaoVeiculo);
  //   } catch (e) {
  //     throw new Error(e);
  //   }
  // }

  // async update(req, res) {
  //   try {
  //     const { id } = req.query;
  //     const posicaoVeiculo = await PosicaoVeiculo.findByPk(id);

  //     const posicaoAtualizada = await posicaoVeiculo.update(req.body);

  //     return res.status(200).json(posicaoAtualizada);
  //   } catch (e) {
  //     throw new Error(e);
  //   }
  // }

  // async delete(req, res) {
  //   try {
  //     const { id } = req.query;
  //     const posicaoVeiculo = await PosicaoVeiculo.findByPk(id);

  //     await posicaoVeiculo.destroy();

  //     return res.status(200).json({ msg: 'Registro deletado com sucesso.' });
  //   } catch (e) {
  //     throw new Error(e);
  //   }
  // }
}

export default new UserController();
