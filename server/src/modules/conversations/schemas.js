import Joi from 'joi';

export const findConversationsSchema = {
  query: {
    conversation: Joi.string()
  }
};
