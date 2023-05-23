import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import Handler from '../Pages/Browse/Handler';
//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Handler> = {
  title: 'Components/Handler',
  component: Handler,
  decorators: [withRouter],

};

export default meta;

const data = [
    {
        title: 'Fullmetal Alchemist: Brotherhood',
        mal_id: 5114,
        images: {
            jpg: {
                image_url: 'https://cdn.myanimelist.net/images/anime/1208/94745.jpg'
            }
        },
        type: 'TV',
        thumb: 'https://cdn.myanimelist.net/images/anime/1208/94745.jpg',
        status: 'Finished Airing'
    },
    {
        title: 'Fullmetal Alchemist: Brotherhood',
        mal_id: 5114,
        images: {
            jpg: {
                image_url: 'https://cdn.myanimelist.net/images/anime/1208/94745.jpg'
            }
        },
        type: 'TV',
        thumb: 'https://cdn.myanimelist.net/images/anime/1208/94745.jpg',
        status: 'Finished Airing'
    },
    {
        title: 'Fullmetal Alchemist: Brotherhood',
        mal_id: 5114,
        images: {
            jpg: {
                image_url: 'https://cdn.myanimelist.net/images/anime/1208/94745.jpg'
            }
        },
        type: 'TV',
        thumb: 'https://cdn.myanimelist.net/images/anime/1208/94745.jpg',
        status: 'Finished Airing'
    },
    {
        title: 'Fullmetal Alchemist: Brotherhood',
        mal_id: 5114,
        images: {
            jpg: {
                image_url: 'https://cdn.myanimelist.net/images/anime/1208/94745.jpg'
            }
        },
        type: 'TV',
        thumb: 'https://cdn.myanimelist.net/images/anime/1208/94745.jpg',
        status: 'Finished Airing'
    },
    {
        title: 'Fullmetal Alchemist: Brotherhood',
        mal_id: 5114,
        images: {
            jpg: {
                image_url: 'https://cdn.myanimelist.net/images/anime/1208/94745.jpg'
            }
        },
        type: 'TV',
        thumb: 'https://cdn.myanimelist.net/images/anime/1208/94745.jpg',
        status: 'Finished Airing'
    },
    
]

type Story = StoryObj<typeof Handler>;

export const Small: Story = {
    args: {
        data: data,
    },
};