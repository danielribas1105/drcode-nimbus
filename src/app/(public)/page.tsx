import Advantage from "@/components/landing/advantage"
import Header from "@/components/landing/header"
import Highlights from "@/components/landing/highlights"
import Slogan from "@/components/landing/slogan"
import PageLayout from "@/components/templates/page-layout"

export default function Home() {
	return (
		<PageLayout>
			<Header />
			<main className="flex flex-col gap-5 h-full">
				<Slogan />
				<Advantage />
				<Highlights />
			</main>
		</PageLayout>
	)
}
