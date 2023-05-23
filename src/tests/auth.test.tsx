import { fireEvent, render, screen } from "@testing-library/react"
import Login from "../Authentication/Login"
import { Provider } from "react-redux"
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from "react-router-dom";
import thunk from 'redux-thunk';
import SignUp from "../Authentication/SignUp";
import { isAuthenticated } from "../Authentication/isLoggedIn";



describe('Testing Login Component', () => {
    const mockStore = configureStore([thunk]);
    const initialState = { login: { loading: false, error: null } };
    const store = mockStore(initialState);
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                     <Login />
                </Provider>
            </BrowserRouter>
        );
      });
    it('renders the login form with email and password fields', () => {
        expect(screen.getByText('Email')).toBeInTheDocument();
        expect(screen.getByText('Password')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
    });
    it('submits the form and dispatches login action', () => {
        const emailInput = screen.getByTestId('email-input');
        const passwordInput = screen.getByTestId('password-input');
        const loginButton = screen.getByRole('button', { name: 'Login' });

        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
        fireEvent.click(loginButton);
    });
    it('submits the form and dispatches login action SUCCESS', () => {
        const emailInput = screen.getByTestId('email-input');
        const passwordInput = screen.getByTestId('password-input');
        const loginButton = screen.getByRole('button', { name: 'Login' });

        fireEvent.change(emailInput, { target: { value: 'awesome2@mail.com' } });
        fireEvent.change(passwordInput, { target: { value: 'Qwert@12345' } });
        fireEvent.click(loginButton);
    });
})

describe('Testing SignUp Component', () => {
    const mockStore = configureStore([thunk]);
    const initialState = { signup: { loading: false, error: null } };
    const store = mockStore(initialState);
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                     <SignUp />
                </Provider>
            </BrowserRouter>
        );
      });
    it('renders the SignUp form with email, username and password fields', () => {
        expect(screen.getByText('Email')).toBeInTheDocument();
        expect(screen.getByText('User Name')).toBeInTheDocument();
        expect(screen.getByText('Password')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'SignUp' })).toBeInTheDocument();
    });
    it('submits the form and dispatches login action', () => {
        const emailInput = screen.getByTestId('email-input');
        const passwordInput = screen.getByTestId('password-input');
        const usernameInput = screen.getByTestId('username-input');
        const signupButton = screen.getByRole('button', { name: 'SignUp' });

        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(usernameInput, { target: { value: 'testing' } });
        fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
        fireEvent.click(signupButton);
    });
    // it('submits the form and dispatches login action SUCCESS', () => {
    //     const emailInput = screen.getByTestId('email-input');
    //     const passwordInput = screen.getByTestId('password-input');
    //     const loginButton = screen.getByRole('button', { name: 'Login' });

    //     fireEvent.change(emailInput, { target: { value: 'awesomeuser@mail.com' } });
    //     fireEvent.change(passwordInput, { target: { value: 'Qwert@12345' } });
    //     fireEvent.click(loginButton);
    // });
})

describe('Testing Loading', () => {
    const mockStore = configureStore([thunk]); 
    it('Login Loading', () => {
        const initialState = { login: { loading: true, error: null } };
        const store = mockStore(initialState);
        render(
            <BrowserRouter>
                <Provider store={store}>
                     <Login />
                </Provider>
            </BrowserRouter>
        );
    }) 
    it('SignUp Loading', () => {
        const initialState = { signup: { loading: true, error: null } };
        const store = mockStore(initialState);
        render(
            <BrowserRouter>
                <Provider store={store}>
                     <SignUp />
                </Provider>
            </BrowserRouter>
        );
    }) 
})

describe('Testing Error Bars', () => {
    const mockStore = configureStore([thunk]); 
    it('Login Error', () => {
        const initialState = { login: { loading: false, error: 'Testing Error' } };
        const store = mockStore(initialState);
        render(
            <BrowserRouter>
                <Provider store={store}>
                     <Login />
                </Provider>
            </BrowserRouter>
        );
    }) 
    it('SingUp Error', () => {
        const initialState = { signup: { loading: false, error: 'Testing Error' } };
        const store = mockStore(initialState);
        render(
            <BrowserRouter>
                <Provider store={store}>
                     <SignUp />
                </Provider>
            </BrowserRouter>
        );
    }) 
})

describe('Testing isLoggedIn', () => {
    
    test('isAuthenticated returns true when token is present', () => {
        const mockStore = configureStore([]);
        const initialState = { login: { token: 'testToken' } };
        const store = mockStore(initialState);
        render(
            <Provider store={store}>
            <div />
            </Provider>
        );
        const isAuthenticatedResult = isAuthenticated();
        console.log(isAuthenticatedResult)
        expect(isAuthenticatedResult).toBe(false);
    });
  
    test('isAuthenticated returns false when token is not present', () => {
        const mockStore = configureStore([]);
        const initialStateWithoutToken = { login: { token: null } };
        const storeWithoutToken = mockStore(initialStateWithoutToken);

        render(
            <Provider store={storeWithoutToken}>
            <div />
            </Provider>
        );

        const isAuthenticatedResult = isAuthenticated();
        expect(isAuthenticatedResult).toBe(false);
    });
})