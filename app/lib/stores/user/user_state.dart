import 'package:flutter/material.dart';

@immutable
class UserState {
  final UserData? user;
  final bool loading;

  const UserState({
    this.user,
    this.loading = false,
  });
}

@immutable
class UserData {
  final String? id;
  final String? firstName;
  final String? lastName;
  final String? email;
  final String? picture;
  final dynamic profilePicture;
  final List<String> pendingOnboarding;
  final dynamic geolocation;
  final bool loading;

  const UserData({
    this.id,
    this.firstName,
    this.lastName,
    this.email,
    this.picture,
    this.profilePicture,
    this.pendingOnboarding = const [],
    this.geolocation,
    this.loading = false,
  });
}
