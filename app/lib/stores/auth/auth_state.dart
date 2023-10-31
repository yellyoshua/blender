import 'package:flutter/material.dart';

@immutable
class AuthState {
  final String? token;
  final String? error;
  final bool? loading;
  final User? user;

  const AuthState({
    this.token,
    this.error,
    this.loading = true,
    this.user,
  });
}

@immutable
class User {
  final String? id;
  final String? firstName;
  final String? lastName;
  final String? email;
  final String? picture;
  final dynamic profilePicture;
  final List<String> pendingOnboarding;
  final dynamic geolocation;

  const User({
    this.id,
    this.firstName,
    this.lastName,
    this.email,
    this.picture,
    this.profilePicture,
    this.pendingOnboarding = const [],
    this.geolocation,
  });
}
