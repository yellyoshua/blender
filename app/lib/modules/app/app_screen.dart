import 'package:app/config/colors.dart';
import 'package:app/config/logo.dart';
import 'package:app/modules/discover/discover_screen.dart';
import 'package:app/modules/profile/profile_screen.dart';
import 'package:app/stores/auth/auth_store.dart';
import 'package:flutter/material.dart';

class AppScreen extends StatefulWidget {
  const AppScreen({super.key});

  @override
  State<AppScreen> createState() => _AppScreenState();
}

class _AppScreenState extends State<AppScreen> {
  int activeTabIndex = 0;

  void changeTab(int index) {
    setState(() {
      activeTabIndex = index;
    });
  }

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
        child: IndexedStack(
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
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        enableFeedback: true,
        currentIndex: activeTabIndex,
        showUnselectedLabels: true,
        showSelectedLabels: true,
        onTap: (index) {
          if (index != activeTabIndex) {
            changeTab(index);
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
      ),
    );
  }
}
