import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import Home from "../Pages/Home/Home"
import store from "../redux/store"
import '@testing-library/jest-dom';
import TopComments from "../Pages/Home/Front/TopComments";
import * as hooksModule from '../hooks/comments';
import { vi } from "vitest";
import { BrowserRouter } from "react-router-dom";

type InitialState = {
    loading: boolean
    data: COMMENT[]
    error: string
}

type COMMENT = {
    _id: string
    ani_id: string
    user: { username: string }
    comment: string
    date: Date
}

describe('Testing Home', () => {
    it('Render Home component', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <Home/>
            </Provider>
        )
        const home = getByTestId('home');
        expect(home).toBeInTheDocument()
    })
})

describe('Testing Top Comments', () => {
    it('Render Top Comments component', () => {
        const { getByText } = render(
            <Provider store={store}>
                <TopComments />
            </Provider>
        )
        const top = getByText('Top Discussions');
        expect(top).toBeInTheDocument()
    })
})

describe('Testing Top Comments', () => {
    it('Render Top Comments component', () => {
        const foo = () => {
            const comments: InitialState = {
                loading: false,
                data: [{
                        _id: '1223',
                        ani_id: '2134',
                        user: {
                            username: 'testing'
                        },
                        comment: 'hello world',
                        date: new Date(),
                    }
                ],
                error: ''
            }
            return comments
        }
        vi.spyOn(hooksModule, 'useTopComments').mockImplementation(foo)
        const { getByText } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <TopComments />
                </Provider>
            </BrowserRouter>
        )
        const com = getByText('testing')
        expect(com).toBeInTheDocument()
    })
    it('Render Top Comments component', () => {
        const foo = () => {
            const comments: InitialState = {
                loading: false,
                error: 'This Is An Error',
                data: [{
                        _id: '1223',
                        ani_id: '2134',
                        user: {
                            username: 'testing'
                        },
                        comment: 'hello world',
                        date: new Date(),
                    }
                ],
            }
            return comments
        }
        vi.spyOn(hooksModule, 'useTopComments').mockImplementation(foo)
        const { getByText } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <TopComments />
                </Provider>
            </BrowserRouter>
        )
        const com = getByText('This Is An Error')
        expect(com).toBeInTheDocument()
    })
})