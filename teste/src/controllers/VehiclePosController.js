
const Vehicle = require('../models/VehicleModel');
const VehiclePos = require('../models/VehiclePosModel');
const { detail, list } = require('./VehicleController');

module.exports = {
    async create(req, res) {
        const { vehicle_id } = req.params;
        const { latitude, longitude } = req.body;

        const vehicle = await Vehicle.findByPk(vehicle_id);
        if (!vehicle) return res.status(404).json({ error: "Vehicle not found" });

        const vehicleExists = await VehiclePos.findOne({ where: { 'vehicle_id': vehicle_id } });
        if (vehicleExists) return res.status(404).json({ error: "Vehicle already have a position" });

        const vehiclePos = await VehiclePos.create({ latitude, longitude, vehicle_id });

        return res.status(201).json(vehiclePos);

    },

    async detail(req, res) {
        const { id } = req.params;

        const position = await VehiclePos.findByPk(id);
        if (!position) return res.status(404).json({ error: "Position not found" });

        return res.status(200).json(position);
    },

    async list(req, res) {
        const positions = await VehiclePos.findAll();

        return res.status(200).json(positions);
    },

    async update(req, res) {
        const { latitude, longitude } = req.body;

        const positionId = req.params.id;

        let position = await VehiclePos.findOne({ where: { 'id': positionId } });
        if (!position) return res.status(404).json({ error: "Position not found" });

        try {
            position = await position.update({
                latitude: latitude,
                longitude: longitude,
            });
            return res.status(201).json({ message: "Position updated with success" });
        } catch (error) {
            return res.status(400).json({ error: "Update failed" });
        }

    },

    async delete(req, res) {
        const positionId = req.params.id;

        let position = await VehiclePos.findOne({ where: { 'id': positionId } });
        if (!position) return res.status(404).json({ error: "Position not found" });

        try {
            position = await position.destroy();
            return res.status(200).json({ message: "Position deleted with success" });
        } catch (error) {
            return res.status(400).json({ error: "Deletion failed" });
        }
    }
}