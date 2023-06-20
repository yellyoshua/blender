import 'package:app/core/crud.dart';

const API_URL = 'https://rickandmortyapi.com/api';

class WeblendServices {
  static final auth = CrudModel(API_URL, 'auth');
  static final users = CrudModel(API_URL, 'users');
  static final characters = CrudModel(API_URL, 'character');
}
