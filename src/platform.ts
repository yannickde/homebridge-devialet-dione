import {
  API,
  DynamicPlatformPlugin,
  Logger,
  PlatformConfig,
} from 'homebridge';

import {
  PLUGIN_NAME,
  PLATFORM_NAME,
} from './settings';


export class DevialetDionePlatform implements DynamicPlatformPlugin {

  public readonly log: Logger;

  constructor(
    log: Logger,
    config: PlatformConfig,
    api: API,
  ) {

    this.log = log;

    this.log.info(
      `${PLUGIN_NAME} v${config.version ?? 'dev'} starting`,
    );

    api.on(
      'didFinishLaunching',
      () => {
        this.log.info(
          'Devialet Dione platform initialized',
        );
      },
    );
  }


  configureAccessory(): void {
    // Required by DynamicPlatformPlugin
  }
}
