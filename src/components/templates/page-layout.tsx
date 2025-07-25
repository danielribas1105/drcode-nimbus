import React from "react"

interface PageLayoutProps {
	className?: string
	children: React.ReactNode
	public?: boolean
}

export default function PageLayout({ className, children }: PageLayoutProps) {
	return <div className={`${className ?? ""} min-h-screen`}>{children}</div>
}
