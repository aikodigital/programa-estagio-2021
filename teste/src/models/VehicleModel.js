const { Model, DataTypes} = require('sequelize');

class Vehicle extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            model: DataTypes.STRING,
        }, {sequelize,

            tableName: 'vehicle'} );
    }

    static associate(models){
        this.belongsTo(models.BusLine, {foreignKey:'line_id', as:'line'});
        this.hasOne(models.VehiclePos, {foreignKey:'vehicle_id', as:'position'});
    }
}

module.exports = Vehicle;