import SectionPage from "../templates/section-page"
import MenuUser from "./menu-user"
import Welcome from "./welcome"

export default function HeaderFinances() {
	return (
		<header className="bg-white/50 py-2">
			<SectionPage className="flex justify-between items-center">
				<Welcome />
				<MenuUser />
			</SectionPage>
		</header>
	)
}
