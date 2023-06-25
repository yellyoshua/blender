import 'package:app/stores/auth/auth_store.dart';
import 'package:flutter/material.dart';

class DiscoverScreen extends StatelessWidget {
  const DiscoverScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(
        top: 30,
        bottom: 20,
      ),
      child: Center(
        child: TextButton(
          onPressed: () {
            AuthStore.logout();
          },
          child: const Text('Discover'),
        ),
      ),
    );
  }
}
