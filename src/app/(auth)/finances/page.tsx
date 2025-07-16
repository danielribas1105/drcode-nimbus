"use client"
import FormFinances from "@/components/finances/form"
import List from "@/components/finances/list"
import Content from "@/components/templates/content"
import SectionPage from "@/components/templates/section-page"
import transationsFake from "@/data/constants/TransationTest"
import Transation from "@/logic/core/finances/Transation"
import { useState } from "react"

export default function Finances() {
	const [transations, setTransation] = useState<Transation[]>(transationsFake)
	return (
		<SectionPage>
			<Content className="flex flex-col gap-5 justify-center">
				<List transations={transations} />
				<FormFinances transation={transations[0]}/>
			</Content>
		</SectionPage>
	)
}
