import {CustomError} from '../utils';

export function InvalidCredentialsException () {
  return new CustomError(__t('exceptions.auth.invalid_credentials'));
}

export function UserNotFoundException () {
  return new CustomError(__t('exceptions.user.not_found'));
}

export function ExperimentNotFoundException () {
  return new CustomError(__t('exceptions.experiment.not_found'));
}
