"use client"
import { IconLogin2 } from "@tabler/icons-react"
import ResponsiveImage from "../templates/responsive-image"
import SectionPage from "../templates/section-page"

export default function Slogan() {
	function Login() {
		alert("Iniciar agora")
	}

	function ShowVideo() {
		alert("Assistir vídeo")
	}

	return (
		<SectionPage className="md:flex h-screen mt-28 md:mt-0">
			<div className="flex flex-col flex-1 justify-center items-center gap-10">
				<div className="font-title text-5xl text-center flex flex-col items-center gap-2">
					<span>Controle fácil,</span>
					<span>vida financeira leve</span>
				</div>
				<p className="text-2xl text-center">
					A melhor maneira para organizar o seu dinheiro. Suas finanças pessoais, reinventadas.
				</p>
				<div className="flex gap-3 font-title font-bold text-[16px] md:text-lg">
					<button
						className="flex items-center gap-2 px-3 py-1 bg-purple-800 hover:bg-purple-950 rounded-md"
						onClick={Login}
					>
						<IconLogin2 />
						Iniciar Agora
					</button>
					<button
						className="flex items-center gap-2 px-3 py-1 border-2 border-white hover:bg-purple-950/40 rounded-md"
						onClick={ShowVideo}
					>
						<IconLogin2 />
						Assista ao vídeo
					</button>
				</div>
			</div>
			<div className="hidden md:flex flex-1 items-center justify-center">
				<ResponsiveImage src="/images/slogan.jpg" className="hidden md:inline rotate-3" />
			</div>
		</SectionPage>
	)
}
