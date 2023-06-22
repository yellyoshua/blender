import 'package:app/config/colors.dart';
import 'package:app/config/logo.dart';
import 'package:app/modules/login/components/sign_in_with_google.dart';
import 'package:flutter/material.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreen();
}

class _LoginScreen extends State<LoginScreen> {
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
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                SizedBox(
                  height: 20,
                ),
                SizedBox(
                  width: 200,
                  child: WeblendLogo96x96,
                ),
                SizedBox(
                  width: 160,
                  height: 60,
                  child: WeblendLabel,
                ),
                Text(
                  'Blending cultures',
                  textScaleFactor: 1.0,
                  style: TextStyle(
                    fontSize: 14,
                    fontWeight: FontWeight.bold,
                    color: primaryColor,
                  ),
                ),
                Spacer(),
                Column(
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
                Spacer(),
                Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: <Widget>[
                    SignInWithGoogle(),
                    SizedBox(
                      height: 20,
                    ),
                    SizedBox(
                      width: 350,
                      child: Text(
                        'By signing up, you agree to our Terms. See how we use your data in our Privacy Policy. We never post to Facebook, Twitter or Google.',
                        textAlign: TextAlign.center,
                        textScaleFactor: 1.0,
                        style: TextStyle(letterSpacing: 0.1),
                      ),
                    )
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
