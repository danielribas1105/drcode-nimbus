import Transation from "@/logic/core/finances/Transation"
import { useState } from "react"

export default function useFormTransation(transData: Transation) {
	const [transationData, setTransationData] = useState(transData)

	return {
		transationData,
		setTransationData,
	}
}
