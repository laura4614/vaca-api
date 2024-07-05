import Joi from 'joi';

const schema = Joi.object({
  name: Joi.string().trim().min(1).max(30).required(),

  color: Joi.string()
    .trim()
    .min(4)
    .max(7)
    .pattern(new RegExp('^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$'))
    .required(),
});

export default schema;
