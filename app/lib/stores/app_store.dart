import 'package:app/stores/app_reducer.dart';
import 'package:app/stores/app_state.dart';
import 'package:app/stores/auth/auth_middleware.dart';
import 'package:flutter/material.dart';
import 'package:redux/redux.dart';

@immutable
class AppStore {
  static final Store<AppState> store = Store<AppState>(
    appReducer,
    initialState: AppState.initial(),
    distinct: true,
    middleware: [AuthMiddleware()],
  );
}
