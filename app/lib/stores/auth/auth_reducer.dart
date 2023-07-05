import 'package:app/stores/auth/auth_state.dart';

import 'auth_actions.dart';

AuthState authReducer(AuthState state, dynamic action) {
  switch (action.runtimeType) {
    case SetTokenAction:
      return AuthState(token: action.token, loading: false);
    case LoginLoadingAction:
      return AuthState(loading: action.loading);
    case LogoutAction:
      return const AuthState(token: null, loading: false, user: null);
    case LoginErrorAction:
      return AuthState(error: action.error, loading: false);
    default:
      return state;
  }
}
