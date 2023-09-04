import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Login',
    description: 'Tela de Login',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                style={{
                    backgroundImage:
                        "url('https://img.freepik.com/premium-photo/smooth-gradient-black-background_41969-15179.jpg?w=900')",
                }}
                className={twMerge(
                    inter.className,
                    'w-screen bg-center bg-cover h-screen bg-no-repeat flex justify-center items-center'
                )}
            >
                {children}
            </body>
        </html>
    );
}
