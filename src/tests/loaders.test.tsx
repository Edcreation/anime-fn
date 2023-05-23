import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect';
import { ErrorBar, LoadingBar } from '../components/shelf';
import { vi } from 'vitest';
import { Spinner } from '../components';

vi.useFakeTimers();

describe('Bars Loading and Error', () => {
    it('Loading Bar', async () => {
        render(
            <LoadingBar />
        , {wrapper: BrowserRouter})
        expect(screen.getByText('Loading...')).toBeInTheDocument()
    })
    it('Error Bar', async () => {
        const testError = 'This is Error'
        render(
            <ErrorBar error={testError} />
        , {wrapper: BrowserRouter})
        vi.advanceTimersByTime(1000)
        expect(screen.getByText(testError)).toBeInTheDocument()  
    })
    it('Error Bar', async () => {
        render(
            <Spinner />
        , {wrapper: BrowserRouter})
        vi.advanceTimersByTime(1000)
        expect(screen.getByText('Loading...')).toBeInTheDocument()  
    })
})
