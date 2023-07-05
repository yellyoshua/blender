import 'package:app/stores/user/user_state.dart';

class InitRefreshUserLoggedAction {}

class RefreshUserLoggedAction {
  final UserData user;

  const RefreshUserLoggedAction(this.user);
}

UserData transformDynamicUser(Map<String, dynamic> userData) {
  List<String> pendingOnboarding = userData['pending_onboarding'] != null
      ? List<String>.from(userData['pending_onboarding'])
      : [];
  return UserData(
    id: userData['_id'],
    firstName: userData['first_name'],
    lastName: userData['last_name'],
    email: userData['email'],
    picture: userData['picture'],
    profilePicture: userData['profile_picture'],
    pendingOnboarding: pendingOnboarding,
    geolocation: userData['geolocation'],
  );
}
