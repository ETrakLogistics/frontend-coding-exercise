import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Button from "./Button";

describe('Button', () => {
    test('Renders children', () => {
        const onClick = jest.fn();

        const {getByRole} = render(<Button onClick={onClick}>Content</Button>);

        expect(getByRole("button")).toHaveTextContent("Content");
    });

    test('Triggers the callback when clicked', async () => {
        const onClick = jest.fn();

        const {getByRole} = render(<Button onClick={onClick}>Content</Button>);

        expect(onClick).not.toHaveBeenCalled();

        await userEvent.click(getByRole("button"));

        expect(onClick).toHaveBeenCalled();
    });
});