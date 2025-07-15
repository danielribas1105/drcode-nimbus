import Advantage from "@/components/landing/advantage"
import Footer from "@/components/landing/footer"
import Header from "@/components/landing/header"
import Slogan from "@/components/landing/slogan"
import Testimonials from "@/components/landing/testimonials"
import PageLayout from "@/components/templates/page-layout"

export default function Home() {
	return (
		<PageLayout public>
			<Header />
			<main className="flex flex-col gap-5 h-full">
				<Slogan />
				<Advantage />
				<Testimonials />
			</main>
			<Footer />
		</PageLayout>
	)
}
