'use client'
import { useEffect, useState } from "react"
import SectionPage from "../templates/section-page"
import BtnLogin from "./btn-login"
import Logo from "./logo"
import Menu from "./menu"

export default function Header() {
	const [hasScrolled, setHasScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setHasScrolled(window.scrollY > 0)
		}
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<header className={`fixed top-0 left-0 right-0 z-50 bg-white/20
			${hasScrolled ? 'bg-white/50 backdrop-blur-md backdrop-brightness-90 shadow-md' : 'bg-transparent'}`}>
			<SectionPage className="flex items-center justify-between">
				<Logo />
				<div className="flex items-center gap-10">
					<Menu />
					<BtnLogin />
				</div>
			</SectionPage>
		</header>
	)
}
