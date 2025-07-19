import { IconCircleX } from "@tabler/icons-react"

interface NotFoundProps {
	children: React.ReactNode
}

export default function NotFound({ children }: NotFoundProps) {
	return (
		<div className="flex flex-col items-center rounded-lg text-zinc-700 p-7">
			<IconCircleX size={80} stroke={1} />
			<span className="text-lg">{children}</span>
		</div>
	)
}
