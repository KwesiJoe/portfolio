import { ReactNode } from 'react';

interface LinkProps {
    children: ReactNode;
}

export function Link({ children }: LinkProps) {
    return (
        { children }
    );
}