import { TransationType } from "./TransationType"

export default interface Transation {
	id?: string
	descricao: string
	valor: number
	data: Date
	tipo: TransationType
}

export const transationEmpty: Transation = {
	descricao: "",
	valor: 0,
	data: new Date(),
	tipo: TransationType.DESPESA,
}
