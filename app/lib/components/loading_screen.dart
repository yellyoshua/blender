import 'package:flutter/material.dart';

class ScreenLoading extends StatelessWidget {
  const ScreenLoading({super.key});

  @override
  Widget build(BuildContext context) {
    // Loading screen with timeout and redirect to login
    return const SafeArea(
      child: Scaffold(
        body: Center(
          child: AnimatedSwitcher(
            duration: Duration(milliseconds: 500),
            child: CircularProgressIndicator(),
          ),
        ),
      ),
    );
  }
}
