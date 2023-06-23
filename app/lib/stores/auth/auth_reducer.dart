import 'package:app/stores/auth/auth_state.dart';

import 'auth_actions.dart';

// AuthState Function(AuthState, dynamic)

AuthState authReducer(AuthState state, dynamic action) {
  if (action is LoginAction) {
    // Perform login logic and return true if successful
    // Otherwise, return false
    return AuthState(
        isAuthenticated: performLogin(action.username, action.password));
  } else if (action is LogoutAction) {
    // Perform logout logic and return false
    return AuthState(isAuthenticated: false);
  }
  return state;
}

// Example login logic
bool performLogin(String username, String password) {
  // Your login logic here
  // Return true if login is successful, otherwise false
  return true;
}
