"use client"
import FormFinances from "@/components/finances/form"
import List from "@/components/finances/list"
import NotFound from "@/components/finances/not-found"
import Content from "@/components/templates/content"
import SectionPage from "@/components/templates/section-page"
import transationsFake from "@/data/constants/TransationTest"
import Transation, { transationEmpty } from "@/logic/core/finances/Transation"
import Id from "@/logic/core/shared/Id"
import { Button } from "@mantine/core"
import { IconPlus } from "@tabler/icons-react"
import { useState } from "react"

export default function Finances() {
	const [transations, setTransations] = useState<Transation[]>(transationsFake)
	const [transation, setTransation] = useState<Transation | null>(null)

	function saveTransation(transation: Transation) {
		const newTransList = transations.filter((t) => t.id !== transation.id)
		setTransations([
			...newTransList,
			{
				...transation,
				id: transation.id ?? Id.newId(),
			},
		])
		setTransation(null)
	}

	function deleteTransation(transation: Transation) {
		const newTransList = transations.filter((t) => t.id !== transation.id)
		setTransations(newTransList)
		setTransation(null)
	}

	return (
		<SectionPage>
			<Content className="flex flex-col gap-5 justify-center">
				<Button
					className="bg-blue-900"
					leftSection={<IconPlus />}
					onClick={() => setTransation(transationEmpty)}
				>
					Nova transação
				</Button>
				{transation ? (
					<FormFinances
						transation={transation}
						saveTrans={saveTransation}
						deleteTrans={deleteTransation}
						cancel={() => setTransation(null)}
					/>
				) : transations.length ? (
					<List transations={transations} selectTransation={setTransation} />
				) : (
					<NotFound>Nenhuma transação encontrada!</NotFound>
				)}
			</Content>
		</SectionPage>
	)
}
