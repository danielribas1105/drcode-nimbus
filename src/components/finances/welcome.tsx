interface WelcomeProps {
	userName: string | undefined
}

export default function Welcome({ userName }: WelcomeProps) {
	return (
		<div className={`font-title font-bold text-3xl text-logo-black`}>
			Olá <span className="hidden sm:inline">{userName}</span>
			👋
		</div>
	)
}
