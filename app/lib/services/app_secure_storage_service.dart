// ignore_for_file: unnecessary_null_in_if_null_operators
import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

@immutable
class AppSecureStorage {
  static const _storage = FlutterSecureStorage(
    aOptions: AndroidOptions(
      encryptedSharedPreferences: true,
    ),
  );

  const AppSecureStorage();

  static Future<String?> read(String key) async {
    final data = await _storage.read(key: key);
    return data ?? null;
  }

  static Future<void> write(String key, String value) async {
    await _storage.write(key: key, value: value);
  }

  static Future<void> delete(String key) async {
    await _storage.delete(key: key);
  }

  static Future<void> deleteAll() async {
    await _storage.deleteAll();
  }
}
