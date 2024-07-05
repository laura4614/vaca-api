import Joi from 'joi';

const schema = Joi.object({
  groupId: Joi.number().min(1).required(),
  usersId: Joi.array().items(Joi.number()).required(),
});

export default schema;
 