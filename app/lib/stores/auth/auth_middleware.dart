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
    next(action);
  }
}

Future<void> performLoginWithGoogle(
  Store<AppState> store,
  dynamic action,
) async {
  store.dispatch(LoginLoadingAction(true));

  final token = await WeblendAuthGoogleService().post({
    'accessToken': action.accessToken,
  });

  store.dispatch(SetTokenAction(token));

  final userData = await WeblendUserDataService().get({});
  store.dispatch(LoginUserDataAction(userData, token));
}
