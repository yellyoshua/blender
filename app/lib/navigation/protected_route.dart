import 'package:app/components/loading_screen.dart';
import 'package:app/navigation/routes.dart';
import 'package:app/stores/auth/auth_state.dart';
import 'package:flutter/material.dart';
import 'package:flutter_redux/flutter_redux.dart';

class ProtectedRoute extends StatefulWidget {
  final Widget child;
  final bool redirectToProtectedRoute;

  const ProtectedRoute({
    super.key,
    required this.child,
    required this.redirectToProtectedRoute,
  });

  @override
  State<ProtectedRoute> createState() => _ProtectedRouteState();
}

class _ProtectedRouteState extends State<ProtectedRoute> {
  @override
  Widget build(BuildContext context) {
    return StoreConnector<AuthState, AuthState>(
      converter: (store) => store.state,
      onInitialBuild: (state) {
        if (!state.isAuthenticated) {
          Navigator.pushNamed(context, WeblendRoutes.login);
        }
      },
      onWillChange: (_, state) {
        if (state.isAuthenticated) {
          Navigator.pushNamed(context, WeblendRoutes.discover);
        }

        if (!state.isAuthenticated) {
          Navigator.pushNamed(context, WeblendRoutes.login);
        }
      },
      builder: (context, state) {
        if (state.isAuthenticated) {
          return widget.child;
        }

        return const ScreenLoading();
      },
    );
  }
}

class RedirectToProtected extends StatelessWidget {
  final Widget child;
  const RedirectToProtected({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return StoreConnector<AuthState, AuthState>(
      converter: (store) => store.state,
      onInitialBuild: (state) {
        if (state.isAuthenticated) {
          Navigator.pushNamed(context, WeblendRoutes.discover);
        }
      },
      onWillChange: (_, state) {
        if (state.isAuthenticated) {
          Navigator.pushNamed(context, WeblendRoutes.discover);
        }
      },
      builder: (context, state) {
        if (state.isAuthenticated) {
          return const ScreenLoading();
        }

        return child;
      },
    );
  }
}
