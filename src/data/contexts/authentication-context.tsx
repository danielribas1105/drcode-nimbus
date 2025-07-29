"use client"
import UserNimbus from "@/logic/core/user/UserNimbus"
import Authentication from "@/logic/firebase/auth/authentication"
import { useRouter } from "next/navigation"
import { createContext, useEffect, useState } from "react"

interface AuthenticationProps {
	loading: boolean
	user: UserNimbus | null
	loginGoogle: () => Promise<UserNimbus | null>
	logout: () => Promise<void>
}

const AuthenticationContext = createContext<AuthenticationProps>({
	loading: true,
	user: null,
	loginGoogle: async () => null,
	logout: async () => {},
})

export function AuthenticationProvider(props: any) {
	const [loading, setLoading] = useState<boolean>(true)
	const [user, setUser] = useState<UserNimbus | null>(null)
	const router = useRouter()
	const authentication = new Authentication()

	useEffect(() => {
		const cancel = authentication.monitoring((user) => {
			setUser(user)
			setLoading(false)
			router.push("/")
		})
		return () => cancel()
	}, [])

	async function loginGoogle() {
		try {
			setLoading(true)
			const user = await authentication.loginGoogle()
			setUser(user)

			// Redireciona para finances após login bem-sucedido
			if (user) {
				router.push("/finances")
			}

			return user
		} catch (error) {
			console.error("Erro no login:", error)
			return null
		} finally {
			setLoading(false)
		}
	}

	async function logout() {
		await authentication.logout()
		setUser(null)
	}

	return (
		<AuthenticationContext.Provider
			value={{
				loading,
				user,
				loginGoogle,
				logout,
			}}
		>
			{props.children}
		</AuthenticationContext.Provider>
	)
}

export default AuthenticationContext
