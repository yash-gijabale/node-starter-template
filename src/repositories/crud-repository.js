const { logger } = require("../config/logger-config")

class CrudRepository {

    constructor(model) {
        this.model = model
    }

    async create(data) {
        try {
            let response = await this.model.create(data)
            return response.dataValues
        } catch (error) {
            logger.error({
                label:`Model -> ${this.model.name} -> ./CrudRepo`,
                message:error.parent
            })
            throw new Error(`CrudRepo Create Error: ${error.message}`);
        }
    }

    async getById(id) {
        try {
            let response = await this.model.findByPk(id)
            return response
        } catch (error) {
            console.log(error)
        }
    }

    async getData(where = null, offset = 0, limit = 10) {
        try {
            let response;
            if (where) {
                const { count, rows } = await this.model.findAndCountAll({
                    where: where,
                    offset: offset,
                    limit: limit,
                })
                response = { count, rows }
            } else {
                const { count, rows } = await this.model.findAndCountAll({
                    where: {},
                    offset: offset,
                    limit: limit,
                })
                response = { count, rows }
            }
            return response

        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = CrudRepository;