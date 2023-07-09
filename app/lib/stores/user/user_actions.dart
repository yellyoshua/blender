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
    profile: transformDynamicUserProfile(userData['profile']),
  );
}

UserProfile transformDynamicUserProfile(Map<String, dynamic>? profile) {
  if (profile == null) {
    return const UserProfile();
  }

  List<ProfileInterest> interests = profile['interests'] != null
      ? List<ProfileInterest>.from(
          profile['interests'].map(
            (interest) => ProfileInterest(
              type: interest['type'],
              name: interest['name'],
            ),
          ),
        )
      : [];

  List<ProfilePersonality> personalities = profile['personalities'] != null
      ? List<ProfilePersonality>.from(
          profile['personalities'].map(
            (personality) => ProfilePersonality(
              name: personality['name'],
            ),
          ),
        )
      : [];

  return UserProfile(
    locationCity: profile['location_city'],
    locationCountry: profile['location_country'],
    birthdate: profile['birthdate'],
    interests: interests,
    personalities: personalities,
  );
}
