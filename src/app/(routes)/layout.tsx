import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Venture Catalyst",
    description: "Redefining Entrepreneurship",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-black`}>
                <div className="flex">
                    <Sidebar />
                    <div className=" p-4">
                        {children}
                    </div>

                </div>
            </body>
        </html>
    );
}
