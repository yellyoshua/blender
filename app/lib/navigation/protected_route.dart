import 'package:app/components/loading_screen.dart';
import 'package:app/navigation/routes.dart';
import 'package:app/stores/app_state.dart';
import 'package:app/stores/app_store.dart';
import 'package:app/stores/auth/auth_actions.dart';
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
      primary: false,
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
    return StoreConnector<AppState, AuthState>(
      converter: (store) => store.state.authState,
      onInitialBuild: (state) {
        if (state.loading == true) {
          AppStore.store.dispatch(InitCheckAuthAction());
        }
      },
      onWillChange: (_, state) {
        if (state.loading == false) {
          if (state.token != null) {
            Navigator.pushReplacementNamed(context, WeblendRoutes.discover);
          }
        }
      },
      builder: (context, state) {
        if (state.token != null || state.loading == true) {
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
    return StoreConnector<AppState, AuthState>(
      converter: (store) => store.state.authState,
      onInitialBuild: (state) {
        if (state.loading == true) {
          AppStore.store.dispatch(InitCheckAuthAction());
        }
      },
      onWillChange: (_, state) {
        if (state.loading == false) {
          if (state.token != null) {
            Navigator.pushReplacementNamed(context, WeblendRoutes.discover);
          }

          if (state.token == null) {
            Navigator.pushReplacementNamed(context, WeblendRoutes.login);
          }
        }
      },
      builder: (context, state) {
        if (state.token == null || state.loading == true) {
          return const ScreenLoading();
        }

        return child;
      },
    );
  }
}
