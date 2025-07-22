import Id from "@/logic/core/shared/Id"
import User from "@/logic/core/user/User"

const user: User[] = [
	{
		id: Id.newId(),
		nome: "Daniel Ribas",
		email: "danielribas@gmail.com",
		cpf: "123.456.789-00",
		telefone: "(21) 56471-5594",
		imageUrl: null,
	},
]

export default user
