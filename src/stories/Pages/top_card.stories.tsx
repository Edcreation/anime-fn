// Card.story.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '../../Pages/Home/Front/TopComments';
import { Provider } from 'react-redux';
import store, { persistor } from '../../redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Spinner } from '../../components';

const meta: Meta<typeof Card> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Top_Comments/Cards',
  component: Card,
  decorators: [
    (StoryComponent) => (
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading={<Spinner />} persistor={persistor}>
            <StoryComponent />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    ),
  ]
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  args: {
    ani_id: '5114',
    user: {
      username: 'Awesome User'
    },
    comment: 'This was a perfect Anime',
    date: new Date(Date.now())
  },
};
