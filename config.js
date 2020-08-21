const config = {
    DB_URL: process.env.DB_URL || 'mongodb+srv://db_user_taller_node:DLFjcVUsPyLQOsHF@cluster0.11ztz.azure.mongodb.net/db_taller_node?retryWrites=true&w=majority',
    PORT: process.env.PORT || 3000,
    HOST: process.env.HOST || 'http://localhost',
    PUBLIC_PATH: process.env.PUBLIC_PATH || '/app'
}

module.exports = config;