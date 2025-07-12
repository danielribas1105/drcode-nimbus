interface SectionPageProps {
	className?: string
	children: React.ReactNode
}

export default function SectionPage({ className, children }: SectionPageProps) {
	return <section className={`${className ?? ""} bg-red-400 max-w-[1280px] mx-auto`}>{children}</section>
}
