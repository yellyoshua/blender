// Create a Object called crud that reuses the methods from the CRUDModel

import 'dart:convert';
import 'package:app/stores/app_store.dart';
import 'package:app/stores/auth/auth_actions.dart';
import 'package:http/http.dart' as http;

class CrudModel {
  Uri endpoint = Uri.parse('');
  http.Client client = http.Client();

  CrudModel(String url, String path) {
    endpoint = Uri.parse(url + path);
  }

  Future<dynamic> post(Map<dynamic, dynamic> data) async {
    var response = await client.post(
      endpoint,
      body: jsonEncode(data),
      headers: getHeaders(),
    );
    return processResponse(response);
  }

  Future<dynamic> get(Map<String, dynamic> query) async {
    var headers = getHeaders();
    var newEndpoint = endpoint.replace(queryParameters: query);
    var response = await client.get(newEndpoint, headers: headers);
    return processResponse(response);
  }

  Future<dynamic> update(Map<dynamic, dynamic> data) async {
    var headers = getHeaders();
    var response = await client.put(endpoint, body: data, headers: headers);
    return processResponse(response);
  }

  Future<dynamic> delete(Map<String, dynamic> query) async {
    var headers = getHeaders();
    var newEndpoint = endpoint.replace(queryParameters: query);
    var response = await client.delete(newEndpoint, headers: headers);
    return processResponse(response);
  }

  Future<int> count(Map<String, dynamic> query) async {
    var headers = getHeaders();
    var newEndpoint = endpoint.replace(queryParameters: query);
    var response = await client.get(newEndpoint, headers: headers);
    return processResponse(response);
  }
}

Map<String, String> getHeaders() {
  var token = AppStore.store.state.authState.token;

  return {
    'content-type': 'application/json',
    'accept': 'application/json',
    'Authorization': 'Bearer $token',
  };
}

dynamic processResponse(http.Response response) {
  var responseBody = response.body;
  var jsonBody = json.decode(responseBody);

  if (response.statusCode == 401) {
    AppStore.store.dispatch(LogoutAction());
    print('Expired session error: ${jsonBody['errors']}');

    Map<String, dynamic> error = {};
    return error;
  }

  if (response.statusCode == 200) {
    List<dynamic> errorsArray = jsonBody['errors'] ?? [];

    if (errorsArray.isNotEmpty) {
      print('Server Request errors ${jsonBody['errors']}');
    }

    return jsonBody['response'];
  }

  print('Client request errors status (${response.statusCode})');
  return jsonBody['errors'];
}
