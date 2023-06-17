import 'package:flutter/material.dart';

class DiscoverScreen extends StatelessWidget {
  const DiscoverScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: SafeArea(
        child: Padding(
          padding: EdgeInsets.only(
            top: 30,
            bottom: 20,
          ),
          child: Center(
            child: Text('Discover Screen'),
          ),
        ),
      ),
    );
  }
}
