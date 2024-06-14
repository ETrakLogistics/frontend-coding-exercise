import {render} from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App', () => {
    test('Renders', () => {
        const {getByText} = render(<App />)
        expect(getByText("Frontend Coding Exercise")).toBeInTheDocument()
    })

    test('Displays a count button', async () => {
        const {getByRole} = render(<App />)

        const button = getByRole("button");

        expect(button).toHaveTextContent("Count is 0")

        await userEvent.click(button);

        expect(button).toHaveTextContent("Count is 1")
    });
});