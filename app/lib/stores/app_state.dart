import 'package:app/stores/auth/auth_state.dart';
import 'package:app/stores/user/user_state.dart';
import 'package:flutter/material.dart';

@immutable
class AppState {
  const AppState({
    required this.authState,
    required this.userState,
    required this.appName,
    required this.packageName,
    required this.version,
    required this.buildNumber,
  });

  final AuthState authState;
  final UserState userState;
  final String? appName;
  final String? packageName;
  final String? version;
  final String? buildNumber;

  factory AppState.initial() {
    return const AppState(
      authState: AuthState(),
      userState: UserState(
        loading: true,
      ),
      appName: null,
      packageName: null,
      version: null,
      buildNumber: null,
    );
  }

  AppState copyWith({
    AuthState? authState,
    UserState? userState,
  }) {
    return AppState(
      authState: authState ?? this.authState,
      userState: userState ?? this.userState,
      appName: appName,
      packageName: packageName,
      version: version,
      buildNumber: buildNumber,
    );
  }
}
