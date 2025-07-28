import userTest from "@/data/constants/UserTest"
import { Avatar, Menu } from "@mantine/core"
import { IconArrowsRightLeft, IconLogout, IconUser } from "@tabler/icons-react"
import Link from "next/link"

interface MenuUserProps {
	userName: string | undefined
	userEmail: string | undefined
	userImage: string | null | undefined
}

export default function MenuUser({ userName, userEmail, userImage }: MenuUserProps) {
	function logout() {
		alert("Logout")
	}

	return (
		<Menu shadow="md" width={200}>
			<Menu.Target>
				<div className="flex items-center gap-3 cursor-pointer">
					<div className="flex flex-col">
						<span className="text-sm text-logo-black font-title font-bold">{userName}</span>
						<span className="text-xs text-logo-black/70">{userEmail}</span>
					</div>
					<Avatar size={40} radius="xl" src={userImage} />
				</div>
			</Menu.Target>

			<Menu.Dropdown>
				<Menu.Label>Usuário</Menu.Label>
				<Link href="/finances">
					<Menu.Item leftSection={<IconArrowsRightLeft size={16} />}>Finanças</Menu.Item>
				</Link>
				<Link href="/user">
					<Menu.Item leftSection={<IconUser size={16} />}>Usuário</Menu.Item>
				</Link>
				<Menu.Divider />
				<Menu.Item leftSection={<IconLogout size={16} color="#ff0000" />} onClick={logout}>
					<span className="text-red-700">Sair</span>
				</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	)
}
