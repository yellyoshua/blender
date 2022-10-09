import {CustomError} from '../utils';

const {__t} = globalThis;

export function UserNotFoundException () {
  return new CustomError(__t('exceptions.user.not_found'));
}

export function SessionNotFoundException () {
  return new CustomError(__t('exceptions.session.not_found'));
}

export function InvalidTokenException () {
  return new CustomError(__t('exceptions.auth.invalid_token'));
}

export function NoTokenProvidedException () {
  return new CustomError(__t('exceptions.auth.no_token_provided'));
}