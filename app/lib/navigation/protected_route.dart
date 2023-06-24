import 'package:app/components/loading_screen.dart';
import 'package:app/navigation/routes.dart';
import 'package:app/stores/auth/auth_state.dart';
import 'package:flutter/material.dart';
import 'package:flutter_redux/flutter_redux.dart';

class ProtectedRoute extends StatefulWidget {
  final Widget child;
  final bool isPublicProtectedRoute;

  const ProtectedRoute({
    super.key,
    required this.child,
    this.isPublicProtectedRoute = false,
  });

  @override
  State<ProtectedRoute> createState() => _ProtectedRouteState();
}

class _ProtectedRouteState extends State<ProtectedRoute> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: widget.isPublicProtectedRoute
            ? RedirectToProtected(child: widget.child)
            : RedirectToLogin(child: widget.child),
      ),
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

class RedirectToLogin extends StatelessWidget {
  final Widget child;
  const RedirectToLogin({super.key, required this.child});

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
          return child;
        }

        return const ScreenLoading();
      },
    );
  }
}
