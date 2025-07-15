import Image from "next/image"

export default function Logo() {
	return (
		<div className="flex items-center">
			<Image
				src="/images/logo-nimbus-full-horizontal.png"
				alt="Logo Nimbus - Controle de Gastos"
				width={300}
				height={150}
			/>
		</div>
	)
}
