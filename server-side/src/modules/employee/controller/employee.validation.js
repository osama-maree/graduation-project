import Joi from "joi";

export const signupValidation = {
  body: Joi.object()
    .required()
    .keys({
      id: Joi.string().min(10).max(10).required(),
      fullName: Joi.string().min(5).max(40).required().messages({
        "any.required": "plz send your name",
        "string.empty": "name is required",
      }),
      email: Joi.string().email().required(),
      password: Joi.string().min(5).max(20).required(),
      address: Joi.string().required(),
      birthDate: Joi.string().required(),
      phoneNumber: Joi.number().required(),
    }),
};

export const updateTransaction = {
  body: Joi.object()
    .required()
    .keys({
      MoveState: Joi.string().min(3).max(15),
      cost: Joi.number(),
      message: Joi.string().required(),
    }),
};

export const createNewsValidation = {
  body: Joi.object().required().keys({
    text: Joi.string().required(),
    forAccount: Joi.string().required(),
  }),
};
