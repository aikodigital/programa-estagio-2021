const {BusLine} = require('../../../database/DBInit');

class busLineService {
  async create(busLine) {
    const createdBusLine = await BusLine.create(busLine);
    return createdBusLine;
  }

  async getByID(id) {
    const busLine = await BusLine.findByPk(id);
    if (!busLine) {
      throw new Error(`Couldn't find bus line with ID ${id}`);
    }
    return busLine;
  }

  async getAll() {
    const busLines = await BusLine.findAll();
    if (!busLines) {
      throw new Error('There is no bus lines registered.');
    }
    return busLines;
  }

  async update(id, body) {
    const busLine = await this.getByID(id);
    const updatedBusLine = await busLine.update(body);
    return updatedBusLine;
  }

  async delete(id) {
    const busLine = await this.getByID(id);
    await busLine.destroy();
  }
}

module.exports = new busLineService();
