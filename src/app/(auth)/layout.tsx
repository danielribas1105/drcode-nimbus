import HeaderFinances from "@/components/finances/header"
import PageLayout from "@/components/templates/page-layout"
import { MantineProvider } from "@mantine/core"

export default function Layout({ children }: any) {
	return (
		<MantineProvider>
			<PageLayout>
				<HeaderFinances />
				{children}
			</PageLayout>
		</MantineProvider>
	)
}
