interface SectionPageProps {
	className?: string
	id?: string
	children: React.ReactNode
}

export default function SectionPage({ className, id, children }: SectionPageProps) {
	return (
		<section id={id ?? ""} className={`${className ?? ""} max-w-[1280px] mx-auto px-7 xl:px-0`}>
			{children}
		</section>
	)
}
