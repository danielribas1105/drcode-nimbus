import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandSpotify } from "@tabler/icons-react"
import SectionPage from "../templates/section-page"
import Logo from "./logo"
import SocialMedia from "./social-media"

export default function Footer() {
	return (
		<footer className="bg-black/30 text-white">
			<SectionPage className="flex justify-between items-center h-[100px]">
				<Logo />
				<div className="flex justify-center items-center gap-2">
					<SocialMedia link={""} icon={<IconBrandGithub />} />
					<SocialMedia link={""} icon={<IconBrandInstagram />} />
					<SocialMedia link={""} icon={<IconBrandFacebook />} />
					<SocialMedia link={""} icon={<IconBrandSpotify />} />
				</div>
				<div>Desenvolvido por DRCode</div>
			</SectionPage>
		</footer>
	)
}
