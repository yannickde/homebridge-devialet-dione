import { API } from 'homebridge';
import { DevialetDionePlatform } from './platform';

export default (api: API) => {
  api.registerPlatform(
    'DevialetDione',
    DevialetDionePlatform,
  );
};
