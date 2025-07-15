import HeaderFinances from "@/components/finances/header"
import PageLayout from "@/components/templates/page-layout"
import { MantineProvider } from "@mantine/core"

export default function User() {
	return (
		<MantineProvider>
			<PageLayout>
				<HeaderFinances />
				Usuário
			</PageLayout>
		</MantineProvider>
	)
}
