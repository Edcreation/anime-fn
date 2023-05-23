// Navbar.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import '../index.css'; 

import { Navbar } from '../components';
//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Navbar> = {
  title: 'Components/Main_Components/Navbar',
  component: Navbar,
  decorators: [withRouter],
  
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const FirstStory: Story = {
    
};