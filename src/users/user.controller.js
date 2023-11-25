const UserServices = require("./user.service")

exports.findAll = async (req, res) => {
    const user = await UserServices.findAll()
    return res.status(200).json({
        user
    })
}

exports.findOne = async (req, res) => {
    try {
        const user = await UserServices.findOne(req.params.id);
        if (user === null) return res.status(404).json({ message: `User with Id ${req.params.id} not valid` });
        if (user !== null) return res.status(200).json({ user });
    } catch (error) {
        console.log(error);
    }
}

exports.create = async (req, res) => {
    const { name, email, password, role, status } = req.body;
    const user = await UserServices.create({ name, email, password, role, status })

    return res.status(201).json({
        data: user,
    })
}
exports.update = async (req, res) => {
    try {
        const user = await UserServices.findOne(req.params.id);
        const { name, email } = req.body;
        if (user === null) return res.status(404).json({ message: `User with Id ${req.params.id} not valid` });
        if (user !== null) {
            const userUpdate = await UserServices.update(user, { name, email })
            return res.status(200).json({ userUpdate });
        }
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong!',
            error
        })
    }
}
exports.deleteUser = async (req, res) => {
    try {
        const user = await UserServices.findOne(req.params.id);
        if (user === null) return res.status(404).json({ message: `User with Id ${req.params.id} not valid` });
        if (user !== null) {
            const userDeleted = await UserServices.delete(user)
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