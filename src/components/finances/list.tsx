import Transation from "@/logic/core/finances/Transation"
import DateFormat from "@/logic/utils/Data"
import Money from "@/logic/utils/Money"

interface ListProps {
	transations: Transation[]
}

export default function List({ transations }: ListProps) {
	return (
		<div className="flex flex-col gap-3">
			{transations.length > 0 ? (
				transations.map((t, i) => (
					<div
						key={t.id}
						className={`flex items-center gap-3 p-3 cursor-pointer rounded-lg ${i % 2 === 0 ? "bg-logo-purple" : "bg-logo-purple/70"} hover:bg-zinc-300/50`}
					>
						<span className="w-full md:w-1/2">{t.descricao}</span>
						<span className="hidden md:inline flex-1">{DateFormat.ddmmyy.format(t.data)}</span>
						<span>{Money.formatMoney(t.valor)}</span>
					</div>
				))
			) : (
				<span>Sem transações!</span>
			)}
		</div>
	)
}
