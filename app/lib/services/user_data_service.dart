import 'package:app/core/crud.dart';
import 'package:app/main.dart';

class WeblendUserDataService extends CrudModel {
  WeblendUserDataService() : super(WEBLEND_API_URL, 'user_data');
}
