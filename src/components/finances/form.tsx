import Transation from "@/logic/core/finances/Transation"
import { TransationType } from "@/logic/core/finances/TransationType"
import Money from "@/logic/utils/Money"
import { TextInput, Radio, Group, Button } from "@mantine/core"
import { DatePickerInput } from "@mantine/dates"
import "dayjs/locale/pt-br"

interface FormFinancesProps {
	transation: Transation
	cancel?: () => void
}

export default function FormFinances({ transation, cancel }: FormFinancesProps) {
	function changeAttribute(type: string) {}

	return (
		<div className="flex flex-col border border-zinc-500 bg-purple-900/50 rounded-xl overflow-hidden">
			<div className="bg-white/60 py-3 px-7 text-zinc-800">{transation.descricao}</div>
			<div className="flex flex-col gap-4 p-4 sm:p-7">
				<TextInput label="Descrição" value={transation.descricao} />
				<TextInput label="Valor" value={Money.formatMoney(transation.valor)} />
				<DatePickerInput label="Data" value={transation.data} locale="pt-BR" valueFormat="DD/MM/YYYY" />
				<Radio.Group value={transation.tipo} onChange={() => changeAttribute("tipo")}>
					<Group>
						<Radio value={TransationType.RECEITA} label="Receita" />
						<Radio value={TransationType.DESPESA} label="Despesa" />
					</Group>
				</Radio.Group>
				<div className="flex gap-5">
					<Button className="bg-green-500" color="green">
						Salvar
					</Button>
					<Button className="bg-zinc-500" color="gray" onClick={cancel}>
						Voltar
					</Button>
					{transation.id && (
						<Button className="bg-red-500" color="red">
							Excluir
						</Button>
					)}
				</div>
			</div>
		</div>
	)
}
