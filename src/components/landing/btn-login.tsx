"use client"
import AuthenticationContext from "@/data/contexts/authentication-context"
import { IconLogin2 } from "@tabler/icons-react"
import { useContext } from "react"

export default function BtnLogin() {
	const { loginGoogle, loading } = useContext(AuthenticationContext)

	const handleLogin = async () => {
		const user = await loginGoogle()
		// O redirecionamento já acontece no contexto
		if (user) {
			console.log("Login realizado com sucesso!")
		}
	}

	return (
		<button
			className="flex items-center gap-2 font-title font-bold text-lg text-white px-3 py-1 bg-purple-800 hover:bg-purple-950 rounded-md"
			onClick={handleLogin}
		>
			<IconLogin2 />
			{loading ? "Fazendo login..." : "Entrar com Google"}
		</button>
	)
}
