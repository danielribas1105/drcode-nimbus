"use client"
import useFormTransation from "@/data/hooks/useFormTransation"
import PartForm from "../templates/part-form"
import userFake from "@/data/constants/UserTest"
import UserNimbus from "@/logic/core/user/UserNimbus"
import { TextInput } from "@mantine/core"
import { TextFormat } from "@/logic/utils/Text"

export default function FormUser() {
	const { transationData, changeAttribute } = useFormTransation<UserNimbus>(userFake[0])

	return (
		<div className="flex flex-col gap-4">
			<PartForm
				title="Seu nome"
				description="Esse é o nome usado em todas as apresentações"
				msgFooter="O nome deve possui entre 3 e 80 caracteres"
				canSave={TextFormat.textName(transationData.nome, 3, 80)}
				save={() => {}}
			>
				<TextInput value={transationData.nome} onChange={changeAttribute("nome")} />
			</PartForm>
			<PartForm
				title="CPF"
				description="O seu CPF é utilizado internamente pelo sistema"
				msgFooter="Seu CPF é armazenado de forma segura"
				canSave={false}
				save={() => {}}
			>
				<TextInput
					value={TextFormat.cpfFormat(transationData.cpf)}
					onChange={changeAttribute("cpf", TextFormat.cpfUnformat)}
				/>
			</PartForm>
			<PartForm
				title="Telefone"
				description="Utilizamos apenas para notificações do sistema"
				msgFooter="Não solicitamos nenhuma informação pelo telefone"
				canSave={false}
				save={() => {}}
			>
				<TextInput
					value={TextFormat.phoneFormat(transationData.telefone)}
					onChange={changeAttribute("telefone", TextFormat.phoneUnformat)}
				/>
			</PartForm>
		</div>
	)
}
