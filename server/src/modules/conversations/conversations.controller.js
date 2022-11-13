import conversationsModel from './conversations.model';

export default {
  find (filter, options, req) {
    const emisor = req.auth_payload.user_id;
    const conversation = filter.conversation;

    const find_options = {
      populate: 'participants participants.profile_picture',
      select: 'participants.first_name participants.last_name participants.picture participants.profile_picture participants.is_active'
    };

    if (!conversation) {
      return conversationsModel.find({participants: emisor}, find_options);
    }

    return conversationsModel.find({participants: emisor, _id: conversation}, find_options);
  }
};
