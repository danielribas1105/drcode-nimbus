import React from "react"

export interface TitleSectionProps {
	icon?: any
	main: string
	sub?: string
	className?: string
}

export default function TitleSection(props: TitleSectionProps) {
	return (
		<div className={`flex items-center gap-2 ${props.className ?? ""}`}>
			{props.icon && (
				<div className={`text-white`}>
					{React.cloneElement(props.icon, {
						stroke: 1,
						size: props.sub ? 50 : 24,
					})}
				</div>
			)}
			<div className="flex flex-col">
				<h2 className="text-white text-2xl font-black">{props.main}</h2>
				<h3 className="text-white text-sm font-thin -mt-1">{props.sub}</h3>
			</div>
		</div>
	)
}
