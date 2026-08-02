import { Footer, Header } from "@/component/layout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <Header></Header>
            <body>{children}</body>
            <Footer></Footer>
        </html>
    );
}
