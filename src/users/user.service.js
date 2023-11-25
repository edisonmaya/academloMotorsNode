//Los Servicios son los que interactuan directamente con las peticiones de las bases de datos
//luego estos servicios son llamados en los controladores
//los metodos estaticos son aquellos que se pueden llamar sin instanciar la clase
//El servicio interactua con el modelo

const UserModel = require('./user.model')

class UserServices {

   /* static async findAll(){ 
        return await UserModel.findAll()//La magia del findAll proviene del sequelize
    }
    static async finOne (){
        return await UserModel.finOne({
                where:{
                    status:'available'
                }
        })
    }*/
    static async create(data){
        return await UserModel.create(data) //La magia del create proviene del sequelize
    }
}
module.exports = UserServices;