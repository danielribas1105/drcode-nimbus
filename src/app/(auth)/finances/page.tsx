"use client"
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
			<Content>
				<List transations={transations} />
			</Content>
		</SectionPage>
	)
}
