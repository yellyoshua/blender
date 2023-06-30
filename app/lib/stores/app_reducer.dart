import 'package:app/stores/app_state.dart';
import 'package:app/stores/auth/auth_reducer.dart';

AppState appReducer(AppState state, dynamic action) {
  return AppState(
    authState: authReducer(state.authState, action),
  );
}
