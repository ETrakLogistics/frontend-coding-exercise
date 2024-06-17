import {render} from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App', () => {
    test('Renders', () => {
        const {getByText} = render(<App />)
        expect(getByText("Star Wars Delivery Service")).toBeInTheDocument()
    })

    test('Displays a count button', async () => {
        const {getByRole, getByText} = render(<App />)

        const button = getByRole("button");

        expect(button).toHaveTextContent("Add parcel to Delivery Spaceship")

        expect(getByText("Delivery Spaceship has 0 parcels")).toBeInTheDocument()

        await userEvent.click(button);

        expect(getByText("Delivery Spaceship has 1 parcels")).toBeInTheDocument()
    });
});