import joi from "@hapi/joi";

//register validation
export const registvalid = (datavalidasi) =>{
    const schema = joi.object({
        username:joi.string().required(),
        email:joi.string().email().required(),
        password:joi.string().min(6).required()
    })
    return schema.validate(datavalidasi)
}
//login validation
export const loginvalid = (datalogin) =>{
    const schema = joi.object({
        email:joi.string().email().required(),
        password:joi.string().min(6).required()
    })
    return schema.validate(datalogin)
}