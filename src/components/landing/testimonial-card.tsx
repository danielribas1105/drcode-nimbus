import Image from "next/image"

interface TestimonialCardProps {
   title: string
   subtitle: string
   text: string
   imageUrl: string
}

export default function TestimonialCard({ title, subtitle, text, imageUrl}: TestimonialCardProps) {
   return (
      <div className="flex flex-col justify-center items-center gap-2 bg-black/30 rounded-lg p-5">
         <Image src={imageUrl} alt="Avatar" width={80} height={80} className="max-w-[80px] max-h-[80px] object-cover rounded-tl-xl rounded-b-xl"/>
         <div className="flex flex-col items-center">
            <h3 className="font-title font-bold text-lg">{title}</h3>
            <h4 className="opacity-50">{subtitle}</h4>
         </div>
         <p className="text-center">{text}</p>
      </div>
   )
}