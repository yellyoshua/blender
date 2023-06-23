import 'package:app/services/api_service.dart';

class AuthService {
  static final WeblendApi _api = WeblendApi();

  static Future<dynamic> login(String email, String password) async {
    final response = await _api.auth.post({
      'email': email,
      'password': password,
    });

    print(response);
  }
}
