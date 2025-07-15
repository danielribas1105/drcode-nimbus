import user from "@/data/constants/UserTeste"

export default function Welcome() {
	return (
		<div className={`font-title font-bold text-3xl text-logo-black`}>
			Olá <span className="hidden sm:inline">{user[0]?.name?.split(" ")[0]}</span>
			👋
		</div>
	)
}
