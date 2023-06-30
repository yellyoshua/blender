import 'package:app/stores/app_reducer.dart';
import 'package:app/stores/app_state.dart';
import 'package:app/stores/auth/auth_actions.dart';
import 'package:app/stores/auth/auth_middleware.dart';
import 'package:redux/redux.dart';

class AppStore {
  static final Store<AppState> store = Store<AppState>(
    appReducer,
    initialState: AppState.initial(),
    distinct: true,
    middleware: [AuthMiddleware()],
  );

  static Future<void> checkAuthentication() async {
    await Future.delayed(const Duration(seconds: 3));
    print('checkAuthentication');
    store.dispatch(LogoutAction());
  }
}
