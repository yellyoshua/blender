import 'package:app/services/user_data_service.dart';
import 'package:app/stores/app_state.dart';
import 'package:app/stores/user/user_actions.dart';
import 'package:redux/redux.dart';

class UserMiddleware extends MiddlewareClass<AppState> {
  UserMiddleware();

  @override
  dynamic call(
    Store<AppState> store,
    dynamic action,
    NextDispatcher next,
  ) async {
    if (action is InitRefreshUserLoggedAction) {
      await refreshUserLoggedData(store);
    }

    next(action);
  }
}

Future<void> refreshUserLoggedData(
  Store<AppState> store,
) async {
  final userData = await WeblendUserDataService().get({});
  final user = transformDynamicUser(userData);
  store.dispatch(RefreshUserLoggedAction(user));
}
