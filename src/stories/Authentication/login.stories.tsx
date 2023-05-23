// Login.story.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Login from '../../Authentication/Login';
import { Provider } from 'react-redux';
import store, { persistor } from '../../redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Spinner } from '../../components';

const meta: Meta<typeof Login> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Authentication/Login/Login_Form',
  component: Login,
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
type Story = StoryObj<typeof Login>;

export const Basic: Story = {};
