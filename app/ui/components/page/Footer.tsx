import { ReactNode } from 'react';

interface FooterProps {
    children: ReactNode;
}

export function Footer({ children }: FooterProps) {
    return (
        <footer className="flex justify-center w-[100%] gap-1">
            {children}
        </footer>
    );
}