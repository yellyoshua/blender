class LoginAction {
  final String? token;

  LoginAction(this.token);
}

class LogoutAction {}

class LoginLoadingAction {
  final bool loading;

  LoginLoadingAction(this.loading);
}
