import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
    onClick: () => void;
}

export default function Button({onClick, children}: Props) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}