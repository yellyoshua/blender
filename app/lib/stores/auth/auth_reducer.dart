import 'package:app/stores/auth/auth_state.dart';

import 'auth_actions.dart';

AuthState authReducer(AuthState state, dynamic action) {
  switch (action.runtimeType) {
    case SetTokenAction:
      return AuthState(token: action.token);
    case LoginUserDataAction:
      final user = _buildUser(action.userData);
      return AuthState(user: user, loading: false, token: action.token);
    case LoginLoadingAction:
      return AuthState(loading: action.loading);
    case LogoutAction:
      return const AuthState(token: null, loading: false, user: null);
    default:
      return state;
  }
}

User _buildUser(Map<String, dynamic> userData) {
  List<String> pendingOnboarding = userData['pending_onboarding'] != null
      ? List<String>.from(userData['pending_onboarding'])
      : [];
  return User(
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
