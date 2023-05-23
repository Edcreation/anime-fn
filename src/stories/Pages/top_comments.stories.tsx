// TopComments.story.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import TopComments from '../../Pages/Home/Front/TopComments';
import { Provider } from 'react-redux';
import store, { persistor } from '../../redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Spinner } from '../../components';

const meta: Meta<typeof TopComments> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Pages/TopComments/Main',
  component: TopComments,
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
type Story = StoryObj<typeof TopComments>;

export const Basic: Story = {};
