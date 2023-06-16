// Create a Object called crud that reuses the methods from the CRUDModel

import 'dart:convert';
import 'dart:io';

class CrudModel {
  final String url;
  final String endpoint;

  CrudModel({required this.url, required this.endpoint});

  Future<dynamic> create(Map<dynamic, dynamic> data) async {
    var request = await _createRequest(this, 'POST');
    request.add(utf8.encode(json.encode(data)));
    return _processRequest(request);
  }

  Future<dynamic> get(Map<dynamic, dynamic> query) async {
    var request = await _createRequest(this, 'GET');
    request.add(utf8.encode(json.encode(query)));
    return _processRequest(request);
  }

  Future<dynamic> update(Map<dynamic, dynamic> data) async {
    var request = await _createRequest(this, 'PUT');
    request.add(utf8.encode(json.encode(data)));
    return _processRequest(request);
  }

  Future<dynamic> delete(Map<dynamic, dynamic> data) async {
    var request = await _createRequest(this, 'DELETE');
    request.add(utf8.encode(json.encode(data)));
    return _processRequest(request);
  }

  Future<int> count(Map<dynamic, dynamic> query) async {
    var request = await _createRequest(this, 'GET');
    request.add(utf8.encode(json.encode(query)));
    var response = await _processRequest(request);
    return int.parse(response);
  }
}

void _setHeaders(HttpClientRequest client) {
  var token = 'token_value';

  client.headers.set('content-type', 'application/json');
  client.headers.set('accept', 'application/json');
  client.headers.set('Authorization', 'Bearer $token');
}

Future<dynamic> _processRequest(HttpClientRequest request) async {
  var response = await request.close();
  var responseBody = await response.transform(utf8.decoder).join();
  var jsonBody = json.decode(responseBody);

  if (response.statusCode == 200) {
    return jsonBody['results'];
  } else {
    throw Exception(jsonBody['message']);
  }
}

Future<HttpClientRequest> _createRequest(
  CrudModel instance,
  String method,
) async {
  String endpoint = instance.endpoint;
  String url = instance.url;

  print("Response: ${'$url/$endpoint'}");
  var request = await HttpClient().openUrl(
    method,
    Uri.parse('$url/$endpoint'),
  );

  print('Setting headers');
  _setHeaders(request);
  print('Headers set');
  return request;
}
