import 'package:app/config/colors.dart';
import 'package:app/config/icons.dart';
import 'package:flutter/material.dart';
import 'package:google_sign_in/google_sign_in.dart';

// TODO: Implement Google Sign In
// https://pub.dev/packages/google_sign_in

GoogleSignIn _googleSignIn = GoogleSignIn(
  scopes: <String>[
    'openid',
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email'
  ],
);

class SignInWithGoogle extends StatefulWidget {
  const SignInWithGoogle({super.key});

  @override
  State<SignInWithGoogle> createState() => _SignInWithGoogleState();
}

class _SignInWithGoogleState extends State<SignInWithGoogle> {
  void signInWithGoogle() async {
    var account = await _googleSignIn.signIn();
    bool isAuthorized = account != null;
    if (isAuthorized) {
      print(account.email ?? 'no email provided');
    } else {
      print('not authorized');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Ink(
      decoration: const BoxDecoration(
        borderRadius: BorderRadius.all(Radius.circular(25)),
        color: primaryColor,
      ),
      child: InkWell(
        onTap: () {
          print('Sign up with email');
          signInWithGoogle();
        },
        borderRadius: const BorderRadius.all(Radius.circular(25)),
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
    );
  }
}
