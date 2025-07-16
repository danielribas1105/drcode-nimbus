export default class Money {
	private static language = "pt-BR"
	private static currency = "BRL"

	static formatMoney(n: number) {
		return (n ?? 0).toLocaleString(Money.language, {
			style: "currency",
			currency: Money.currency,
		})
	}
}
