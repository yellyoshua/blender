import 'package:app/stores/auth/auth_state.dart';

import 'auth_actions.dart';

AuthState authReducer(AuthState state, dynamic action) {
  switch (action.runtimeType) {
    case LoginAction:
      return AuthState(token: action.token, loading: false);
    case LogoutAction:
      return AuthState(token: null);
    case LoginLoadingAction:
      print('LoginLoadingAction: ${action.loading}');
      return AuthState(loading: action.loading);
    default:
      return state;
  }
}

String? performLogin(String username, String password) {
  // Your login logic here
  // Return true if login is successful, otherwise false
  return null;
}
