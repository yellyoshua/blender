import conversationsController from './conversations.controller';
import {findConversationsSchema} from './schemas';

export default [
  {
    path: '/conversations',
    method: 'get',
    private: true,
    schema: findConversationsSchema,
    handler: conversationsController.find
  }
];
