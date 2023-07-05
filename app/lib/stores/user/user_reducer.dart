import 'package:app/stores/auth/auth_actions.dart';
import 'package:app/stores/user/user_state.dart';
import 'user_actions.dart';

UserState userReducer(UserState state, dynamic action) {
  switch (action.runtimeType) {
    case RefreshUserLoggedAction:
      return UserState(loading: false, user: action.user);
    case LogoutAction:
      return const UserState(loading: true, user: null);
    default:
      return state;
  }
}
