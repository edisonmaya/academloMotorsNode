const app = require('./app');
const { autenticated, syncUp } = require('./config/database/database');
const { envs } = require('./config/enviroments/enviroments')

async function main() {
    try {
        await autenticated()
        await syncUp()
    } catch (error) {
        console.log(error);
    }
}
main()
app.listen(envs.PORT, () => { console.log("Server on running on port:" + envs.PORT) })