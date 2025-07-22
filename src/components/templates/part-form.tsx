import { Button } from "@mantine/core"
import React from "react"

interface PartFormProps {
	title: string
	description: string
	msgFooter: string
	textButton?: string
	canSave?: boolean
	save?: () => void
	children: React.ReactNode
}

export default function PartForm({
	title,
	description,
	msgFooter,
	textButton,
	canSave,
	save,
	children,
}: PartFormProps) {
	return (
		<div
			className={`
         flex flex-col
         text-white overflow-hidden
         border border-zinc-800 rounded-lg
      `}
		>
			<div className="flex flex-col p-7">
				<div className="text-3xl font-black">{title}</div>
				<div className="mt-4 text-zinc-400">{description}</div>
				<div className="mt-3">{children}</div>
			</div>
			<div
				className={`
               flex justify-end sm:justify-between items-center
               bg-black px-7 py-5
         `}
			>
				<span className="hidden sm:inline text-zinc-400">{msgFooter}</span>
				<Button
					color={canSave ? "green" : "gray"}
					className={canSave ? "bg-green-500" : "bg-gray-500"}
					onClick={() => (canSave ? save?.() : undefined)}
				>
					{textButton ?? "Salvar"}
				</Button>
			</div>
		</div>
	)
}
