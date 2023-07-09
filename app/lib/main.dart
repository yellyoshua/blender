import 'package:app/navigation/routes.dart';
import 'package:app/stores/app_state.dart';
import 'package:app/stores/app_store.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_redux/flutter_redux.dart';

// TODO: Change this to env variable
const WEBLEND_API_URL = 'http://192.168.100.5:4000/api/';
// TODO: Implement flutter redux persist

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  SystemChrome.setSystemUIOverlayStyle(
    const SystemUiOverlayStyle(
      statusBarColor: Colors.transparent,
      statusBarIconBrightness: Brightness.dark,
      systemNavigationBarColor: Colors.transparent,
      systemNavigationBarIconBrightness: Brightness.dark,
    ),
  );

  await AppStore.checkAppInfo();

  runApp(const MyApp());
}

Widget withProviders({required Widget child}) {
  return StoreProvider<AppState>(
    store: AppStore.store,
    child: child,
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return withProviders(
      child: MaterialApp(
        title: 'Weblend | Blending cultures',
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
          colorScheme: ColorScheme.fromSeed(seedColor: Colors.purpleAccent),
          useMaterial3: true,
        ),
        routes: WeblendRoutes.routes,
        initialRoute: WeblendRoutes.discover,
      ),
    );
  }
}
