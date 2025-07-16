import Transation from "@/logic/core/finances/Transation"
import { TransationType } from "@/logic/core/finances/TransationType"
import Id from "@/logic/core/shared/Id"

const transationsFake: Transation[] = [
	{
		id: Id.novo(),
		descricao: "Salário",
		data: new Date(2025, 7, 2),
		valor: 7123.34,
		tipo: TransationType.RECEITA,
	},
	{
		id: Id.novo(),
		descricao: "Aluguel",
		data: new Date(2025, 7, 10),
		valor: 1100.0,
		tipo: TransationType.DESPESA,
	},
	{
		id: Id.novo(),
		descricao: "Luz",
		data: new Date(2025, 7, 6),
		valor: 278.9,
		tipo: TransationType.DESPESA,
	},
	{
		id: Id.novo(),
		descricao: "Internet",
		data: new Date(2025, 7, 15),
		valor: 153.0,
		tipo: TransationType.DESPESA,
	},
	{
		id: Id.novo(),
		descricao: "Gás",
		data: new Date(2025, 7, 15),
		valor: 68.0,
		tipo: TransationType.DESPESA,
	},
]

export default transationsFake
