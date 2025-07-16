interface ContentProps {
	children: React.ReactNode
	className?: string
}

export default function Content({ children, className }: ContentProps) {
	return <div className={`flex flex-col p-7 ${className ?? ""}`}>{children}</div>
}
