import 'package:app/stores/app_actions.dart';
import 'package:app/stores/app_state.dart';
import 'package:app/stores/auth/auth_reducer.dart';
import 'package:app/stores/user/user_reducer.dart';

AppState appReducer(AppState state, dynamic action) {
  if (action is SetAppInfoAction) {
    return AppState(
      authState: state.authState,
      userState: state.userState,
      appName: action.appName,
      packageName: action.packageName,
      version: action.version,
      buildNumber: action.buildNumber,
    );
  }

  return AppState(
    authState: authReducer(state.authState, action),
    userState: userReducer(state.userState, action),
    appName: state.appName,
    packageName: state.packageName,
    version: state.version,
    buildNumber: state.buildNumber,
  );
}
