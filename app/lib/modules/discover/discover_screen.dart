import 'package:app/services/user_data_service.dart';
import 'package:flutter/material.dart';

class DiscoverScreen extends StatefulWidget {
  const DiscoverScreen({super.key});

  @override
  State<DiscoverScreen> createState() => _DiscoverScreenState();
}

class _DiscoverScreenState extends State<DiscoverScreen> {
  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return RefreshIndicator(
      onRefresh: () async {
        var userData = await WeblendUserDataService().get({});
        print('userData: $userData');
      },
      child: SingleChildScrollView(
        child: ListView.builder(
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          itemCount: 10,
          itemBuilder: (context, index) {
            return Container(
              height: 100,
              color: Colors.red,
              margin: const EdgeInsets.only(
                top: 10,
                bottom: 10,
              ),
            );
          },
        ),
      ),
    );
  }
}
