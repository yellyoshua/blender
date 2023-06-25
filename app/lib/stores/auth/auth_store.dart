import 'package:redux/redux.dart';
import 'package:app/stores/auth/auth_actions.dart';
import 'package:app/stores/auth/auth_reducer.dart';
import 'package:app/stores/auth/auth_state.dart';

class AuthStore {
  static final Store<AuthState> store = Store<AuthState>(
    authReducer,
    initialState: AuthState(
      token: null,
      loading: true,
    ),
  );

  static void login(String username, String password) async {
    store.dispatch(LoginLoadingAction(true));
    await Future.delayed(const Duration(seconds: 3));
    store.dispatch(LoginAction('token'));
  }

  static void logout() {
    store.dispatch(LogoutAction());
  }

  static Future<void> checkAuthentication() async {
    await Future.delayed(const Duration(seconds: 3));
    store.dispatch(LoginAction('token'));
  }
}
