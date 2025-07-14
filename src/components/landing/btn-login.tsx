"use client"
import { IconLogin2 } from "@tabler/icons-react"

export default function BtnLogin() {
	function login() {
		alert("Clique login!")
	}

	return (
		<button
			className="flex items-center gap-2 font-title font-bold text-lg px-3 py-1 bg-purple-800 hover:bg-purple-950 rounded-md"
			onClick={login}
		>
			<IconLogin2 />
			Login
		</button>
	)
}
