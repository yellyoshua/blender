import 'package:app/modules/app/app_screen.dart';
import 'package:app/modules/login/login_screen.dart';
import 'package:app/navigation/protected_route.dart';
import 'package:flutter/material.dart';

class WeblendRoutes {
  WeblendRoutes._();

  static const String discover = '/';
  static const String login = '/login';

  static Map<String, Widget Function(BuildContext)> routes = {
    discover: (context) {
      return const ProtectedRoute(
        child: AppScreen(),
      );
    },
    login: (context) {
      return const ProtectedRoute(
        isPublicProtectedRoute: true,
        child: LoginScreen(),
      );
    },
  };
}
