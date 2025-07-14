import SectionPage from "../templates/section-page"
import BtnLogin from "./btn-login"
import Logo from "./logo"
import Menu from "./menu"

export default function Header() {
	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-white/20">
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
