// Spinner.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Spinner from '../../components/Spinner';
//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Spinner> = {
  title: 'Loaders/Main/Spinner',
  component: Spinner,
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const FirstStory: Story = {};