"use client"
import { useContext } from "react"
import SectionPage from "../templates/section-page"
import MenuUser from "./menu-user"
import Welcome from "./welcome"
import AuthenticationContext from "@/data/contexts/authentication-context"

export default function HeaderFinances() {
	const userGoogle = useContext(AuthenticationContext)

	return (
		<header className="bg-white/50 py-2">
			<SectionPage className="flex justify-between items-center">
				<Welcome userName={userGoogle.user?.nome.split(" ")[0]} />
				<MenuUser
					userName={userGoogle.user?.nome}
					userEmail={userGoogle.user?.email}
					userImage={userGoogle.user?.imageUrl}
				/>
			</SectionPage>
		</header>
	)
}
