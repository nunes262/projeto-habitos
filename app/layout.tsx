import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Meta Diária",
    description: "Gerencie seus hábitos na palma da sua mão.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${nunito.className} flex flex-col mt-5 bg-neutral-900 items-center`}
            >
                <img
                    src="/images/logo.svg"
                    alt="logo"
                    width={200}
                    height={200}
                />
                {children}
            </body>
        </html>
    );
}
