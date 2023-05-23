// MovieCard.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import MovieCard from '../Pages/Browse/MovieCard';
//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof MovieCard> = {
  title: 'Components/MovieCard',
  component: MovieCard,
  decorators: [withRouter],

};

export default meta;

type Story = StoryObj<typeof MovieCard>;

export const FirstStory: Story = {
    args: {
        id: 5114,
        image: 'https://cdn.myanimelist.net/images/anime/1208/94745.jpg',
        title: 'Fullmetal Alchemist: Brotherhood',
        status: 'Finished Airing',
        type: 'TV'
    }
};