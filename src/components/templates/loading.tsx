import Image from "next/image"
import PageLayout from "./page-layout"
import loadingGif from "../../../public/images/loading.gif"

export default function Loading() {
	return (
		<PageLayout className="flex justify-center items-center">
			<Image src={loadingGif} alt="Loading..." width={40} height={40} priority />
		</PageLayout>
	)
}
