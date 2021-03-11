const SchemaValidator = require('./base_schema_validator');

class BaseModel extends SchemaValidator {
    constructor() {
        super();
    }

    validateModelSchema(payload, schema) {
        return this.validateSchema(payload,schema);
    }
}

module.exports = BaseModel
