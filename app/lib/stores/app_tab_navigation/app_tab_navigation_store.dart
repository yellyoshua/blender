import 'package:app/stores/app_tab_navigation/app_tab_navigation_actions.dart';
import 'package:app/stores/app_tab_navigation/app_tab_navigation_reducer.dart';
import 'package:app/stores/app_tab_navigation/app_tab_navigation_state.dart';
import 'package:redux/redux.dart';

const defaultAppTabActive = 0;

class AppTabNavigationStore {
  static final Store<AppTabNavigationState> store =
      Store<AppTabNavigationState>(
    appTabNavigationReducer,
    initialState: AppTabNavigationState(
      activeTabIndex: defaultAppTabActive,
    ),
  );

  static void changeTab(int tab) {
    store.dispatch(ChangeAppTabAction(tab));
  }

  static void resetTab() {
    store.dispatch(ResetAppTabAction());
  }
}
