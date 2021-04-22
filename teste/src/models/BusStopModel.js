const { Model, DataTypes} = require('sequelize');

class BusStop extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            latitude: DataTypes.DOUBLE,
            longitude: DataTypes.DOUBLE
        }, {sequelize,

            tableName: 'busStop'} );
    }
}

module.exports = BusStop;