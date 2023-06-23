import 'package:app/navigation/routes.dart';
import 'package:app/stores/auth/auth_state.dart';
import 'package:flutter/material.dart';
import 'package:flutter_redux/flutter_redux.dart';

class ProtectedRoute extends StatefulWidget {
  final Widget child;
  const ProtectedRoute({super.key, required this.child});

  @override
  State<ProtectedRoute> createState() => _ProtectedRouteState();
}

class _ProtectedRouteState extends State<ProtectedRoute> {
  bool isAuthenticated() {
    return false;
  }

  void redirectToLogin() {
    Navigator.pushNamed(context, WeblendRoutes.login);
  }

  @override
  void initState() {
    super.initState();

    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (!isAuthenticated()) {
        redirectToLogin();
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return StoreConnector<AuthState, bool>(
      converter: (store) => store.state.isAuthenticated,
      builder: (context, isAuthenticated) {
        if (isAuthenticated) {
          return widget.child;
        }
        // Loading screen
        return widget.child;
      },
    );
  }
}
