// Comments.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import Comments from '../../Pages/Single/Comments/Comments';
//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Comments> = {
  title: 'Components/Comments/Main',
  component: Comments,
  decorators: [withRouter],

};

export default meta;

type Story = StoryObj<typeof Comments>;

export const Main: Story = {};