const {BusStop} = require('../../../database/DBInit');

class busStopService {
  async create(busStop) {
    const createdBusStop = await BusStop.create(busStop);
    return createdBusStop;
  }

  async getByID(id) {
    const busStop = await BusStop.findByPk(id);
    if (!busStop) {
      throw new Error(`Couldn't find bus stop with ID ${id}`);
    }
    return busStop;
  }

  async getAll() {
    const busStops = await BusStop.findAll();
    if (!busStops) {
      throw new Error('There is no bus stop registered.');
    }
    return busStops;
  }

  async update(id, body) {
    const busStop = await this.getByID(id);
    const updatedBusStop = await busStop.update(body);
    return updatedBusStop;
  }

  async delete(id) {
    const busStop = await this.getByID(id);
    await busStop.destroy();
  }
}

module.exports = new busStopService();
