import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password)
      return res.status(401).json({
        errors: ['Credenciais inválidas'],
      });

    const user = User.findOne({ where: email });
    const { id } = user;

    if (!user) {
      return res.status(401).json({
        errors: ['O usário não existe'],
      });
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Senha incorreta'],
      });
    }

    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res
      .status(200)
      .json({ token, user: { name: user.name, email: user.email } });
  }
}

export default new TokenController();
