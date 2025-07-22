import PartForm from "../templates/part-form"

export default function FormUser() {
	return (
		<div>
			<PartForm
				title="Seu nome"
				description="Esse é o nome usado em todas as apresentações"
				msgFooter={""}
			>
				Useuário
			</PartForm>
		</div>
	)
}
