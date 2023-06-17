// Export that object or class with the content Map<String, Widget Function(BuildContext)>

import 'package:app/modules/discover/discover_screen.dart';
import 'package:app/modules/login/login_screen.dart';
import 'package:flutter/material.dart';

class WeblendRoutes {
  WeblendRoutes._();

  static const String discover = '/';
  static const String login = '/login';

  static Map<String, Widget Function(BuildContext)> routes = {
    discover: (context) => const DiscoverScreen(),
    login: (context) => const LoginScreen()
  };
}
