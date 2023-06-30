import 'package:app/stores/auth/auth_state.dart';
import 'package:flutter/material.dart';

@immutable
class AppState {
  const AppState({
    required this.authState,
  });

  final AuthState authState;

  factory AppState.initial() {
    return const AppState(
      authState: AuthState(),
    );
  }

  AppState copyWith({
    AuthState? authState,
  }) {
    return AppState(
      authState: authState ?? this.authState,
    );
  }
}
