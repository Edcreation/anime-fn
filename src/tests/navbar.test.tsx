import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import userEvent  from '@testing-library/user-event'
import { Navbar } from '../components'
import { vi } from "vitest"
import '@testing-library/jest-dom';
import { NavUserBox } from '../components/shelf'
import * as useTokenModule from '../hooks/auth';

type User = {
    username: string
}

describe('Navbar ', () => {
    it('Click the about router link', async () => {
        render(<Navbar />, {wrapper: BrowserRouter})

        expect(screen.getByText('Anime')).toBeInTheDocument()
        
        const user = userEvent.setup()
        const about = vi.spyOn(user, 'click')
        const aboutLink = screen.getAllByText(/Home/i)

        await user.click(aboutLink[0])

        expect(about).toHaveBeenCalledTimes(1)
    })

    it('Click the logout button', async () => {
        render(<Navbar />, {wrapper: BrowserRouter})

        expect(screen.getByText('Anime')).toBeInTheDocument()
        
        const user = userEvent.setup()
        const about = vi.spyOn(user, 'click')
        const logout = screen.getByTestId('logout')
        await user.click(logout)

        expect(about).toHaveBeenCalledTimes(1)
    })

    it('Click the open Navbar button', async () => {
        render(<Navbar />, {wrapper: BrowserRouter})

        expect(screen.getByText('Anime')).toBeInTheDocument()
        
        const user = userEvent.setup()
        const about = vi.spyOn(user, 'click')
        const open = screen.getByTestId('open-nav')
        await user.click(open)

        expect(about).toHaveBeenCalledTimes(1)
    })

    it('renders the username', () => {
        const userF = (): User => {
            return { username: 'mockUsername' }
        }
        vi.spyOn(useTokenModule, 'useToken').mockImplementation(userF);
        // useToken.mockReturnValue({ username: 'mockUsername' });

        render(<NavUserBox />);
        // Assert the username is rendered
        expect(screen.getByText('mockUsername')).toBeInTheDocument();
    });

    it('Click the logout button', async () => {
        render(<NavUserBox />, {wrapper: BrowserRouter})

        const user = userEvent.setup()
        const about = vi.spyOn(user, 'click')
        const logout = screen.getByTestId('logout')
        await user.click(logout)

        expect(about).toHaveBeenCalledTimes(1)
    })
})


