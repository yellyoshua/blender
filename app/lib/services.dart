import 'package:app/core/crud.dart';

const API_URL = 'https://rickandmortyapi.com/api';

class WeblendServices {
  static final auth = CrudModel(url: API_URL, endpoint: 'auth');
  static final users = CrudModel(url: API_URL, endpoint: 'users');
  static final characters = CrudModel(url: API_URL, endpoint: 'character');
}
