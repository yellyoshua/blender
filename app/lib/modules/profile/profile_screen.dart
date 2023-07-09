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
            final user = await WeblendUserDataService().get({});
            AppStore.store.dispatch(RefreshUserLoggedAction(user));
          },
          child: ListView(
            physics: const AlwaysScrollableScrollPhysics(),
            scrollDirection: Axis.vertical,
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
              _completeNameLabel(user),
              const SizedBox(height: 10),
              _locationLabel(user.profile),
              const SizedBox(height: 10),
              _itemsSection('Interests', user.profile?.interests ?? []),
              const SizedBox(height: 10),
              _itemsSection('Personalities', user.profile?.personalities ?? []),
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
                'Settingss',
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

  Widget _completeNameLabel(UserData user) {
    return Text(
      "${user.firstName} ${user.lastName}",
      textScaleFactor: 1.0,
      textAlign: TextAlign.center,
      style: const TextStyle(
        fontSize: 20,
        fontWeight: FontWeight.bold,
      ),
    );
  }

  Widget _locationLabel(UserProfile? profile) {
    bool withoutLocation = profile == null ||
        profile.locationCity == null ||
        profile.locationCountry == null;

    if (withoutLocation) {
      return const SizedBox();
    }

    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        const Icon(
          Icons.location_on,
          color: secondaryColor,
          size: 18,
        ),
        const SizedBox(width: 5),
        Text(
          "${profile.locationCity}, ${profile.locationCountry}",
          textScaleFactor: 1.0,
          style: const TextStyle(
            color: secondaryColor,
            fontSize: 14,
            fontWeight: FontWeight.bold,
          ),
        ),
      ],
    );
  }

  Widget _itemsSection(String title, List<dynamic> items) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 10),
      child: Column(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                title,
                textScaleFactor: 1.0,
                style: const TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                ),
              ),
              IconButton(
                onPressed: () => {},
                icon: const Icon(
                  Icons.edit,
                  color: primaryColor,
                  size: 18,
                ),
              )
            ],
          ),
          const SizedBox(height: 10),
          _listItemsBuilder(items),
        ],
      ),
    );
  }

  Widget _listItemsBuilder(List<dynamic> items) {
    return Wrap(
      alignment: WrapAlignment.start,
      children: items.map(
        (item) {
          return Container(
            margin: const EdgeInsets.only(right: 5, top: 5, bottom: 5),
            padding: const EdgeInsets.only(
              top: 5,
              bottom: 5,
              left: 10,
              right: 10,
            ),
            decoration: const BoxDecoration(
              borderRadius: BorderRadius.all(Radius.circular(5)),
              color: primaryColor,
            ),
            child: Text(
              item.name,
              textScaleFactor: 1.0,
              style: const TextStyle(
                color: Colors.white,
                fontSize: 14,
              ),
            ),
          );
        },
      ).toList(),
    );
  }
}
