import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./globals.css";
import BootstrapClient from "./components/BootstrapJavascript";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Next Product Details",
    description: "A React Application Using Next Framework",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
                <BootstrapClient />
            </body>
        </html>
    );
}
