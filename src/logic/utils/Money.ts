export default class Money {
	private static language = "pt-BR"
	private static currency = "BRL"

	static formatMoney(n: number): string {
		return (n ?? 0).toLocaleString(Money.language, {
			style: "currency",
			currency: Money.currency,
		})
	}

	static desFormatMoney(value: string): number {
		const nums = value.replace(/[^0-9]/g, "")
		const i = nums.length - 2
		return Number(`${nums.substring(0, i)}.${nums.substring(i)}`)
	}
}
