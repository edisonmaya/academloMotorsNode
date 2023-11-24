require('dotenv').config(); //sirve para usar las varibles de entorno
const env = require('env-var'); //sirve para validar las varibles de entorno

exports.envs = {
    PORT: env.get('PORT').required().asPortNumber(),
    DB_URI: env.get('DB_URI').required().asString(),
}


