import HeaderFinances from "@/components/finances/header"
import PageLayout from "@/components/templates/page-layout"
import { MantineProvider } from "@mantine/core"

export default function Finances() {
	return (
		<MantineProvider>
			<PageLayout>
				<HeaderFinances />
				Finanças
			</PageLayout>
		</MantineProvider>
	)
}
