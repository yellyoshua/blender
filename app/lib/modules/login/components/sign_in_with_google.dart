import 'package:app/config/colors.dart';
import 'package:app/config/icons.dart';
import 'package:app/stores/app_state.dart';
import 'package:app/stores/app_store.dart';
import 'package:app/stores/auth/auth_actions.dart';
import 'package:app/stores/auth/auth_state.dart';
import 'package:flutter/material.dart';
import 'package:flutter_redux/flutter_redux.dart';
import 'package:google_sign_in/google_sign_in.dart';

GoogleSignIn _googleSignIn = GoogleSignIn(
  scopes: <String>[
    'openid',
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email'
  ],
  clientId:
      '488977322120-lceeoojb40jenatg6p3qfhf5po1k31qg.apps.googleusercontent.com',
);

class SignInWithGoogle extends StatefulWidget {
  const SignInWithGoogle({super.key});

  @override
  State<SignInWithGoogle> createState() => _SignInWithGoogleState();
}

class _SignInWithGoogleState extends State<SignInWithGoogle> {
  void signInWithGoogle(BuildContext context) async {
    try {
      var account = await _googleSignIn.signIn();
      if (account != null) {
        var authentication = await account.authentication;
        var accessToken = authentication.accessToken!;

        AppStore.store.dispatch(InitAuthWithGoogleAction(accessToken));
      }
    } catch (e) {
      print('Error signing in with Google: $e');
      AppStore.store.dispatch(LoginErrorAction(e.toString()));
    }
  }

  @override
  void setState(VoidCallback fn) {
    super.setState(fn);
    _googleSignIn.signInSilently();
  }

  @override
  Widget build(BuildContext context) {
    return StoreConnector<AppState, AuthState>(
      converter: (store) => store.state.authState,
      builder: (context, state) {
        return Ink(
          decoration: const BoxDecoration(
            borderRadius: BorderRadius.all(Radius.circular(25)),
            color: primaryColor,
          ),
          child: InkWell(
            onTap: () => signInWithGoogle(context),
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
      },
    );
  }
}
