import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import QCol from './src/QCol.vue';

/* istanbul ignore next */
QCol.install = (app: App): void => {
  app.component(QCol.name, QCol);
};

export type { QColProps, QColInstance } from './src/types';
export default QCol as SFCWithInstall<App, typeof QCol>;
