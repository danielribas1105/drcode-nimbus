import { TransationType } from "./TransationType"

export default interface Transation {
	id?: string
	descricao: string
	valor: number
	data: Date
	tipo: TransationType
}
