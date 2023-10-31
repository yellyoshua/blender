import 'package:app/core/crud.dart';
import 'package:app/main.dart';

class WeblendMeService extends CrudModel {
  WeblendMeService() : super(WEBLEND_API_URL, 'me');
}
