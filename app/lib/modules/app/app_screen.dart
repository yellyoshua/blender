import 'package:app/config/colors.dart';
import 'package:app/config/logo.dart';
import 'package:app/modules/discover/discover_screen.dart';
import 'package:app/modules/profile/profile_screen.dart';
import 'package:app/stores/app_tab_navigation/app_tab_navigation_state.dart';
import 'package:app/stores/app_tab_navigation/app_tab_navigation_store.dart';
import 'package:app/stores/auth/auth_store.dart';
import 'package:flutter/material.dart';
import 'package:flutter_redux/flutter_redux.dart';

class AppScreen extends StatelessWidget {
  const AppScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      extendBodyBehindAppBar: true,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        foregroundColor: Colors.transparent,
        title: Container(
          margin: const EdgeInsets.only(
            left: 0,
          ),
          child: const SizedBox(
            width: 120,
            child: WeblendLabel,
          ),
        ),
        elevation: 0,
        actions: [
          InkWell(
            onTap: () {
              AuthStore.logout();
            },
            borderRadius: const BorderRadius.only(
              topLeft: Radius.circular(25),
              bottomLeft: Radius.circular(25),
            ),
            child: Ink(
              padding: const EdgeInsets.only(
                left: 5,
                bottom: 5,
              ),
              decoration: const BoxDecoration(
                borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(25),
                  bottomLeft: Radius.circular(25),
                ),
                color: primaryColor,
              ),
              child: const Padding(
                padding: EdgeInsets.all(10),
                child: Icon(
                  Icons.logout,
                  color: Colors.white,
                ),
              ),
            ),
          ),
        ],
      ),
      primary: true,
      body: SafeArea(
        child: StoreConnector<AppTabNavigationState, int>(
          converter: (store) => store.state.activeTabIndex,
          builder: (_, activeTabIndex) {
            return IndexedStack(
              index: activeTabIndex,
              children: const [
                ProfileScreen(),
                DiscoverScreen(),
                Center(
                  child: Text('Community'),
                ),
                Center(
                  child: Text('Chat'),
                ),
              ],
            );
          },
        ),
      ),
      bottomNavigationBar: StoreConnector<AppTabNavigationState, int>(
          converter: (store) => store.state.activeTabIndex,
          builder: (_, activeTabIndex) {
            return BottomNavigationBar(
              enableFeedback: true,
              currentIndex: activeTabIndex,
              showUnselectedLabels: true,
              showSelectedLabels: true,
              onTap: (index) {
                if (index != activeTabIndex) {
                  AppTabNavigationStore.changeTab(index);
                }
              },
              selectedItemColor: primaryColor,
              unselectedItemColor: Colors.grey,
              elevation: 2,
              items: const [
                BottomNavigationBarItem(
                  icon: Icon(Icons.person, color: Colors.grey),
                  activeIcon: Icon(Icons.person, color: primaryColor),
                  label: 'Profile',
                ),
                BottomNavigationBarItem(
                  icon: Icon(Icons.search, color: Colors.grey),
                  activeIcon: Icon(Icons.search, color: primaryColor),
                  label: 'Discover',
                ),
                BottomNavigationBarItem(
                  icon: Icon(Icons.people, color: Colors.grey),
                  activeIcon: Icon(Icons.people, color: primaryColor),
                  label: 'Community',
                ),
                BottomNavigationBarItem(
                  icon: Icon(Icons.message, color: Colors.grey),
                  activeIcon: Icon(Icons.message, color: primaryColor),
                  label: 'Chat',
                )
              ],
            );
          }),
    );
  }
}
