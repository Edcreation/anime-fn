import { render } from "@testing-library/react";
import Handler from "../Pages/Browse/Handler";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import { vi } from "vitest";
import * as hooksModule from "../hooks/fetchMovies";
import GenreBrowser from "../Pages/Browse/GenreBrowser";
import { Provider } from "react-redux";
import store from "../redux/store";
import Receiver from "../Pages/Browse/SearchBrowser";
import Section from "../Pages/Browse/HomeBrowser";
import Browse from "../Pages/Browse/Browse";

type movie = {
    mal_id: number;
    title: string;
    images: {
      jpg: {
        image_url: string;
      };
    };
    thumb: string;
    type: string;
    status: string;
}

type InitialState = {
    loading: boolean
    movies: movie[]
    error: string
}

describe('Testing Handler', () => {
    it('Render handler', () => {
        const movieState: InitialState = {
            loading: false,
            movies: [
                {
                    mal_id: 1223,
                    title: 'Hello movie',
                    images: {
                        jpg: {
                            image_url: 'https://imgur.com/hrllo.jpg',
                        }
                    },
                    thumb: 'https://imgur.com/hrllo.jpg',
                    type: 'TV',
                    status: 'Airing'
                }
            ],
            error: ''
        }
        const { getByText } = render(
            <BrowserRouter>
                <Handler
                    loading={movieState.loading}
                    error={movieState.error}
                    data={movieState.movies}
                    />          
            </BrowserRouter>
            )
        const titleElement = getByText(movieState.movies[0].title)
        expect(titleElement).toBeInTheDocument();
    })
    it('Render handler with loading', () => {
        const movieState: InitialState = {
            loading: true,
            movies: [
                {
                    mal_id: 1223,
                    title: 'Hello movie',
                    images: {
                        jpg: {
                            image_url: 'https://imgur.com/hrllo.jpg',
                        }
                    },
                    thumb: 'https://imgur.com/hrllo.jpg',
                    type: 'TV',
                    status: 'Airing'
                }
            ],
            error: ''
        }
        const { getByText } = render(
            <BrowserRouter>
                <Handler
                    loading={movieState.loading}
                    error={movieState.error}
                    data={movieState.movies}
                    />          
            </BrowserRouter>
            )
        const titleElement = getByText('Loading...')
        expect(titleElement).toBeInTheDocument();
    })
    it('Render handler with Query', () => {
        const movieState: InitialState = {
            loading: false,
            movies: [],
            error: ''
        }
        const { getByText } = render(
            <BrowserRouter>
                <Handler
                    loading={movieState.loading}
                    error={movieState.error}
                    data={movieState.movies}
                    query="Movie"
                    />          
            </BrowserRouter>
            )
        const titleElement = getByText('No Results Found ☹️')
        expect(titleElement).toBeInTheDocument();
    })
    it('Render handler with Error', () => {
        const movieState: InitialState = {
            loading: false,
            error: 'This Is An Error',
            movies: [],
        }
        const { getByText } = render(
            <BrowserRouter>
                <Handler
                    loading={movieState.loading}
                    error={movieState.error}
                    data={movieState.movies}
                    query="Movie"
                    />          
            </BrowserRouter>
            )
        const titleElement = getByText('Error: This Is An Error')
        expect(titleElement).toBeInTheDocument();
    })
})

describe('Testing Get By Genre ', () => {
    it('Should Render Genre Browser', () => {
        const foo = () => {
            const movieState: InitialState = {
                loading: false,
                movies: [
                    {
                        mal_id: 1223,
                        title: 'Hello movie',
                        images: {
                            jpg: {
                                image_url: 'https://imgur.com/hrllo.jpg',
                            }
                        },
                        thumb: 'https://imgur.com/hrllo.jpg',
                        type: 'TV',
                        status: 'Airing'
                    }
                ],
                error: ''
            }
            return movieState
        }
        render(
        <Provider store={store}>
            <GenreBrowser />
        </Provider>
        );
        vi.spyOn(hooksModule, 'useGenre').mockImplementation(foo)
    })
})

describe('Testing Get By Search ', () => {
    it('Should Render Search Browser', () => {
        const foo = () => {
            const movieState: InitialState = {
                loading: false,
                movies: [
                    {
                        mal_id: 1223,
                        title: 'Hello movie',
                        images: {
                            jpg: {
                                image_url: 'https://imgur.com/hrllo.jpg',
                            }
                        },
                        thumb: 'https://imgur.com/hrllo.jpg',
                        type: 'TV',
                        status: 'Airing'
                    }
                ],
                error: ''
            }
            return movieState
        }
        render(
        <Provider store={store}>
            <Receiver />
        </Provider>
        );
        vi.spyOn(hooksModule, 'useSearchMovies').mockImplementation(foo)
    })
})

describe('Testing Get By Top ', () => {
    it('Should Render Browser', () => {
        const foo = () => {
            const movieState: InitialState = {
                loading: false,
                movies: [
                    {
                        mal_id: 1223,
                        title: 'Hello movie',
                        images: {
                            jpg: {
                                image_url: 'https://imgur.com/hrllo.jpg',
                            }
                        },
                        thumb: 'https://imgur.com/hrllo.jpg',
                        type: 'TV',
                        status: 'Airing'
                    }
                ],
                error: ''
            }
            return movieState
        }
        render(
        <Provider store={store}>
            <Section />
        </Provider>
        );
        vi.spyOn(hooksModule, 'useMovies').mockImplementation(foo)
    })
})

describe('Testing Get By Top ', () => {
    it('Should Render Browser', () => {
        const foo = () => {
            const movieState: InitialState = {
                loading: false,
                movies: [
                    {
                        mal_id: 1223,
                        title: 'Hello movie',
                        images: {
                            jpg: {
                                image_url: 'https://imgur.com/hrllo.jpg',
                            }
                        },
                        thumb: 'https://imgur.com/hrllo.jpg',
                        type: 'TV',
                        status: 'Airing'
                    }
                ],
                error: ''
            }
            return movieState
        }
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Section />
                </Provider>          
            </BrowserRouter>
        );
        vi.spyOn(hooksModule, 'useMovies').mockImplementation(foo)
    })
})

describe('Testing Main Browser ', () => {
    it('Should Render Main Browser', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <Browse />
                </Provider>          
            </BrowserRouter>
        );
        const browser = getByTestId('browser')
        expect(browser).toBeInTheDocument()
    })
})