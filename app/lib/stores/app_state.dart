import 'package:app/stores/auth/auth_state.dart';
import 'package:app/stores/user/user_state.dart';
import 'package:flutter/material.dart';

@immutable
class AppState {
  const AppState({
    required this.authState,
    required this.userState,
  });

  final AuthState authState;
  final UserState userState;

  factory AppState.initial() {
    return const AppState(
      authState: AuthState(),
      userState: UserState(
        loading: true,
      ),
    );
  }

  AppState copyWith({
    AuthState? authState,
    UserState? userState,
  }) {
    return AppState(
      authState: authState ?? this.authState,
      userState: userState ?? this.userState,
    );
  }
}
