
const BusLine = require('../models/BusLineModel');
const BusStop = require('../models/BusStopModel');


module.exports = {
    async create(req, res) {
        const name = req.body.name;
        let stops = req.body.stops;

        const busLineExists = await BusLine.findOne({ where: { 'name': name } });
        if (busLineExists) return res.status(409).json({ error: "Line Already exists" });

        let status;
        let filtered = [];
        for (stop in stops) {
            status = await BusStop.findOne({ where: { 'id': stops[stop] } });

            if (status)
                filtered.push(stops[stop]);
        }

        stops = filtered;
        const busLine = await BusLine.create({ name, stops });

        return res.status(201).json(busLine);
    },

    async list(req, res) {
        const lines = await BusLine.findAll();

        return res.status(200).json(lines);
    },

    async detail(req, res) {
        const id = req.params.id;

        const line = await BusLine.findByPk(id);
        if (!line) return res.status(409).json({ error: "Line not found" });

        return res.status(201).json(line);
    },

    async update(req, res) {
        let { name, stops } = req.body;

        const busLineExists = await BusLine.findOne({ where: { 'name': name } });
        if (busLineExists) return res.status(409).json({ error: "Line Already exists" });

        const lineId = req.params.id;

        let line = await BusLine.findOne({ where: { 'id': lineId } });
        if (!line) return res.status(404).json({ error: "Line not found" });

        let status;
        let filtered = [];
        for (stop in stops) {
            status = await BusStop.findOne({ where: { 'id': stops[stop] } });

            if (status)
                filtered.push(stops[stop]);

        }
        stops = filtered;
        try {
            line = await line.update({
                name: name,
                stops: stops
            });
            return res.status(201).json({ message: "Line updated with success" });
        } catch (error) {
            return res.status(400).json({ error: "Update failed" });
        }
    },

    async delete(req, res) {
        const lineId = req.params.id;

        let line = await BusLine.findOne({ where: { 'id': lineId } });
        if (!line) return res.status(404).json({ error: "Line not found" });

        try {
            line = await line.destroy()
            return res.status(200).json({ message: "Line deleted with success" });
        } catch (error) {
            return res.status(400).json({ error: "Deletion failed" });
        }
    }


}