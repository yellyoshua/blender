import 'package:app/services/auth_service.dart';
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

  static Future<void> login(String accessToken) async {
    try {
      store.dispatch(LoginLoadingAction(true));

      final token = await WeblendAuthGoogleService().post({
        'accessToken': accessToken,
      });

      await Future.delayed(const Duration(seconds: 3));

      store.dispatch(LoginAction(token));
    } catch (e) {
      store.dispatch(LogoutAction());
      rethrow;
    }
  }

  static void logout() {
    store.dispatch(LogoutAction());
  }

  static Future<void> checkAuthentication() async {
    await Future.delayed(const Duration(seconds: 3));
    store.dispatch(LoginAction('token'));
  }
}
