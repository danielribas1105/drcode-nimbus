import Link from "next/link"
import React from "react"

interface SocialMediaProps {
   link: string
   icon: React.ReactElement
}

export default function SocialMedia({ link, icon}: SocialMediaProps) {
   return(
      <Link href={link} target="_blanck">
         {icon}
      </Link>
   )
}