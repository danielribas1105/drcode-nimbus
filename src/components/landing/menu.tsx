import MenuItem from "./menu-item"

export default function Menu() {
	return (
		<nav className="flex gap-5">
			<MenuItem text="Início" link="#inicio" />
			<MenuItem text="Vantagens" link="#highlights" />
			<MenuItem text="Depoimentos" link="#depoimentos" />
		</nav>
	)
}
