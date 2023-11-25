const RepairServices = require("./repair.service")

exports.findAll = async (req, res) => {
    try {
        const repair = await RepairServices.findAll()
        return res.status(200).json({ repair })
    }
    catch (error) {
        return res.status(500).json({//error de servidor
            status: 'fail',
            message: 'Something went very wrong!',
            error
        })
    }
}

exports.findOne = async (req, res) => {
    try {
        const repair = await RepairServices.findOne(req.params.id);
        if (repair === null) return res.status(404).json({ message: `User with Id ${req.params.id} not valid` });
        if (repair !== null) return res.status(200).json({ repair });
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong!',
            error
        })
    }
}

exports.create = async (req, res) => {
    try {
        const { date, userId } = req.body;
        const repair = await RepairServices.create({ date, userId })
        return res.status(201).json({
            data: repair,
        })
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong!',
            error
        })
    }
}

exports.update = async (req, res) => {
    try {
        const repair = await RepairServices.findOne(req.params.id);
        //const { name, email } = req.body;
        if (repair === null) return res.status(404).json({ message: `User with Id ${req.params.id} not valid` });
        if (repair !== null) {
            const repairUpdate = await RepairServices.update(repair)
            return res.status(200).json({ repairUpdate });
        }
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong!',
            error
        })
    }
}

exports.deleteRepair = async (req, res) => {
    try {
        const repair = await RepairServices.findOne(req.params.id);
        if (repair === null) return res.status(404).json({ message: `User with Id ${req.params.id} not valid` });
        if (repair !== null) {
            await RepairServices.delete(repair)
            return res.status(204).json(null);
        }
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong!',
            error
        })
    }
}