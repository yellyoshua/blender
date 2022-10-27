import usersModel from '../../users/users.model';

export default async function attachToUpload (upload) {
  const {location, attached_to} = upload;

  if (location === 'profile_picture') {
    await usersModel.update({_id: attached_to}, {profile_picture: upload._id});
  }

  return upload;
}
