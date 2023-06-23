import 'package:redux/redux.dart';
import 'package:app/stores/auth/auth_actions.dart';
import 'package:app/stores/auth/auth_reducer.dart';
import 'package:app/stores/auth/auth_state.dart';

class AuthStore {
  final Store<AuthState> store;

  AuthStore()
      : store = Store<AuthState>(
          authReducer,
          initialState: AuthState(isAuthenticated: false),
        );

  void login(String username, String password) {
    store.dispatch(LoginAction(username, password));
  }

  void logout() {
    store.dispatch(LogoutAction());
  }

  bool isAuthenticated() {
    return store.state.isAuthenticated;
  }
}
