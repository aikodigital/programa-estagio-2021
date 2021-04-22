const BusLine = require('../models/BusLineModel');
const Vehicle = require('../models/VehicleModel');

module.exports = {
    async create(req,res){
        const {line_id} = req.params;
        const {name,model} = req.body;

        const line = await BusLine.findByPk(line_id);

        if(!line)
            return res.status(404).json({error:"Line not found"});

        const vehicle = await Vehicle.create({name, model,line_id});

        return res.status(201).json(vehicle);

    },

    async detail(req,res){
        const {id} = req.params;

        const vehicle = await Vehicle.findByPk(id);

        if(!vehicle) return res.status(404).json({error:"Vehicle not found"});
        
        return res.status(200).json(vehicle);
    },

    async list(req,res){
        const vehicles = await Vehicle.findAll();

        return res.status(200).json(vehicles);
    },

    async update(req, res) {
        const { name, model } = req.body;

        const vehicleId = req.params.id;

        const VehicleExists = await Vehicle.findOne({where:{'name': name}});
        
        if(VehicleExists) return res.status(409).json({message: "Vehicle Already exists"});

        let vehicle = await Vehicle.findOne({ where: { 'id': vehicleId } });
        if (!vehicle) return res.status(404).json({ error: "Vehicle not found" });

        try {
            vehicle = await vehicle.update({
                name: name,
                model: model,
            });
            return res.status(201).json({ message: "Vehicle updated with success" });
        } catch (error) {
            return res.status(400).json({ error: "Update failed" });
        }
    
    },

    async delete(req, res) {
        const vehicleId = req.params.id;

        let vehicle = await Vehicle.findOne({ where: { 'id': vehicleId } });

        if (!vehicle) {
            return res.status(404).json({ error: "Vehicle not found" });
        }
        try {
            vehicle = await vehicle.destroy()
            return res.status(200).json({ message: "Vehicle deleted with success" });
        } catch (error) {
            return res.status(400).json({ error: "Deletion failed" });
        }
    }
}