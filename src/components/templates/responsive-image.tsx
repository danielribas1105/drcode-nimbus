import Image from "next/image"

interface ResponsiveImageProps {
	src: string
	className?: string
}

export default function ResponsiveImage({ src, className }: ResponsiveImageProps) {
	return (
		<Image
			src={src ?? null}
			alt="Imagem de marketing"
			width={550}
			height={365}
			className={`
            w-[100%] h-[120px]
            sm:w-[200px] sm:h-[330px]
            md:w-[350px] md:h-[365px]
            lg:w-[550px] lg:h-[365px]
            rounded-xl object-cover
            ${className ?? ""}
         `}
		/>
	)
}
