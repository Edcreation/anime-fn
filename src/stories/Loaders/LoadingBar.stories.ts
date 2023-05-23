// LoadingBar.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import { LoadingBar } from '../../components/shelf';
//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof LoadingBar> = {
  title: 'Loaders/LoadingBar',
  component: LoadingBar,
  decorators: [withRouter],

};

export default meta;

type Story = StoryObj<typeof LoadingBar>;

export const FirstStory: Story = {};