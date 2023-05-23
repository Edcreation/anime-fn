// CommentForm.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import CommentForm from '../../Pages/Single/Comments/CommentForm';
//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof CommentForm> = {
  title: 'Components/Comments/Comment_form',
  component: CommentForm,
  decorators: [withRouter],

};

export default meta;

type Story = StoryObj<typeof CommentForm>;

export const Main: Story = {};