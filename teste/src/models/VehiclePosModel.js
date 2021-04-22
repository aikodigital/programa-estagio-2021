const { Model, DataTypes} = require('sequelize');

class VehiclePos extends Model{
    static init(sequelize){
        super.init({
            latitude: DataTypes.STRING,
            longitude: DataTypes.STRING,
        }, {sequelize,

            tableName: 'vehiclePos'} );
    }

    static associate(models){
        this.belongsTo(models.Vehicle, {foreignKey:'vehicle_id', as:'vehicle'});
    }
}

module.exports = VehiclePos;