import 'package:app/stores/app_tab_navigation/app_tab_navigation_actions.dart';
import 'package:app/stores/app_tab_navigation/app_tab_navigation_state.dart';
import 'package:app/stores/app_tab_navigation/app_tab_navigation_store.dart';

AppTabNavigationState appTabNavigationReducer(
  AppTabNavigationState state,
  dynamic action,
) {
  switch (action.runtimeType) {
    case ChangeAppTabAction:
      return AppTabNavigationState(activeTabIndex: action.newTab);
    case ResetAppTabAction:
      return AppTabNavigationState(activeTabIndex: defaultAppTabActive);
    default:
      return state;
  }
}
