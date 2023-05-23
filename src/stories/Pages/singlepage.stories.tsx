// SinglePageHolder.story.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import store, { persistor } from '../../redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Spinner } from '../../components';
import { SinglePageHolder } from '../../Pages/Single/SinglePage';

const meta: Meta<typeof SinglePageHolder> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Pages/MoviePage/Main',
  component: SinglePageHolder,
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
type Story = StoryObj<typeof SinglePageHolder>;

export const Basic: Story = {
  args: { 
    image: 'https://cdn.myanimelist.net/images/anime/1498/134443.jpg', 
    title: 'Tokyo Ghoul', 
    type: 'TV', 
    synopsis: `A sinister threat is 
    invading Tokyo: flesh-eating "ghouls" who appear 
    identical to humans and blend into their population. Reserved college student 
    Ken Kaneki buries his nose in books and avoids the news of the growing crisis.
     However, the appearance of an attractive woman named Rize Kamishiro shatters his
      solitude when she forwardly asks him on a date. While walking Rize home, Kaneki 
      discovers she isn't as kind as she first appeared, and she has led him on with 
      sinister intent. After a tragic struggle, he later awakens in a hospital to 
      learn his life was saved by transplanting the now deceased Rize's organs into
       his own body. Kaneki's body begins to change in horrifying ways, and he transforms
        into a human-ghoul hybrid. As he embarks on his new dreadful journey, Kaneki 
        clings to his humanity in the evolving
     bloody conflict between society's new monsters and the government agents who hunt them. `, 
    trailer: { 
      url: "https://www.youtube.com/watch?v=vGuQeQsoRgU", 
      embed_url: "https://www.youtube.com/embed/vGuQeQsoRgU?enablejsapi=1&wmode=opaque&autoplay=1",}, 
    streaming: [
      { name: "Crunchyroll", url: "http://www.crunchyroll.com/series-273595" },
      { name: "Netflix", url: "https://www.netflix.com/title/80065146" }
    ]  
  }
};
