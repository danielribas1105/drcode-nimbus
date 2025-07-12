import type { Metadata } from "next"
import { Comfortaa, Roboto } from "next/font/google"
import "./globals.css"

const confort = Comfortaa({
	variable: "--font-confort",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
})

const roboto = Roboto({
	variable: "--font-roboto",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
	title: "Nimbus",
	description: "Uma nova forma de controlar seus gastos",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body className={`${confort.variable} ${roboto.variable} antialiased`}>{children}</body>
		</html>
	)
}
