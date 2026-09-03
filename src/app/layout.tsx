import "./golobal.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <title>Teens</title>
            </head>

            <body>
                {children}
            </body>
        </html>
    );
}