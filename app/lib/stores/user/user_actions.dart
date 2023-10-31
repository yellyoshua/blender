import 'package:app/stores/user/user_state.dart';

class InitRefreshUserLoggedAction {}

class RefreshUserLoggedAction {
  final UserData user;

  const RefreshUserLoggedAction(this.user);
}
