import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem',
};
