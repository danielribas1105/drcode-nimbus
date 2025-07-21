import Transation from "@/logic/core/finances/Transation"
import DateFormat from "@/logic/utils/Data"
import Money from "@/logic/utils/Money"
import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

interface ListProps {
	transations: Transation[]
	selectTransation?: (transation: Transation) => void
}

export default function List({ transations, selectTransation }: ListProps) {
	return (
		<div className="flex flex-col gap-3">
			{transations.length > 0 ? (
				transations.map((t, i) => (
					<div
						key={t.id}
						className={`flex items-center gap-3 p-3 cursor-pointer rounded-lg ${i % 2 === 0 ? "bg-logo-purple" : "bg-logo-purple/70"} hover:bg-zinc-300/50`}
						onClick={() => selectTransation?.(t)}
					>
						<span
							className={`flex justify-center items-center w-8 h-8 p-1.5 rounded-full ${t.tipo === "receita" ? "bg-green-500" : "bg-red-500"}`}
						>
							{t.tipo === "receita" ? <IconTrendingUp /> : <IconTrendingDown />}
						</span>
						<span className="w-full md:w-1/2">{t.descricao}</span>
						<span className="hidden md:inline flex-1">{DateFormat.ddmmyy.format(new Date(t.data))}</span>
						<span>{Money.formatMoney(t.valor)}</span>
					</div>
				))
			) : (
				<span>Sem transações!</span>
			)}
		</div>
	)
}
