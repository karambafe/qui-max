import type { Meta, Story } from '@storybook/vue3';
import { defineComponent } from 'vue';

import QContextMenu from '@/qComponents/QContextMenu';
import type { QContextMenuProps } from '@/qComponents/QContextMenu';

const storyMetadata: Meta = {
  title: 'Components/QContextMenu',
  component: QContextMenu,
  argTypes: {
    position: { options: ['left', 'right'], control: { type: 'inline-radio' } }
  }
};

const QContextMenuStory: Story<QContextMenuProps> = args =>
  defineComponent({
    setup() {
      const handleAction = (action: string): void => {
        console.log(action);
      };

      return { args, handleAction };
    },
    template: `
      <div style="width: 304px; height:140px">
        <q-context-menu
          :menu-items="args.menuItems"
          :position="args.position"
          :teleport-to="args.teleportTo"
          @action="handleAction"
        />
      </div>
    `
  });

export const Default = QContextMenuStory.bind({});
Default.args = {
  menuItems: [
    {
      action: 'action1',
      name: 'Menu item 1',
      icon: 'q-icon-account'
    },
    {
      action: 'action2',
      name: 'Menu item 2',
      icon: 'q-icon-bell'
    },
    {
      action: 'action3',
      name: 'Menu item 3',
      icon: 'q-icon-pic'
    }
  ]
};

export default storyMetadata;
