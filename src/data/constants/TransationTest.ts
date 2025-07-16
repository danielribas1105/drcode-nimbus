import Transation from "@/logic/core/finances/Transation"
import { TransationType } from "@/logic/core/finances/TransationType"
import Id from "@/logic/core/shared/Id"

const transation: Transation[] = [
	{
		id: Id.novo(),
		descricao: "Salário",
		data: new Date(2025, 7, 15),
		valor: 7123.34,
		tipo: TransationType.RECEITA,
	},
]
