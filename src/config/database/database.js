const { Sequelize } = require('sequelize'); //Se importa el ORM
const { envs } = require('../enviroments/enviroments')//se importa las Varibles de entorno

//Se envia la url de la base de datos en la nube y se guarda en una constante
const sequelize = new Sequelize(envs.DB_URI, {
    logging: false //para evitar mostrar consultas innecesarias por consola
});

//autenticacion de la BD
const autenticated = async() => {
    try {
        
        await sequelize.authenticate()//Se usa este metodo proveniente del sequelize para autenticar con la BD
        console.log('Connection has been Established successfully... ');
    } catch (error) {
        console.log(error)
    }
}


//Sincronizacion de la BD
const syncUp = async() => {
    try {
        await sequelize.sync()//Se usa este metodo proveniente del sequelize para sincronizar con la BD
        console.log('Connection has been Synced successfully...');
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    sequelize,
    autenticated,
    syncUp}; 