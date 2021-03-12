import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'Esse email já existe',
          },
          validate: {
            isEmail: {
              msg: 'Email inválido',
            },
          },
        },
        password: {
          type: Sequelize.VIRTUAL,
          validate: {
            len: {
              args: [6, 50],
              msg: 'A senha deve ter entre 6 e 50 caracteres',
            },
          },
        },
        password_hash: {
          type: Sequelize.STRING,
        },
      },
      {
        sequelize,
      }
    );

    this.beforeSave(async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Linha, {
      foreignKey: 'linha_id',
      as: 'linhasveiculo',
    });

    this.hasOne(models.PosicaoVeiculo, {
      foreignKey: 'veiculo_id',
      as: 'posicao',
    });
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}
