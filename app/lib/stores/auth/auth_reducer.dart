import 'package:app/stores/auth/auth_state.dart';

import 'auth_actions.dart';

AuthState authReducer(AuthState state, dynamic action) {
  if (action is LoginAction) {
    return AuthState(
      isAuthenticated: !state.isAuthenticated,
      token: performLogin(action.username, action.password),
    );
  } else if (action is LogoutAction) {
    return AuthState(isAuthenticated: false, token: null);
  }
  return state;
}

String? performLogin(String username, String password) {
  // Your login logic here
  // Return true if login is successful, otherwise false
  return null;
}
