import 'package:app/services/app_secure_storage_service.dart';
import 'package:app/services/auth_service.dart';
import 'package:app/stores/app_state.dart';
import 'package:app/stores/auth/auth_actions.dart';
import 'package:firebase_crashlytics/firebase_crashlytics.dart';
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
  } catch (error) {
    await FirebaseCrashlytics.instance.recordError(
      'Error when login with google: $error',
      null,
      fatal: true,
    );
    store.dispatch(LoginErrorAction(error.toString()));
  }
}
