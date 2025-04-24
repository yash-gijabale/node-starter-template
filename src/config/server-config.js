const dotenv = require('dotenv')

dotenv.config()

const serverConfig = {
    PORT: process.env.PORT
}

module.exports = serverConfig