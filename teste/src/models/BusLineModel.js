const { Model, DataTypes } = require('sequelize');

class BusLine extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            stops: DataTypes.ARRAY(DataTypes.INTEGER),
        }, {
            sequelize,

            tableName: 'busLine'
        });
    }
    static associate(models){
        this.hasMany(models.Vehicle, {foreignKey:'line_id', as:'vehicles'});
    }
}

module.exports = BusLine;