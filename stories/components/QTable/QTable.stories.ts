import type { Meta } from '@storybook/vue3';

import QTable from '@/qComponents/QTable';

import Default from './Default';
import CustomWidth from './CustomWidth';
import Selectable from './Selectable';
import Total from './Total';
import StickyColumn from './StickyColumn';
import CustomRows from './CustomRows';
import Groups from './Groups';
import Draggable from './Draggable';

const storyMetadata: Meta = {
  title: 'Components/QTable',
  component: QTable,
  decorators: [
    (): Record<'template', string> => ({
      template:
        '<div style="width: 100vw;margin-left:-1rem;margin-right:-1rem;"><story /></div>'
    })
  ]
};

export {
  Default,
  CustomWidth,
  Selectable,
  Total,
  StickyColumn,
  CustomRows,
  Groups,
  Draggable
};
export default storyMetadata;
