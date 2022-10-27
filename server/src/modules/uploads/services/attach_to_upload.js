import usersModel from '../../users/users.model';
import postsModel from '../../posts/posts.model';

export default async function attachToUpload (upload, attached_to) {
  const {location, user} = upload;

  if (location === 'profile_picture') {
    await usersModel.update({_id: attached_to}, {profile_picture: upload._id});
  }

  console.log('location :', location);
  if (location === 'post_picture') {
    const pics = [upload._id];
    const [post] = await postsModel.find({_id: attached_to});
    if (post && post.pics) {
      pics.push(...post.pics);
    }

    if (attached_to) {
      await postsModel.update({_id: attached_to}, {pics, user});
    } else {
      await postsModel.create({user, pics});
    }
  }

  return upload;
}
