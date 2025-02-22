import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import QRadio from './src/QRadio.vue';

/* istanbul ignore next */
QRadio.install = (app: App): void => {
  app.component(QRadio.name, QRadio);
};

export type { QRadioProps, QRadioInstance } from './src/types';
export default QRadio as SFCWithInstall<App, typeof QRadio>;
