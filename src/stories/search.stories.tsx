// Search.story.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Search from '../components/Search';
import { Provider } from 'react-redux';
import store, { persistor } from '../redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Spinner } from '../components';

const meta: Meta<typeof Search> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Main_Components/Search',
  component: Search,
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
type Story = StoryObj<typeof Search>;

export const Basic: Story = {};
