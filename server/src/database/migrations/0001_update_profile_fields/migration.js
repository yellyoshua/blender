
/* eslint-disable */
// Migration: users_update
import models from '../../../modules/models.js';

export default {
  async up () {
    const profiles = await models.profiles.find({$or: [
      {birthday: {$exists: true}},
      {'tutorial.done_birthday': {$exists: true}}
    ]}, {select: 'birthday tutorial'});

    for (const profile of profiles) {
      if (profile.birthday) {
        profile.birthdate = profile.birthday;
        profile.tutorial = profile.tutorial || {};
        profile.tutorial.done_birthdate = true;
        delete profile.birthday;
      }

      if (profile.tutorial && profile.tutorial.done_birthday) {
        profile.tutorial.done_birthdate = profile.tutorial.done_birthday;
        delete profile.tutorial.done_birthday;
      }

      await models.profiles.update({_id: profile._id}, profile);
    }
  }
};
