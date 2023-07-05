import 'package:app/stores/user/user_state.dart';
import 'package:flutter/material.dart';

class UserPhotoAvatar extends StatelessWidget {
  final UserData user;
  const UserPhotoAvatar({super.key, required this.user});

  @override
  Widget build(BuildContext context) {
    var profilePicture =
        user.profilePicture != null ? user.profilePicture['url'] : user.picture;

    return CircleAvatar(
      radius: 50,
      backgroundImage: NetworkImage(
        profilePicture!,
      ),
      backgroundColor: Colors.grey[300],
    );
  }
}
