import Content from "@/components/templates/content"
import SectionPage from "@/components/templates/section-page"
import FormUser from "@/components/user/form"
import TitleSection from "@/components/user/title-section"
import userFake from "@/data/constants/UserTest"
import { IconForms } from "@tabler/icons-react"

export default function User() {
	return (
		<SectionPage>
			<Content className="gap-4">
				<TitleSection
					icon={<IconForms />}
					main="Dados Cadastrais"
					sub={`Informações de ${userFake[0].email}`}
				/>
				<FormUser />
			</Content>
		</SectionPage>
	)
}
