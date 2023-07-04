import 'package:app/services/app_secure_storage_service.dart';
import 'package:app/services/auth_service.dart';
import 'package:app/services/user_data_service.dart';
import 'package:app/stores/app_state.dart';
import 'package:app/stores/auth/auth_actions.dart';
import 'package:redux/redux.dart';

class AuthMiddleware extends MiddlewareClass<AppState> {
  AuthMiddleware();

  @override
  dynamic call(
    Store<AppState> store,
    dynamic action,
    NextDispatcher next,
  ) async {
    if (action is InitAuthWithGoogleAction) {
      await performLoginWithGoogle(store, action);
    }

    if (action is InitCheckAuthAction) {
      await checkAuth(store, action);
    }

    next(action);
  }
}

Future<void> checkAuth(
  Store<AppState> store,
  dynamic action,
) async {
  final token = await AppSecureStorage.read('weblend-session-token-user');
  if (token != null) {
    store.dispatch(SetTokenAction(token));
    final userData = await WeblendUserDataService().get({});
    store.dispatch(LoginUserDataAction(userData, token));
  } else {
    store.dispatch(LogoutAction());
  }
}

Future<void> performLoginWithGoogle(
  Store<AppState> store,
  dynamic action,
) async {
  store.dispatch(LoginLoadingAction(true));

  try {
    final token = await WeblendAuthGoogleService().post({
      'accessToken': action.accessToken,
    });

    await AppSecureStorage.write('weblend-session-token-user', token);
    store.dispatch(SetTokenAction(token));
    final userData = await WeblendUserDataService().get({});
    store.dispatch(LoginUserDataAction(userData, token));
  } catch (e) {
    store.dispatch(LoginErrorAction(e.toString()));
  }
}
