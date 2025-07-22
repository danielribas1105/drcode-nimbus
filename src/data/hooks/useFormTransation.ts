import { useState } from "react"

export default function useFormTransation<T = any>(transData: T) {
	const [transationData, setTransationData] = useState<T>(transData)

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
