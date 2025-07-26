import userTest from "@/data/constants/UserTest"

export default function Welcome() {
	return (
		<div className={`font-title font-bold text-3xl text-logo-black`}>
			Olá <span className="hidden sm:inline">{userTest[0]?.nome?.split(" ")[0]}</span>
			👋
		</div>
	)
}
