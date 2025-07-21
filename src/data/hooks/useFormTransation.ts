import Transation from "@/logic/core/finances/Transation"
import { useState } from "react"

export default function useFormTransation(transData: Transation) {
	const [transationData, setTransationData] = useState(transData)

	function changeAttribute(attribute: string, fn?: Function) {
		return (value: any) => {
			const v = value?.target?.value ?? value
			setTransationData({ ...transData, [attribute]: fn?.(v) ??  v })
		}
	}

	return {
		transationData,
		setTransationData,
		changeAttribute
	}
}
