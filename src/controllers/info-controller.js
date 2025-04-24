const { StatusCodes } = require('http-status-codes')

const sendInfo = (req, res) => {
    res.status(StatusCodes.OK).json({
        msg: "OK"
    })
}

module.exports = {
    sendInfo
}