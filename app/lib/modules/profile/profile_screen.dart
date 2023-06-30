import 'package:app/stores/app_state.dart';
import 'package:app/stores/auth/auth_state.dart';
import 'package:flutter/material.dart';
import 'package:flutter_redux/flutter_redux.dart';

class ProfileScreen extends StatefulWidget {
  const ProfileScreen({super.key});

  @override
  State<ProfileScreen> createState() => _ProfileScreenState();
}

class _ProfileScreenState extends State<ProfileScreen> {
  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return RefreshIndicator(
      onRefresh: () async {
        await Future.delayed(const Duration(seconds: 1));
      },
      child: SingleChildScrollView(
        child: ListView(
          // physics: const NeverScrollableScrollPhysics(),
          shrinkWrap: true,
          children: [
            StoreConnector<AppState, AuthState>(
              converter: (store) => store.state.authState,
              builder: (_, state) {
                if (state.user != null) {
                  return Text(
                    'Logged user: ${state.user!.firstName} ${state.user!.lastName} ${state.user!.email}',
                  );
                }

                return Text('Profile Screen');
              },
            )
          ],
        ),
      ),
    );
  }
}
