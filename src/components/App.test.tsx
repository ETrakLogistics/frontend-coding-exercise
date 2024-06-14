import {render} from '@testing-library/react';
import App from './App';

describe('App', () => {
    test('Renders', () => {
        const {getByText} = render(<App />)
        expect(getByText("Frontend Coding Exercise")).toBeInTheDocument()
    })
});