import HeaderFinances from "@/components/finances/header"
import PageLayout from "@/components/templates/page-layout"

export default function Layout({ children }: any) {
	return (
		<PageLayout>
			<HeaderFinances />
			{children}
		</PageLayout>
	)
}
