const Joi = require("@hapi/joi");

const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required().min(6)
    });
    return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
