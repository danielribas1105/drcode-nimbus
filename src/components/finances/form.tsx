import useFormTransation from "@/data/hooks/useFormTransation"
import Transation from "@/logic/core/finances/Transation"
import { TransationType } from "@/logic/core/finances/TransationType"
import Money from "@/logic/utils/Money"
import { TextInput, Radio, Group, Button } from "@mantine/core"
import { DatePickerInput } from "@mantine/dates"
import "dayjs/locale/pt-br"
import { useState } from "react"

interface FormFinancesProps {
	transation: Transation
	saveTrans?: (transation: Transation) => void
	deleteTrans?: (transation: Transation) => void
	cancel?: () => void
}

export default function FormFinances({ transation, saveTrans, deleteTrans, cancel }: FormFinancesProps) {
	const { transationData, setTransationData } = useFormTransation(transation)

	function changeAttribute(type: string) {}

	return (
		<div className="flex flex-col border border-zinc-500 bg-purple-900/50 rounded-xl overflow-hidden">
			<div className="bg-white/60 py-3 px-7 text-zinc-800">{transation.descricao}</div>
			<div className="flex flex-col gap-4 p-4 sm:p-7">
				<TextInput
					label="Descrição"
					value={transationData.descricao}
					onChange={(e) =>
						setTransationData({
							...transationData,
							descricao: e.currentTarget.value,
						})
					}
				/>
				<TextInput
					label="Valor"
					value={Money.formatMoney(transationData.valor)}
					onChange={(e) =>
						setTransationData({
							...transationData,
							valor: Money.desFormatMoney(e.currentTarget.value),
						})
					}
				/>
				<DatePickerInput
					label="Data"
					value={transationData.data}
					locale="pt-BR"
					valueFormat="DD/MM/YYYY"
				/>
				<Radio.Group value={transationData.tipo} onChange={() => changeAttribute("tipo")}>
					<Group>
						<Radio value={TransationType.RECEITA} label="Receita" />
						<Radio value={TransationType.DESPESA} label="Despesa" />
					</Group>
				</Radio.Group>
				<div className="flex gap-5">
					<Button className="bg-green-500" color="green" onClick={() => saveTrans?.(transationData)}>
						Salvar
					</Button>
					<Button className="bg-zinc-500" color="gray" onClick={cancel}>
						Voltar
					</Button>
					{transation.id && (
						<Button className="bg-red-500" color="red" onClick={() => deleteTrans?.(transation)}>
							Excluir
						</Button>
					)}
				</div>
			</div>
		</div>
	)
}
