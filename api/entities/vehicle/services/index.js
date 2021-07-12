const {Vehicle, VehiclePos} = require('../../../database/DBInit');

class VehicleService {
  async create(vehicle) {
    const createdVehicle = await Vehicle.create(vehicle);
    return createdVehicle;
  }

  async getByID(id) {
    const vehicle = await Vehicle.findByPk(id);
    if (!vehicle) {
      throw new Error(`Couldn't find vehicle with ID ${id}`);
    }
    return vehicle;
  }

  async getAll() {
    const vehicles = await Vehicle.findAll();
    if (!vehicles) {
      throw new Error('There is no vehicles registered.');
    }
    return vehicles;
  }

  async update(id, body) {
    const vehicle = await this.getByID(id);
    const updatedVehicle = await vehicle.update(body);
    return updatedVehicle;
  }

  async delete(id) {
    const updatedVehicle = await this.getByID(id);
    await updatedVehicle.destroy();
  }

  async createPosition(position) {
    const createdPos = await VehiclePos.create(position);
    return createdPos;
  }

  async getPositionByID(id) {
    const position = await VehiclePos.findByPk(id);
    if (!position) {
      throw new Error(`Couldn't find vehicle position with ID ${id}`);
    }
    return position;
  }

  async getAllPositions() {
    const positions = await VehiclePos.findAll();
    if (!positions) {
      throw new Error('There is no vehicles position registered.');
    }
    return positions;
  }

  async updatePosition(id, body) {
    const position = await VehiclePos.findByPk(id);
    const updatedPos = await position.update(body);
    return updatedPos;
  }

  async deletePosition(id) {
    const position = await VehiclePos.findByPk(id);
    await position.destroy();
  }
}

module.exports = new VehicleService();
