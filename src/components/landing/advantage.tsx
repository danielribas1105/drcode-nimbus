import SectionContent from "../templates/section-content"
import SectionPage from "../templates/section-page"

export default function Advantage() {
	return (
		<div id="highlight" className="bg-black/30 py-20">
			<SectionPage className="flex flex-col gap-20">
				<SectionContent
					title="Gerenciador financeiro completo e simples de utilizar"
					subtitle="Aqui você consegue ter controle completo das suas finanças e uma visualização fácil de entender. O caminho da economia começa aqui!"
					inverter
					urlImage="/images/vantagem-1.jpg"
				/>
				<SectionContent
					title="Organizado para você nunca mais esquecer uma conta"
					subtitle="Visualize e acompanhe as suas finanças dia a dia. A organização mensal vai te ajudar a ter um controle claro das receitas e despesas!"
					urlImage="/images/vantagem-2.jpg"
				/>
				<SectionContent
					title="Ideal para planejamento financeiro"
					subtitle="Nosso princípio número 1 é ser uma plataforma que torne o controle financeiro simples, então o planejamento se torna algo natural!"
					inverter
					urlImage="/images/vantagem-3.jpg"
				/>
			</SectionPage>
		</div>
	)
}
