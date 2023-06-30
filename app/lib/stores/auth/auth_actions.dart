class SetTokenAction {
  final String? token;

  SetTokenAction(this.token);
}

class LoginUserDataAction {
  final dynamic userData;
  final String token;

  LoginUserDataAction(this.userData, this.token);
}

class LoginWithGoogleAction {
  final String accessToken;
  LoginWithGoogleAction(this.accessToken);
}

class LogoutAction {}

class LoginLoadingAction {
  final bool loading;

  LoginLoadingAction(this.loading);
}

class InitAuthWithGoogleAction {
  final String accessToken;
  InitAuthWithGoogleAction(this.accessToken);
}
