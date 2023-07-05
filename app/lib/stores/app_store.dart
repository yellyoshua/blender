import 'package:app/stores/app_actions.dart';
import 'package:app/stores/app_reducer.dart';
import 'package:app/stores/app_state.dart';
import 'package:app/stores/auth/auth_middleware.dart';
import 'package:app/stores/user/user_middleware.dart';
import 'package:flutter/material.dart';
import 'package:redux/redux.dart';
import 'package:package_info_plus/package_info_plus.dart';

@immutable
class AppStore {
  static final Store<AppState> store = Store<AppState>(
    appReducer,
    initialState: AppState.initial(),
    distinct: true,
    middleware: [
      AuthMiddleware(),
      UserMiddleware(),
    ],
  );

  static Future<void> checkAppInfo() async {
    final appInfo = await PackageInfo.fromPlatform();

    store.dispatch(SetAppInfoAction(
      appInfo.appName,
      appInfo.packageName,
      appInfo.version,
      appInfo.buildNumber,
    ));
  }
}
