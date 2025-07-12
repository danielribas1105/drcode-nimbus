import SectionPage from "../templates/section-page"
import Logo from "./logo"

export default function Menu() {
	return (
		<SectionPage className="flex justify-between">
			<Logo />
			<div>Itens menu</div>
		</SectionPage>
	)
}
