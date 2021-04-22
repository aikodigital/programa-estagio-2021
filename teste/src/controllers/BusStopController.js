const BusStop = require('../models/BusStopModel');



module.exports = {
    async create(req, res) {
        const { name, latitude, longitude } = req.body;

        const busStopExists = await BusStop.findOne({ where: { 'name': name } });
        if (busStopExists)  return res.status(409).json({ error: "Stop Already exists" });

        const busStop = await BusStop.create({ name, latitude, longitude });

        return res.status(201).json(busStop);
    },

    async list(req, res) {
        const stops = await BusStop.findAll();

        return res.status(200).json(stops);
    },

    async detail(req, res) {
        const id = req.params.id;

        const stop = await BusStop.findByPk(id);
        if (!stop) return res.status(404).json({ error: "Stop not found" });

        return res.status(200).json(stop);
    },

    async update(req, res) {
        const { name, latitude, longitude } = req.body;

        const stopId = req.params.id;

        const busStopExists = await BusStop.findOne({ where: { 'name': name } });
        if (busStopExists) return res.status(409).json({ message: "Stop Already exists" });

        let stop = await BusStop.findOne({ where: { 'id': stopId } });
        if (!stop) return res.status(404).json({ error: "Stop not found" });

        try {
            stop = await stop.update({
                name: name,
                latitude: latitude,
                longitude: longitude
            });
            return res.status(201).json({ message: "Stop updated with success" });
        } catch (error) {
            return res.status(400).json({ error: "Update failed" });
        }

    },

    async delete(req, res) {

        const stopId = req.params.id;

        let stop = await BusStop.findOne({ where: { 'id': stopId } });

        if (!stop) return res.status(404).json({ error: "Stop not found" });
        try {
            stop = await stop.destroy()
            return res.status(200).json({ message: "Stop deleted with success" });
        } catch (error) {
            return res.status(400).json({ error: "Deletion failed" });
        }

    },

}


