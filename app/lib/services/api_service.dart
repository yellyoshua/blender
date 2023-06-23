import 'package:app/core/crud.dart';

const API_URL = 'https://rickandmortyapi.com/api';

class WeblendApi {
  WeblendApi();

  final auth = CrudModel(API_URL, 'auth');
  final users = CrudModel(API_URL, 'users');
  final characters = CrudModel(API_URL, 'character');
}
