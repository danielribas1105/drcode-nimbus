import Link from "next/link"

interface MenuItemProps {
	text: string
	link: string
	className?: string
}

export default function MenuItem({ text, link, className }: MenuItemProps) {
	return (
		<Link
			href={link}
			className={`${className ?? "font-title font-bold text-lg hover:underline hover:decoration-4 hover:decoration-logo-green hover:underline-offset-8"}`}
		>
			{text}
		</Link>
	)
}
