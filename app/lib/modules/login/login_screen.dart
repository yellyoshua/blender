import 'package:app/config/colors.dart';
import 'package:app/config/icons.dart';
import 'package:app/config/logo.dart';
import 'package:flutter/material.dart';

// TODO: Implement Google Sign In
// https://pub.dev/packages/google_sign_in
class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreen();
}

class _LoginScreen extends State<LoginScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Padding(
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
                    Ink(
                      decoration: const BoxDecoration(
                        borderRadius: BorderRadius.all(Radius.circular(25)),
                        color: primaryColor,
                      ),
                      child: InkWell(
                        onTap: () {
                          print('Sign up with email');
                        },
                        borderRadius:
                            const BorderRadius.all(Radius.circular(25)),
                        child: Container(
                          padding: const EdgeInsets.only(
                            top: 10,
                            bottom: 10,
                          ),
                          width: 250,
                          child: const Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              GoogleIcon,
                              SizedBox(
                                width: 10,
                              ),
                              Text(
                                'Continue with Google',
                                textScaleFactor: 1.0,
                                style: TextStyle(
                                  color: Colors.white,
                                  fontSize: 18,
                                ),
                              )
                            ],
                          ),
                        ),
                      ),
                    ),
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
