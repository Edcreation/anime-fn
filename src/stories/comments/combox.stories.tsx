// ComBox.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import ComBox from '../../Pages/Single/Comments/Combox';

const meta: Meta<typeof ComBox> = {
  title: 'Components/Comments/Comments',
  component: ComBox,

};

export default meta;

type Story = StoryObj<typeof ComBox>;

export const Main: Story = {
  args: {
    user: {
      username: 'Awesome User'
    },
    comment: 'This was a perfect Anime',
    date: new Date(Date.now())
  },
};