// Create a Object called crud that reuses the methods from the CRUDModel

import 'dart:convert';
import 'package:app/stores/app_store.dart';
import 'package:app/stores/auth/auth_actions.dart';
import 'package:firebase_crashlytics/firebase_crashlytics.dart';
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
    final total = await processResponse(response);
    return total;
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

Future<dynamic> processResponse(http.Response response) async {
  var responseBody = response.body;
  var jsonBody = json.decode(responseBody);

  if (response.statusCode == 401) {
    AppStore.store.dispatch(LogoutAction());

    await FirebaseCrashlytics.instance.recordError(
      'Expired session error: ${jsonBody['errors']}',
      null,
      fatal: true,
    );

    Map<String, dynamic> error = {};
    return error;
  }

  if (response.statusCode == 200) {
    List<dynamic> errorsArray = jsonBody['errors'] ?? [];

    if (errorsArray.isNotEmpty) {
      await FirebaseCrashlytics.instance.recordError(
        'Server Request errors ${jsonBody['errors']}',
        null,
        fatal: true,
      );
    }

    return jsonBody['response'];
  }

  await FirebaseCrashlytics.instance.recordError(
    'Client request errors status (${response.statusCode})',
    null,
    fatal: true,
  );
  return jsonBody['errors'];
}
