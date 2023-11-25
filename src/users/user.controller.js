const UserServices = require("./user.service")

/*exports.findAll = async (req, res) => {
    const user = await UserServices.findAll()
    return res.status(200).json({
        user
    })
}

exports.findOne = (req, res) => {
    return res.status(200).json({

    })
}*/

exports.create = async (req, res) => {
    const { name, email, password, role, status } = req.body;
    const user = await UserServices.create({ name, email, password, role, status })

    return res.status(201).json({
        data: user,
    })
}
/*exports.update = (req, res) => {
    return res.status(200).json({

    })
}
exports.deleteUser = (req, res) => {
    return res.status(200).json({

    })
}*/