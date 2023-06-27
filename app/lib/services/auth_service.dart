import 'package:app/core/crud.dart';
import 'package:app/main.dart';

class WeblendAuthGoogleService extends CrudModel {
  WeblendAuthGoogleService() : super(WEBLEND_API_URL, 'auth/mobile/google');

  Future<String> login(String accessToken) async {
    final response = await post({
      'accessToken': accessToken,
    });

    return response;
  }
}
