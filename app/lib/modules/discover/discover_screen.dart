import 'package:app/stores/auth/auth_actions.dart';
import 'package:app/stores/auth/auth_state.dart';
import 'package:flutter/material.dart';
import 'package:flutter_redux/flutter_redux.dart';

class DiscoverScreen extends StatelessWidget {
  const DiscoverScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.only(
            top: 30,
            bottom: 20,
          ),
          child: StoreConnector<AuthState, AuthState>(
            converter: (store) => store.state,
            builder: (context, state) {
              return Center(
                child: TextButton(
                  onPressed: () {
                    StoreProvider.of<AuthState>(context).dispatch(
                      LogoutAction(),
                    );
                  },
                  child: const Text('Discover'),
                ),
              );
            },
          ),
        ),
      ),
    );
  }
}
