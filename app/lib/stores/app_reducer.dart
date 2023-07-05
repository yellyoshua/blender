import 'package:app/stores/app_state.dart';
import 'package:app/stores/auth/auth_reducer.dart';
import 'package:app/stores/user/user_reducer.dart';

AppState appReducer(AppState state, dynamic action) {
  return AppState(
    authState: authReducer(state.authState, action),
    userState: userReducer(state.userState, action),
  );
}
