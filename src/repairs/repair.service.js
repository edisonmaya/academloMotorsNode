//Los Servicios son los que interactuan directamente con las peticiones de las bases de datos
//luego estos servicios son llamados en los controladores
//los metodos estaticos son aquellos que se pueden llamar sin instanciar la clase
//El servicio interactua con el modelo

const { where } = require('sequelize')
const RepairModel = require('./repair.model')

class RepairServices {

    static async findAll() {
        return await RepairModel.findAll(//La magia del findAll proviene del sequelize
            {
                where: {
                    status: 'pending',
                }
            })
    }

    static async findOne(id) {
        return await RepairModel.findOne({
            where: {
                status: 'pending',
                id,
            }
        })
    }

    static async create(data) {
        return await RepairModel.create(data) //La magia del create proviene del sequelize
    }

    static async update(repair) {
        return await repair.update({ status: 'completed' })
    }

    static async delete(repair) {
        return await repair.update({ status: 'cancelled' })
    }
}
module.exports = RepairServices;