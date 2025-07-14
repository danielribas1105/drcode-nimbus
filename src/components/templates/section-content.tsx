import ResponsiveImage from "./responsive-image"

interface SectionContentProps {
	title: string
	subtitle: string
	inverter?: boolean
	urlImage: string
	clasName?: string
}

export default function SectionContent({
	title,
	subtitle,
	inverter,
	urlImage,
	clasName,
}: SectionContentProps) {
	return (
		<div
			className={`flex justify-around 
         ${inverter ? "sm:flex-row-reverse" : "sm:flex-row"} ${clasName ?? ""}`}
		>
			<div className="flex flex-col justify-center items-center gap-7 text-center px-20">
				<h2 className="font-title text-5xl">{title}</h2>
				<h3 className="text-2xl">{subtitle}</h3>
			</div>
			<ResponsiveImage
				src={urlImage}
				className={`hidden md:inline ${inverter ? "-rotate-3" : "rotate-3"}`}
			/>
		</div>
	)
}
