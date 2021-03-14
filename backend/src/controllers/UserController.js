import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const user = await User.create(req.body);

      const { id, name, email } = user;

      return res.status(200).json({ id, name, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll();

      if (!users)
        return res
          .status(400)
          .json({ msg: 'Não existem registros de usuários.' });

      return res.status(200).json(users);
    } catch (e) {
      return res.status(400).json({
        error: e.errors,
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.query;

      const user = await User.findByPk(id);

      if (!user)
        return res.status(401).json({ errors: ['Usuário não existe'] });

      return res.status(200).json(user);
    } catch (e) {
      return res.status(400).json({
        error: e.errors,
      });
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user)
        return res.status(401).json({ errors: ['Usuário não existe'] });

      const updatedUser = await user.update(req.body);

      const { id, name, email } = updatedUser;

      return res.status(200).json({ id, name, email });
    } catch (e) {
      throw new Error(e);
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user)
        return res.status(401).json({ errors: ['Usuário não existe'] });

      await user.destroy();

      return res.status(200).json({ msg: 'Usuário deletado com sucesso.' });
    } catch (e) {
      return res.status(400).json({
        error: e.errors,
      });
    }
  }
}

export default new UserController();
