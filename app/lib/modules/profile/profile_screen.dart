import 'package:app/config/colors.dart';
import 'package:app/modules/profile/components/UserPhotoAvatar.dart';
import 'package:app/services/user_data_service.dart';
import 'package:app/stores/app_state.dart';
import 'package:app/stores/app_store.dart';
import 'package:app/stores/user/user_actions.dart';
import 'package:app/stores/user/user_state.dart';
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
    return StoreConnector<AppState, UserState>(
      converter: (store) => store.state.userState,
      builder: (_, userState) {
        if (userState.user == null || userState.loading) {
          return const Center(
            child: CircularProgressIndicator(),
          );
        }

        UserData user = userState.user!;

        return RefreshIndicator(
          onRefresh: () async {
            final userData = await WeblendUserDataService().get({});
            final user = transformDynamicUser(userData);
            AppStore.store.dispatch(RefreshUserLoggedAction(user));
          },
          child: ListView(
            physics: const AlwaysScrollableScrollPhysics(),
            shrinkWrap: true,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  UserPhotoAvatar(user: user),
                  Column(
                    children: [
                      _securityButton(user),
                      const SizedBox(height: 10),
                      _settingsButton(user),
                    ],
                  )
                ],
              ),
              const SizedBox(height: 20),
              Text(
                "${user.firstName!} ${user.lastName!}",
                textScaleFactor: 1.0,
                textAlign: TextAlign.center,
                style: const TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(height: 10),
              const Text(
                'IN QUITO, ECUADOR',
                textScaleFactor: 1.0,
                textAlign: TextAlign.center,
                style: TextStyle(
                  color: secondaryColor,
                  fontSize: 14,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ],
          ),
        );
      },
    );
  }

  Widget _securityButton(UserData user) {
    return Ink(
      decoration: const BoxDecoration(
        borderRadius: BorderRadius.all(Radius.circular(5)),
        color: Color.fromRGBO(22, 101, 52, 1),
      ),
      child: InkWell(
        onTap: () => {},
        borderRadius: const BorderRadius.all(Radius.circular(5)),
        child: Container(
          padding: const EdgeInsets.only(
            top: 5,
            bottom: 5,
          ),
          width: 200,
          child: const Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(
                Icons.security,
                color: Colors.white,
                size: 18,
              ),
              SizedBox(
                width: 10,
              ),
              Text(
                'Security',
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

  Widget _settingsButton(UserData user) {
    return Ink(
      decoration: const BoxDecoration(
        borderRadius: BorderRadius.all(Radius.circular(5)),
        color: primaryColor,
      ),
      child: InkWell(
        onTap: () => {},
        borderRadius: const BorderRadius.all(Radius.circular(5)),
        child: Container(
          padding: const EdgeInsets.only(
            top: 5,
            bottom: 5,
          ),
          width: 200,
          child: const Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(
                Icons.settings,
                color: Colors.white,
                size: 18,
              ),
              SizedBox(
                width: 10,
              ),
              Text(
                'Settings',
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
