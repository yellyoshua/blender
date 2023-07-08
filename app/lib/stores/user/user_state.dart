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
  final UserProfile? profile;

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
    this.profile,
  });
}

@immutable
class UserProfile {
  final String? locationCity;
  final String? locationCountry;
  final String? birthdate;
  final List<ProfileInterest> interests;
  final List<ProfilePersonality> personalities;

  const UserProfile({
    this.locationCity,
    this.locationCountry,
    this.birthdate,
    this.interests = const [],
    this.personalities = const [],
  });
}

@immutable
class ProfileInterest {
  final String type;
  final String name;

  const ProfileInterest({
    this.type = '',
    this.name = '',
  });
}

@immutable
class ProfilePersonality {
  final String name;

  const ProfilePersonality({
    this.name = '',
  });
}
