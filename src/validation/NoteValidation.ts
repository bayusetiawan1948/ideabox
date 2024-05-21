import JoiBase from 'joi';
import JoiDate from '@joi/date';
const Joi = JoiBase.extend(JoiDate);

export const noteSchema = Joi.object({
  author: Joi.string().min(3).max(35).required().messages({
    'string.base': 'Nama harus berupa huruf',
    'string.min': 'Masukan author minimal 3 huruf',
    'string.max': 'Masukan author maximal 35 huruf',
    'string.empty': 'Masukan author note',
    'any.required': 'Masukan author note',
  }),
  note: Joi.string().min(5).required().messages({
    'string.base': 'note harus berupa huruf',
    'string.min': 'Masukan note minimal 5 huruf',
    'string.empty': 'Masukan note',
    'any.required': 'Masukan note',
  }),
});
