"use client"
import FormFinances from "@/components/finances/form"
import List from "@/components/finances/list"
import Content from "@/components/templates/content"
import SectionPage from "@/components/templates/section-page"
import transationsFake from "@/data/constants/TransationTest"
import Transation from "@/logic/core/finances/Transation"
import { useState } from "react"

export default function Finances() {
	const [transations, setTransations] = useState<Transation[]>(transationsFake)
	const [transation, setTransation] = useState<Transation | null>(null)
	return (
		<SectionPage>
			<Content className="flex flex-col gap-5 justify-center">
				{transation ? (
					<FormFinances transation={transation} cancel={() => setTransation(null)} />
				) : (
					<List transations={transations} selectTransation={setTransation} />
				)}
			</Content>
		</SectionPage>
	)
}
