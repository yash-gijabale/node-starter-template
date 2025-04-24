const express = require('express')
const { serverConfig } = require('./config')
const routers = require('./routers')
const app = express()
app.use('/api', routers)

app.listen(serverConfig.PORT, () => {
    console.log(`Server running on port ${serverConfig.PORT}`)
})