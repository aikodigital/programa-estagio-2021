import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization)
    return res.status(401).json({
      errors: ['Token de autenticação não incluso'],
    });

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);

    const { id, email } = dados;

    const user = await User.findOne({
      where: { id, email },
    });

    if (!user)
      return res.status(401).json({
        errors: ['O usuário não existe'],
      });

    req.userId = id;

    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido'],
    });
  }
};
