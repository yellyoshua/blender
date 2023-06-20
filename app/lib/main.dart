import 'package:app/navigation/routes.dart';
import 'package:app/services.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Weblend',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.purpleAccent),
        useMaterial3: true,
      ),
      // home: App(),
      routes: WeblendRoutes.routes,
      initialRoute: WeblendRoutes.login,
    );
  }
}

class App extends StatefulWidget {
  const App({super.key});

  @override
  State<App> createState() => _App();
}

class _App extends State<App> {
  void getCharacters() async {
    print('getCharacters');
    Map<String, dynamic> query = {};

    var response = await WeblendServices.characters.get(query);
    print(response);
  }

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
                Container(
                  decoration: const BoxDecoration(
                    borderRadius: BorderRadius.all(Radius.circular(5)),
                    color: Colors.deepPurple,
                  ),
                  margin: const EdgeInsets.only(
                    left: 40,
                    right: 40,
                    bottom: 10,
                  ),
                  width: 250,
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      IconButton(
                        icon: const Icon(Icons.fast_forward_rounded),
                        color: Colors.white,
                        onPressed: getCharacters,
                      ),
                      TextButton(
                        onPressed: () {},
                        child: const Text(
                          'Get random character',
                          style: TextStyle(
                            color: Colors.white,
                          ),
                        ),
                      ),
                    ],
                  ),
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}
