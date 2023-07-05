import 'package:app/config/colors.dart';
import 'package:app/config/logo.dart';
import 'package:app/modules/login/components/sign_in_with_google.dart';
import 'package:app/stores/app_state.dart';
import 'package:flutter/material.dart';
import 'package:flutter_redux/flutter_redux.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreen();
}

class _LoginScreen extends State<LoginScreen> {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(
        top: 30,
        bottom: 20,
      ),
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: <Widget>[
            const SizedBox(
              height: 20,
            ),
            const SizedBox(
              width: 200,
              child: WeblendLogo96x96,
            ),
            const SizedBox(
              width: 160,
              height: 60,
              child: WeblendLabel,
            ),
            const Text(
              'Blending cultures',
              textScaleFactor: 1.0,
              style: TextStyle(
                fontSize: 14,
                fontWeight: FontWeight.bold,
                color: primaryColor,
              ),
            ),
            const Spacer(),
            const Column(
              children: [
                Text(
                  'Welcome!',
                  textScaleFactor: 1.0,
                  style: TextStyle(
                    fontSize: 25,
                    fontWeight: FontWeight.bold,
                    color: primaryColor,
                  ),
                ),
                Text(
                  'How do you want to get started?',
                  textScaleFactor: 1.0,
                  style: TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                    color: primaryColor,
                  ),
                )
              ],
            ),
            const Spacer(),
            Column(
              mainAxisAlignment: MainAxisAlignment.start,
              children: <Widget>[
                const SignInWithGoogle(),
                const SizedBox(
                  height: 20,
                ),
                const SizedBox(
                  width: 350,
                  child: Text(
                    'By signing up, you agree to our Terms. See how we use your data in our Privacy Policy. We never post to Facebook, Twitter or Google.',
                    textAlign: TextAlign.center,
                    textScaleFactor: 1.0,
                    style: TextStyle(letterSpacing: 0.1),
                  ),
                ),
                StoreConnector<AppState, AppState>(
                  converter: (store) => store.state,
                  builder: (_, state) {
                    return Text(
                      "Version ${state.version} (${state.buildNumber})",
                      textScaleFactor: 1.0,
                      style: const TextStyle(
                        fontSize: 9,
                        fontWeight: FontWeight.bold,
                        color: primaryColor,
                      ),
                    );
                  },
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
