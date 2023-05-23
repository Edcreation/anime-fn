import { render, screen } from '@testing-library/react';
import SinglePage, { SinglePageHolder } from '../Pages/Single/SinglePage';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import ComBox from '../Pages/Single/Comments/Combox';
import '@testing-library/jest-dom';
import Comments from '../Pages/Single/Comments/Comments';
import * as movieModules from '../hooks/fetchMovies';
import { vi } from 'vitest';
import userEvent  from '@testing-library/user-event'
import React from 'react';


type movie = {
  mal_id: string;
  title: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  synopsis: string
  trailer: {
      url: string
      embed_url: string
  }
  streaming: Streaming[]
  thumb: string;
  type: string;
  status: string;
}

type InitialState = {
  loading: boolean
  movie: movie
  error: string
}

type Streaming = {
  url: string,
  name: string,
}

const RenderWithRouter = ({ children }: { children: React.ReactNode }) => (
  <MemoryRouter initialEntries={['/single/:id']}>
    <Routes>
      <Route path="/single/:id" element={children}></Route>
    </Routes>
  </MemoryRouter>
);

describe('SinglePage Main Function', () => {
  it('Testing Main ', async () => {
    const userF = (id: string): InitialState => {
      const result = {
        loading: false,
        movie: {
          mal_id: id,
          images: {
            jpg: {
              image_url:'https://image.com/image.jpg'
            }
          },
          title: 'Test Title',
          type: 'TV',
          thumb: 'https://image.com/image.jpg',
          status: 'Airing',
          synopsis: 'None',
          trailer: {
            url: 'https://image.com/image.jpg',
            embed_url: 'https://image.com/image.jpg'
          },
          streaming: [{
            name: 'Netflix',
            url: 'https://image.com/image.jpg'
          }]
        },
        error: '',
      }
      return result;
  }
  vi.spyOn(movieModules, 'useSingleMovie').mockReturnValue(userF('1234'));
  render( 
    <Provider store={store}>
      <RenderWithRouter>
          <SinglePage />
      </RenderWithRouter>
    </Provider>);
  const user = userEvent.setup()
  const about = vi.spyOn(user, 'click')
  const expandText = screen.getByTestId('expand')

  await user.click(expandText)
  expect(about).toHaveBeenCalledTimes(1)
  expect(screen.getByText('Test Title')).toBeInTheDocument();
  })

})

describe('SinglePage Holder', () => {
  test('renders Single Page HOLDER with given props', () => {
    const image = 'https://cdn.myanimelist.net/images/anime/1498/134443.jpg'
    const title = 'Title'
    const type = 'TV'
    const synopsis = 'Hello World'
    const trailer = { url: 'Hello', embed_url: 'https://www.youtube.com/embed/vGuQeQsoRgU?enablejsapi=1&wmode=opaque&autoplay=1' }
    const streaming = [ { url: 'http://www.crunchyroll.com/series-273595', name: 'streaming' } ]
    const status = 'Airing'
  
    const { getByText } = render( 
      <BrowserRouter>
        <Provider store={store}>
          <SinglePageHolder 
            image={image} 
            title={title} 
            type={type}  
            synopsis={synopsis}
            trailer={trailer}
            streaming={streaming}
            status={status}
            />
        </Provider>
      </BrowserRouter>
     );
  
    const commentElement = getByText(synopsis);
    expect(commentElement).toBeInTheDocument();
  });
});

describe('Comments', () => {

  test('renders Comment box', () => {
    const comment = 'This is a comment';
    const user = { username: 'JohnDoe' };
    const now = Date.now()
    const date = new Date(now);

    const { getByText } = render(<ComBox comment={comment} user={user} date={date} />);

    const commentElement = getByText(comment);
    const userElement = getByText(user.username);

    expect(commentElement).toBeInTheDocument();
    expect(userElement).toBeInTheDocument();
  });
  test(' Comments All', () => {
    const { getByText } = render(
    <Provider store={store}>
      <Comments />
    </Provider>
    )
    const commentElement = getByText('Discuss');
    expect(commentElement).toBeInTheDocument();
  });
});




