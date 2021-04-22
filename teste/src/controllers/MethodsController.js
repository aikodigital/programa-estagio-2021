const BusLine = require('../models/BusLineModel');
const { Op } = require('sequelize');
const BusStop = require('../models/BusStopModel');

module.exports  = {
    async vehiclesPerLine(req,res){
        const {line_id} = req.params;

        const line = await BusLine.findByPk(line_id,{
            include: {association: 'vehicles'}
        });

        if(!line)
            return res.status(404).json({error:"Line not found"});
        
        return res.status(200).json(line);
    },

    async linesPerStop(req,res){
        const {stop_id} = req.params;

        const stopExists = await BusStop.findByPk(stop_id);
        if(!stopExists) return res.status(404).json({error: "Stop not found"});

        const lines = await BusLine.findAll({where:{stops: { [Op.contains]: [stop_id] }}});

        return res.status(200).json(lines);
    },

}